import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

// Lazy initialization of Resend to avoid build-time issues
let resend: Resend;

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY || "re_c1tpEyD8_NKFusih9vKVQknRAQfmFcWCv";
    resend = new Resend(apiKey);
  }
  return resend;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // Check if API key is properly configured at runtime
    const apiKey = process.env.RESEND_API_KEY || "re_c1tpEyD8_NKFusih9vKVQknRAQfmFcWCv";
    if (!apiKey || apiKey === "dummy_key_for_build") {
      return Response.json(
        { error: "Email service is not configured. Please contact directly at " + config.email },
        { status: 503 }
      );
    }

    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    const resendClient = getResendClient();
    const { data: resendData, error: resendError } = await resendClient.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

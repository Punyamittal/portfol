import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Code, Users, Award, MapPin, Calendar } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface IntroPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroPopup = ({ isOpen, onClose }: IntroPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          
          {/* Horizontal Comic Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative max-w-6xl w-full"
          >
            {/* Main Horizontal Box */}
            <div className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-2xl">
              {/* Comic dots pattern */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 text-black hover:text-red-500 font-bold text-xl"
              >
                ✕
              </Button>
              
              {/* Content in horizontal layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left side - Main intro */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center md:text-left"
                  >
                    <h2 className="text-2xl font-bold text-black mb-2 font-comic">
                      Hey there! 👋
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto md:mx-0 rounded-full mb-4"></div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-gray-800 leading-relaxed font-medium space-y-3"
                  >
                    <p>
                      I&apos;m <span className="font-bold text-blue-600">Punya</span>, an AI & ML-focused B.Tech student at VIT Chennai! 🎓
                    </p>
                    <p>
                      I love building cool stuff - from frontend development to blockchain and AI models! 💻
                    </p>
                    <p>
                      Created <span className="font-bold text-purple-600">NeuroScript</span> (my experimental programming language) and I&apos;m an AI intern at IIT Ropar! 🧠
                    </p>
                    <p>
                      Co-founded <span className="font-bold text-green-600">Hackfinity</span> and organized <span className="font-bold text-orange-600">HackHub 2025</span> with 580+ awesome participants! 🚀
                    </p>
                    <p>
                      Made it to finals at <span className="font-bold text-yellow-600">Hackronyx</span> and Top 20 at <span className="font-bold text-red-600">HackHazards</span>! Plus workshops at IIT Madras &amp; NIT Trichy! 🏆
                    </p>
                  </motion.div>
                  
                  {/* Contact info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4 text-xs text-gray-600 bg-gray-100 border-2 border-gray-300 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="font-medium">Chennai, India</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">2024-2025</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side - Key highlights */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-bold text-black mb-3 text-center md:text-left">
                    Key Highlights ✨
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-100 border-2 border-blue-300 rounded-lg">
                      <Brain className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-black font-bold text-sm">AI & ML Student</p>
                        <p className="text-xs text-gray-600">VIT Chennai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-100 border-2 border-purple-300 rounded-lg">
                      <Code className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="text-black font-bold text-sm">NeuroScript Creator</p>
                        <p className="text-xs text-gray-600">Experimental Language</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-100 border-2 border-green-300 rounded-lg">
                      <Users className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-black font-bold text-sm">HackHub 2025</p>
                        <p className="text-xs text-gray-600">580+ Participants</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-yellow-100 border-2 border-yellow-300 rounded-lg">
                      <Award className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                      <div>
                        <p className="text-black font-bold text-sm">Hackathon Finalist</p>
                        <p className="text-xs text-gray-600">Top 20-35 Rankings</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comic-style signature */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-xs text-gray-500 font-comic mt-4"
                  >
                    *waves enthusiastically* 👋
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPopup; 
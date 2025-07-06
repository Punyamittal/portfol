"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIframePreload } from "@/hooks/use-iframe-preload";

interface Sketchfab3DModelProps {
  className?: string;
  height?: string;
  width?: string;
  showPreload?: boolean;
}

const Sketchfab3DModel: React.FC<Sketchfab3DModelProps> = ({
  className = "",
  height = "h-96",
  width = "w-full",
  showPreload = true,
}) => {
  // Preload the Sketchfab iframe if enabled
  if (showPreload) {
    useIframePreload({
      src: "https://sketchfab.com/models/4d11fdf6d57a4fda924e9e5623602022/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_animations=0",
      title: "Robot Whale",
      preloadDelay: 1000,
      cleanupDelay: 8000,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex justify-center ${className}`}
    >
      <iframe 
        title="Robot Whale" 
        frameBorder="0" 
        allowFullScreen 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true" 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking 
        execution-while-out-of-viewport 
        execution-while-not-rendered 
        web-share 
        src="https://sketchfab.com/models/4d11fdf6d57a4fda924e9e5623602022/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_animations=0"
        className={`${width} ${height}`}
        style={{ 
          border: 'none',
          outline: 'none',
          background: 'transparent',
          boxShadow: 'none',
          borderRadius: '0',
          margin: '0',
          padding: '0'
        }}
      />
    </motion.div>
  );
};

export default Sketchfab3DModel; 
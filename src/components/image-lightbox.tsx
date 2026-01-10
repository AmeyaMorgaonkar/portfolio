"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface CarouselItem {
  type: "image" | "video";
  src: string;
}

interface ImageLightboxProps {
  items: CarouselItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
  youtubeId?: string | null;
}

export function ImageLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
  youtubeId,
}: ImageLightboxProps) {
  const [playingVideo, setPlayingVideo] = useState(false);
  const currentItem = items[currentIndex];
  const isVideoSlide = currentItem?.type === "video";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") { onNext(); setPlayingVideo(false); }
      if (e.key === "ArrowLeft") { onPrev(); setPlayingVideo(false); }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      setPlayingVideo(false);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 text-white/80 text-sm">
            {currentIndex + 1} / {items.length}
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm">
            {title}
          </div>

          {/* Navigation buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                  setPlayingVideo(false);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                  setPlayingVideo(false);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Main Content - Image or Video */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] h-[80vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideoSlide && youtubeId ? (
              playingVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setPlayingVideo(true)}
                  className="absolute inset-0 cursor-pointer group"
                >
                  <Image
                    src={currentItem.src}
                    alt={`${title} - Demo Video`}
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              )
            ) : (
              <Image
                src={currentItem.src}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            )}
          </motion.div>

          {/* Dot indicators */}
          {items.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

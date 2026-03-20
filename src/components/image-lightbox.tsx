"use client";

import { useEffect, useCallback, useState, useRef } from "react";
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
  onGoTo: (index: number) => void;
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
  onGoTo,
  title,
  youtubeId,
}: ImageLightboxProps) {
  const [playingVideo, setPlayingVideo] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next

  const currentItem = items[currentIndex];
  const isVideoSlide = currentItem?.type === "video";

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen || items.length === 0) return;

    const indicesToPreload = [
      currentIndex,
      (currentIndex + 1) % items.length,
      (currentIndex - 1 + items.length) % items.length,
    ];

    indicesToPreload.forEach((idx) => {
      const item = items[idx];
      if (item && item.type === "image" && !loadedImages.has(idx)) {
        const img = new window.Image();
        img.src = item.src;
        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(idx));
        };
      }
    });
  }, [isOpen, currentIndex, items, loadedImages]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setPlayingVideo(false);
    onNext();
  }, [onNext]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setPlayingVideo(false);
    onPrev();
  }, [onPrev]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [isOpen, onClose, handleNext, handlePrev]
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

  // Reset loaded images when lightbox closes
  useEffect(() => {
    if (!isOpen) {
      setLoadedImages(new Set());
    }
  }, [isOpen]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-white/15 rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-20 text-white/80 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {items.length}
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/80 text-sm bg-black/40 px-4 py-1.5 rounded-full">
            {title}
          </div>

          {/* Navigation buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>
            </>
          )}

          {/* Main Content — Image or Video */}
          <div
            className="relative w-[96vw] h-[90vh] max-w-[1800px]"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0"
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
                    sizes="96vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          {items.length > 1 && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(idx > currentIndex ? 1 : -1);
                    onGoTo(idx);
                    setPlayingVideo(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-white scale-110"
                      : "bg-white/40 hover:bg-white/60"
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

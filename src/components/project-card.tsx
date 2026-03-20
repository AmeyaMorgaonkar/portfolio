"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Project } from "@/lib/data";
import { ImageLightbox } from "./image-lightbox";

// Helper to extract YouTube video ID
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const youtubeId = project.demoVideo ? getYouTubeId(project.demoVideo) : null;

  // Create carousel items: images + video thumbnail (if video exists)
  const carouselItems = [
    ...project.images.map((img) => ({ type: "image" as const, src: img })),
    ...(youtubeId ? [{ type: "video" as const, src: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` }] : []),
  ];

  const currentItem = carouselItems[currentImageIndex];
  const isVideoSlide = currentItem?.type === "video";

  const navigateToProject = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % carouselItems.length);
    setShowVideo(false);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setShowVideo(false);
  };

  const handleOpenLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isVideoSlide) {
      setLightboxOpen(true);
    }
  };

  const handleToggleVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowVideo(!showVideo);
  };

  return (
    <>
      <article
        onClick={navigateToProject}
        onMouseLeave={() => setShowVideo(false)}
        className="bg-[var(--card)] rounded-lg overflow-hidden cursor-pointer group h-full flex flex-col hover:-translate-y-1 transition-transform duration-200"
      >
        {/* Image Section — all images rendered, visibility toggled */}
        <div className="relative h-56 overflow-hidden">
          {showVideo && youtubeId ? (
            <div className="absolute inset-0">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={handleToggleVideo}
                className="absolute top-2 right-2 z-10 p-1.5 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <>
              {/* Render ALL slides at once, toggle visibility */}
              {carouselItems.map((item, idx) => {
                const isActive = idx === currentImageIndex;
                const isVideo = item.type === "video";

                if (isVideo) {
                  // Video thumbnail — only render when active
                  if (!isActive) return null;
                  return (
                    <div
                      key={`video-${idx}`}
                      onClick={handleToggleVideo}
                      className="absolute inset-0 cursor-pointer"
                    >
                      <Image
                        src={item.src}
                        alt={`${project.title} Demo Video`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[var(--foreground)] flex items-center justify-center hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-[var(--background)] fill-[var(--background)] ml-0.5" />
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={`img-${idx}`}
                    onClick={handleOpenLightbox}
                    className="absolute inset-0 cursor-zoom-in transition-opacity duration-200"
                    style={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      loading={idx === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                );
              })}
            </>
          )}

          {/* Carousel Controls — Show on hover */}
          {carouselItems.length > 1 && !showVideo && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-[var(--background)]/70 rounded-full hover:bg-[var(--background)] transition-colors z-10 opacity-85 group-hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[var(--background)]/70 rounded-full hover:bg-[var(--background)] transition-colors z-10 opacity-85 group-hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {carouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); setShowVideo(false); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      idx === currentImageIndex
                        ? "bg-[var(--foreground)]"
                        : "bg-[var(--foreground)]/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Tags overlay */}
          {!showVideo && !isVideoSlide && (
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
              {project.hasResearchPaper && (
                <span className="text-xs px-2 py-1 bg-[var(--background)]/80 rounded-full">
                  📄 Paper
                </span>
              )}
              {project.hasPatent && (
                <span className="text-xs px-2 py-1 bg-[var(--background)]/80 rounded-full">
                  📜 Patent
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-semibold mb-2 group-hover:underline">
            {project.title}
          </h3>
          <p className="text-base text-[var(--muted)] mb-3 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <ul className="text-sm text-[var(--muted)] mb-3 space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[var(--foreground)] mt-0.5">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4 content-start">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-[var(--background)] rounded h-fit"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 text-[var(--muted)] h-fit">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Spacer to push links to bottom */}
          <div className="flex-grow"></div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {youtubeId && (
              <button
                onClick={handleToggleVideo}
                className="flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <Play className="w-4 h-4" />
                Demo
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Image Lightbox */}
      <ImageLightbox
        items={carouselItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % carouselItems.length)}
        onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
        onGoTo={(idx) => setCurrentImageIndex(idx)}
        title={project.title}
        youtubeId={youtubeId}
      />
    </>
  );
}

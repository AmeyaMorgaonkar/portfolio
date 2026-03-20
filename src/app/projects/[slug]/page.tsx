"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  Award,
  X,
} from "lucide-react";
import { getProjectBySlug, research } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import { ImageLightbox } from "@/components/image-lightbox";

// Helper to extract YouTube video ID
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    notFound();
  }

  const youtubeId = project.demoVideo ? getYouTubeId(project.demoVideo) : null;
  
  // Create carousel items: images + video thumbnail (if video exists)
  const carouselItems = [
    ...project.images.map((img) => ({ type: "image" as const, src: img })),
    ...(youtubeId ? [{ type: "video" as const, src: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` }] : []),
  ];

  const relatedResearch = research.filter((r) =>
    project.relatedResearch.includes(r.id)
  );

  const handleNextItem = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselItems.length);
    setShowVideo(false);
  };

  const handlePrevItem = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
    setShowVideo(false);
  };

  const currentItem = carouselItems[currentImageIndex];
  const isVideoSlide = currentItem?.type === "video";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Image Carousel / Video — all images rendered, visibility toggled */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-video rounded-lg overflow-hidden bg-[var(--card)] mb-8"
      >
        {showVideo && youtubeId ? (
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        ) : (
          <>
            {/* Render ALL slides at once, toggle visibility */}
            {carouselItems.map((item, idx) => {
              const isActive = idx === currentImageIndex;
              const isVideo = item.type === "video";

              if (isVideo) {
                if (!isActive) return null;
                return (
                  <div
                    key={`video-${idx}`}
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 cursor-pointer group"
                  >
                    <Image
                      src={item.src}
                      alt={`${project.title} Demo Video`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-[var(--foreground)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[var(--background)] fill-[var(--background)] ml-1" />
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={`img-${idx}`}
                  onClick={() => setLightboxOpen(true)}
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
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
              );
            })}
          </>
        )}

        {/* Carousel Controls */}
        {carouselItems.length > 1 && !showVideo && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevItem(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[var(--background)]/80 rounded-full hover:bg-[var(--background)] transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextItem(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[var(--background)]/80 rounded-full hover:bg-[var(--background)] transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); setShowVideo(false); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentImageIndex
                      ? "bg-[var(--foreground)]"
                      : "bg-[var(--foreground)]/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* Title and Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-base font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
          {youtubeId && (
            <button
              onClick={() => {
                const videoIndex = carouselItems.findIndex(item => item.type === "video");
                if (videoIndex !== -1) {
                  setCurrentImageIndex(videoIndex);
                  setShowVideo(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] rounded-lg text-sm hover:bg-[var(--border)] transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          )}
          {project.hasResearchPaper && (
            <span className="flex items-center gap-2 px-3 py-2 bg-[var(--card)] rounded-lg text-sm">
              <FileText className="w-4 h-4" />
              Research Paper
            </span>
          )}
          {project.hasPatent && (
            <span className="flex items-center gap-2 px-3 py-2 bg-[var(--card)] rounded-lg text-sm">
              <Award className="w-4 h-4" />
              Patent
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 bg-[var(--card)] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 border rounded-full text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Short Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <p className="text-lg text-[var(--muted)]">{project.shortDescription}</p>
      </motion.div>

      {/* Long Description (Markdown) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12 bg-[var(--card)]/70 rounded-xl p-6 shadow-md text-[var(--foreground)] prose-lg leading-relaxed"
      >
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4 text-[var(--foreground)]">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-6 mb-3 text-[var(--foreground)]">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium mt-4 mb-2 text-[var(--foreground)]">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 leading-relaxed text-[var(--muted)] text-lg">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 text-[var(--muted)] mb-4 text-lg">
                {children}
              </ul>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => (
              <strong className="font-semibold text-[var(--foreground)]">
                {children}
              </strong>
            ),
            code: ({ children }) => (
              <code className="px-2 py-1 bg-[var(--border)] rounded text-base text-[var(--foreground)]">
                {children}
              </code>
            ),
          }}
        >
          {project.longDescription}
        </ReactMarkdown>
      </motion.div>

      {/* Related Research */}
      {relatedResearch.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t pt-8"
        >
          <h2 className="text-xl font-semibold mb-6">Related Publications</h2>
          <div className="space-y-4">
            {relatedResearch.map((item) => (
              <Link
                key={item.id}
                href={`/research/${item.slug}`}
                className="flex items-start gap-4 p-4 bg-[var(--card)] rounded-lg hover:bg-[var(--border)] transition-colors group"
              >
                <div className="flex-shrink-0">
                  {item.type === "paper" ? (
                    <FileText className="w-5 h-5 text-[var(--muted)]" />
                  ) : (
                    <Award className="w-5 h-5 text-[var(--muted)]" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {item.venue} • {item.status}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image Lightbox — includes video */}
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
    </div>
  );
}

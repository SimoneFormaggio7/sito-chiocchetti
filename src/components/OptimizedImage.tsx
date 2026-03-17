"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  wrapperClassName?: string;
}

export default function OptimizedImage({
  wrapperClassName = "",
  className = "",
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton loader */}
      <div
        className={`absolute inset-0 bg-neutral-200 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent skeleton-shimmer" />
      </div>

      {/* Image */}
      <Image
        {...props}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

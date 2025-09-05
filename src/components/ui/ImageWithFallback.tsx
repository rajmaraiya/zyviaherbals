"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc?: string
  alt: string
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc, 
  alt, 
  ...props 
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src)
  
  const handleError = () => {
    if (fallbackSrc) {
      setImageSrc(fallbackSrc)
    } else {
      // Generate a placeholder URL with encoded alt text
      const placeholder = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(alt)}`
      setImageSrc(placeholder)
    }
  }

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={handleError}
    />
  )
}

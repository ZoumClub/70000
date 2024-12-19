"use client";

import { MAX_IMAGE_SIZE, MAX_VIDEO_SIZE, ACCEPTED_IMAGE_TYPES, ACCEPTED_VIDEO_TYPES } from "./constants";

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateImage(file: File): ValidationResult {
  if (file.size > MAX_IMAGE_SIZE) {
    return {
      isValid: false,
      error: `Image must be less than ${MAX_IMAGE_SIZE / (1024 * 1024)}MB`
    };
  }

  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: "Only JPG, PNG and WebP images are allowed"
    };
  }

  return { isValid: true };
}

export function validateVideo(file: File): ValidationResult {
  if (file.size > MAX_VIDEO_SIZE) {
    return {
      isValid: false,
      error: `Video must be less than ${MAX_VIDEO_SIZE / (1024 * 1024)}MB`
    };
  }

  if (!ACCEPTED_VIDEO_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: "Only MP4, WebM and QuickTime videos are allowed"
    };
  }

  return { isValid: true };
}
"use client";
import React from "react";
import { Suspense } from "react";

function ImageFallback() {
  return (
    <div className="w-full h-64 bg-secondary animate-pulse rounded-md mb-4"></div>
  );
}

export default function ResponsiveGoogleDriveImage({
  id,
  alt,
}: {
  id: string;
  alt: string;
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const baseUrl = `https://drive.google.com/thumbnail?id=${id}`;

  React.useEffect(() => {
    const img = new Image();
    img.src = `${baseUrl}&sz=w640`;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [baseUrl]);

  if (isLoading) {
    return <ImageFallback />;
  }

  return (
    <picture className="block w-full mb-4">
      <source media="(min-width: 1536px)" srcSet={`${baseUrl}&sz=w1920`} />
      <source media="(min-width: 1280px)" srcSet={`${baseUrl}&sz=w1536`} />
      <source media="(min-width: 1024px)" srcSet={`${baseUrl}&sz=w1280`} />
      <source media="(min-width: 768px)" srcSet={`${baseUrl}&sz=w1024`} />
      <source media="(min-width: 640px)" srcSet={`${baseUrl}&sz=w768`} />
      <img
        src={`${baseUrl}&sz=w640`}
        alt={alt}
        className="w-full h-auto rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
        // onError={(e) => {
        //   e.currentTarget.onerror = null;
        //   e.currentTarget.src = "/placeholder.svg";
        // }}
      />
    </picture>
  );
}

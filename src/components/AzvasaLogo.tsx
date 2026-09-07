import React from 'react';

interface AzvasaLogoProps {
  className?: string;
  height?: number;
}

export function AzvasaLogo({
  className = '',
  height = 50,
}: AzvasaLogoProps) {
  return (
    <img
      src="/assets/aistudio/azvasa-logo.svg"
      alt="AZVASA - Enriching Education"
      className={className}
      style={{ height }}
    />
  );
}

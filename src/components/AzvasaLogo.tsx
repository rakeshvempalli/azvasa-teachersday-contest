import React from 'react';

interface AzvasaLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white';
  height?: number;
}

export function AzvasaLogo({
  className = 'h-12 w-auto',
  variant = 'full',
  height = 50,
}: AzvasaLogoProps) {
  // If only the mark is needed
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ height }}
        aria-label="AZVASA Logo Mark"
      >
        <defs>
          <radialGradient
            id="azvasa-sphere-gradient"
            cx="35%"
            cy="30%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="35%" stopColor="#FFB300" />
            <stop offset="75%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#D84315" />
          </radialGradient>

          <linearGradient id="azvasa-orange-flame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="40%" stopColor="#FF9100" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>

          <linearGradient id="azvasa-blue-swoosh" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#00A8FF" />
            <stop offset="25%" stopColor="#0066FF" />
            <stop offset="70%" stopColor="#0050EA" />
            <stop offset="100%" stopColor="#072A52" />
          </linearGradient>
        </defs>

        {/* 3D Radiant Sun Sphere / Head */}
        <circle cx="82" cy="42" r="21" fill="url(#azvasa-sphere-gradient)" />

        {/* Left Orange/Gold Flame Arm */}
        <path
          d="M 28 8 C 36 28 42 62 43 96 C 44 116 38 135 24 148 C 38 144 54 130 57 106 C 60 76 52 42 37 18 C 34 13 30 10 28 8 Z"
          fill="url(#azvasa-orange-flame)"
        />

        {/* Main Royal Blue Figure Swoosh */}
        <path
          d="M 148 24 C 118 36 82 64 68 100 C 58 126 65 146 80 156 C 62 152 48 134 50 108 C 53 74 84 42 120 28 C 130 24 140 23 148 24 Z"
          fill="url(#azvasa-blue-swoosh)"
        />
      </svg>
    );
  }

  // Full Horizontal AZVASA Logo matching the reference image closely
  const textColorAzvasa = variant === 'white' ? '#FFFFFF' : '#0055FE';
  const textColorTagline = variant === 'white' ? '#E0ECFF' : '#072A52';

  return (
    <svg
      viewBox="0 0 540 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height }}
      aria-label="AZVASA Enriching Education Logo"
    >
      <defs>
        {/* Sphere Head Radial Gradient */}
        <radialGradient
          id={`azvasa-sphere-${variant}`}
          cx="38%"
          cy="32%"
          r="65%"
          fx="32%"
          fy="28%"
        >
          <stop offset="0%" stopColor="#FFECB3" />
          <stop offset="30%" stopColor="#FFB300" />
          <stop offset="70%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#E65100" />
        </radialGradient>

        {/* Left Flame Arc Linear Gradient */}
        <linearGradient id={`azvasa-flame-${variant}`} x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="35%" stopColor="#FF9800" />
          <stop offset="75%" stopColor="#FF6D00" />
          <stop offset="100%" stopColor="#E64A19" />
        </linearGradient>

        {/* Dynamic Blue Swoosh & Base Underline Gradient */}
        <linearGradient id={`azvasa-swoosh-${variant}`} x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00A8FF" />
          <stop offset="20%" stopColor="#0066FF" />
          <stop offset="60%" stopColor="#0050EA" />
          <stop offset="100%" stopColor="#0080FF" />
        </linearGradient>

        <linearGradient id={`azvasa-underline-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0055FE" />
          <stop offset="40%" stopColor="#0066FF" />
          <stop offset="70%" stopColor="#0099FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Drop shadow for 3D sphere look */}
        <filter id="sphere-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#B73E00" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* ================= ICON SECTION ================= */}
      {/* 1. Golden Sun Sphere / Head */}
      <circle
        cx="54"
        cy="40"
        r="18"
        fill={`url(#azvasa-sphere-${variant})`}
        filter="url(#sphere-shadow)"
      />

      {/* 2. Left Orange/Gold Flame Figure */}
      <path
        d="M 12 6 C 18 24 24 54 26 84 C 27 106 20 126 7 139 C 20 134 35 120 37 96 C 40 68 33 36 21 16 C 18 12 15 9 12 6 Z"
        fill={`url(#azvasa-flame-${variant})`}
      />

      {/* 3. Main Royal Blue Sweeping Figure + Extended Underline Swoosh */}
      {/* Upward arm curve */}
      <path
        d="M 160 25 C 130 36 94 65 80 102 C 72 124 75 142 86 150 C 70 146 56 128 58 104 C 61 72 90 40 128 26 C 138 23 150 23 160 25 Z"
        fill={`url(#azvasa-swoosh-${variant})`}
      />

      {/* Sweeping dynamic underline cradling AZVASA and extending right under Enriching Education */}
      <path
        d="M 40 88 C 36 112 48 136 78 147 C 118 162 215 162 330 152 C 405 146 470 137 520 128 C 455 137 385 144 315 147 C 190 152 102 148 68 132 C 52 124 45 108 46 92 C 44 90 41 89 40 88 Z"
        fill={`url(#azvasa-underline-${variant})`}
      />

      {/* ================= TYPOGRAPHY SECTION ================= */}
      {/* "AZVASA" - Bold High-Contrast Serif */}
      <text
        x="138"
        y="96"
        fill={textColorAzvasa}
        fontFamily="'Times New Roman', Times, 'Georgia', 'Playfair Display', serif"
        fontSize="76"
        fontWeight="800"
        letterSpacing="0.04em"
      >
        AZVASA
      </text>

      {/* "Enriching Education" - Elegant Tagline Serif */}
      <text
        x="142"
        y="134"
        fill={textColorTagline}
        fontFamily="'Times New Roman', Times, 'Georgia', 'Baskerville', serif"
        fontSize="35"
        fontWeight="600"
        letterSpacing="0.01em"
      >
        Enriching Education
      </text>
    </svg>
  );
}

import React from 'react';

interface DoodleProps {
  className?: string;
  size?: number;
}

export function PaperAirplaneDoodle({ className = '', size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dashed trail */}
      <path
        d="M6 38 C 10 32, 16 36, 18 30 C 20 25, 18 20, 24 18"
        stroke="#FFB703"
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
      {/* Plane body */}
      <path
        d="M44 6L6 22L20 28L44 6Z"
        fill="#FFFFFF"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 6L28 42L20 28L44 6Z"
        fill="#F0F4FA"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 28L26 35L28 29"
        fill="#FF6B00"
        stroke="#072A52"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LightBulbDoodle({ className = '', size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sparks */}
      <line x1="24" y1="4" x2="24" y2="8" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="12" x2="13" y2="15" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="12" x2="35" y2="15" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="24" x2="8" y2="24" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="24" x2="40" y2="24" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bulb body */}
      <path
        d="M15 22C15 17.0294 19.0294 13 24 13C28.9706 13 33 17.0294 33 22C33 25.5 31 28 29.5 30C28.5 31.3333 28.5 33 28.5 34H19.5C19.5 33 19.5 31.3333 18.5 30C17 28 15 25.5 15 22Z"
        fill="#FFE082"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Filament */}
      <path
        d="M21 24C21 21.5 24 21.5 24 20C24 21.5 27 21.5 27 24"
        stroke="#FF6B00"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Base */}
      <rect x="20" y="34" width="8" height="3" rx="1.5" fill="#FFFFFF" stroke="#072A52" strokeWidth="2" />
      <rect x="21" y="38" width="6" height="3" rx="1" fill="#072A52" />
    </svg>
  );
}

export function BookDoodle({ className = '', size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 14C20 11 10 11 6 13V35C10 33 20 33 24 36M24 14C28 11 38 11 42 13V35C38 33 28 33 24 36M24 14V36"
        fill="#FFFFFF"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 14C20 11 10 11 6 13"
        stroke="#FF6B00"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 14C28 11 38 11 42 13"
        stroke="#0055FE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Ribbon bookmark */}
      <path
        d="M24 14V24L26 21L28 24V15"
        fill="#FF6B00"
        stroke="#072A52"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PencilDoodle({ className = '', size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="rotate(-40 24 24)">
        <rect x="20" y="8" width="8" height="24" fill="#FFB703" stroke="#072A52" strokeWidth="2.5" />
        <line x1="24" y1="8" x2="24" y2="32" stroke="#FF9100" strokeWidth="2" />
        {/* Tip */}
        <polygon points="20,32 28,32 24,40" fill="#F0F4FA" stroke="#072A52" strokeWidth="2.5" strokeLinejoin="round" />
        <polygon points="22.5,37 25.5,37 24,40" fill="#072A52" />
        {/* Eraser */}
        <rect x="20" y="4" width="8" height="4" rx="1.5" fill="#FF6B00" stroke="#072A52" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

export function StarSparkleDoodle({ className = '', size = 24, color = '#FFB703' }: DoodleProps & { color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.4 8.6L23 11L14.4 13.4L12 22L9.6 13.4L1 11L9.6 8.6L12 0Z"
        fill={color}
        stroke="#072A52"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GraduationCapDoodle({ className = '', size = 32 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mortarboard */}
      <polygon
        points="24,10 44,19 24,28 4,19"
        fill="#072A52"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Cap base */}
      <path
        d="M13 23.5V32C13 36 18 38 24 38C30 38 35 36 35 32V23.5"
        fill="#072A52"
        stroke="#072A52"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Tassel */}
      <path
        d="M38 20V31M38 31L36 34M38 31L40 34"
        stroke="#FFB703"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="19" r="2.5" fill="#FFB703" />
    </svg>
  );
}

export function TrophyIllustration({ className = '', size = 96 }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base */}
      <rect x="28" y="78" width="40" height="8" rx="2" fill="#072A52" />
      <rect x="34" y="68" width="28" height="10" rx="2" fill="#FF6B00" stroke="#072A52" strokeWidth="2.5" />
      {/* Stem */}
      <path d="M42 54H54V68H42V54Z" fill="#FFB703" stroke="#072A52" strokeWidth="2.5" />
      {/* Cup */}
      <path
        d="M24 16H72V36C72 49 61 55 48 55C35 55 24 49 24 36V16Z"
        fill="#FFB703"
        stroke="#072A52"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Inner highlight */}
      <path
        d="M30 22H66V35C66 44 58 48 48 48C38 48 30 44 30 35V22Z"
        fill="#FFE082"
      />
      {/* Star on Trophy */}
      <path
        d="M48 26L50.5 32H57L52 35.5L54 42L48 38L42 42L44 35.5L39 32H45.5L48 26Z"
        fill="#FF6B00"
        stroke="#072A52"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Left Handle */}
      <path
        d="M24 22H16C12 22 10 26 10 32C10 40 16 43 24 43"
        stroke="#072A52"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right Handle */}
      <path
        d="M72 22H80C84 22 86 26 86 32C86 40 80 43 72 43"
        stroke="#072A52"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

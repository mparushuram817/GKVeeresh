import React from 'react';

interface CeilingFanIconProps {
  className?: string;
  size?: number;
  showCircle?: boolean;
}

export const CeilingFanIcon: React.FC<CeilingFanIconProps> = ({
  className = "w-12 h-12 text-slate-900",
  size = 48,
  showCircle = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="సీలింగ్ ఫ్యాన్ ఎన్నికల గుర్తు (Ceiling Fan Election Symbol)"
      role="img"
    >
      {/* Optional Election Symbol Enclosing Circle */}
      {showCircle && (
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="white"
        />
      )}

      {/* Ceiling canopy and downrod */}
      {/* Top cup/canopy */}
      <path
        d="M 43 14 L 57 14 L 54 22 L 46 22 Z"
        fill="currentColor"
      />
      {/* Downrod pipe */}
      <rect
        x="48"
        y="21"
        width="4"
        height="18"
        fill="currentColor"
        rx="1"
      />
      {/* Motor top casing cup */}
      <path
        d="M 44 38 L 56 38 L 54 44 L 46 44 Z"
        fill="currentColor"
      />

      {/* Center Motor Hub / Body */}
      <ellipse
        cx="50"
        cy="50"
        rx="10"
        ry="8"
        fill="currentColor"
      />
      <circle
        cx="50"
        cy="50"
        r="4.5"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Blade 1 (Left downward angle) */}
      <g>
        {/* Blade stem connector */}
        <line
          x1="42"
          y1="53"
          x2="34"
          y2="57"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Blade body */}
        <path
          d="M 35 55 C 26 59, 15 67, 12 74 C 11 77, 13 80, 18 80 C 27 79, 36 71, 40 62 Z"
          fill="currentColor"
        />
        {/* Blade inner ridge line */}
        <path
          d="M 33 59 C 25 64, 18 70, 16 75"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Blade 2 (Right downward angle) */}
      <g>
        {/* Blade stem connector */}
        <line
          x1="58"
          y1="53"
          x2="66"
          y2="57"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Blade body */}
        <path
          d="M 65 55 C 74 59, 85 67, 88 74 C 89 77, 87 80, 82 80 C 73 79, 64 71, 60 62 Z"
          fill="currentColor"
        />
        {/* Blade inner ridge line */}
        <path
          d="M 67 59 C 75 64, 82 70, 84 75"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Blade 3 (Top-angled / upward blade) */}
      <g>
        {/* Blade stem connector */}
        <line
          x1="50"
          y1="43"
          x2="50"
          y2="34"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Top Blade body reaching towards top-right */}
        <path
          d="M 48 37 C 49 26, 55 18, 62 16 C 65 15, 67 17, 65 21 C 62 29, 56 36, 52 40 Z"
          fill="currentColor"
        />
        {/* Blade ridge */}
        <path
          d="M 52 34 C 54 27, 58 22, 62 19"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

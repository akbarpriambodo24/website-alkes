export function TechPattern({ variant = 'blue' }: { variant?: 'blue' | 'white' | 'gray' }) {
  const colors = {
    blue: {
      pattern: 'rgba(255, 255, 255, 0.1)',
    },
    white: {
      pattern: 'rgba(39, 89, 205, 0.15)',
    },
    gray: {
      pattern: 'rgba(39, 89, 205, 0.18)',
    }
  };

  const current = colors[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexagon Pattern - Pojok Kanan Bawah */}
      <div className="absolute bottom-0 right-0 w-2/5 h-2/5 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`hexagons-br-${variant}`} x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="24,0 48,12 48,36 24,48 0,36 0,12" fill="none" stroke={current.pattern} strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hexagons-br-${variant})`} />
        </svg>
      </div>

      {/* Hexagon Pattern - Pojok Kiri Atas - lebih kecil */}
      <div className="absolute top-10 left-10 w-1/5 h-1/5 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`hexagons-tl-${variant}`} x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="29,0 58,15 58,43 29,58 0,43 0,15" fill="none" stroke={current.pattern} strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hexagons-tl-${variant})`} />
        </svg>
      </div>

      {/* Hexagon Pattern - Tengah Kanan - ukuran sedang */}
      <div className="absolute top-1/3 right-5 w-1/6 h-1/6 opacity-25">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`hexagons-mr-${variant}`} x="0" y="0" width="45" height="39" patternUnits="userSpaceOnUse">
              <polygon points="22,0 44,11 44,33 22,44 0,33 0,11" fill="none" stroke={current.pattern} strokeWidth="2.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hexagons-mr-${variant})`} />
        </svg>
      </div>
    </div>
  );
}

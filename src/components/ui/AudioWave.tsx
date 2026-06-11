type AudioWaveProps = {
  bars?: number;
  className?: string;
  /** Pausa la animación (barras estáticas) */
  paused?: boolean;
};

// Alturas base variadas para que no se vean uniformes cuando están en reposo.
const HEIGHTS = [0.45, 0.8, 0.6, 1, 0.55, 0.85, 0.4, 0.7, 0.5, 0.95, 0.6, 0.35];
const DURATIONS = [0.9, 1.3, 1.05, 1.5, 1.15];

/** Ecualizador decorativo (sin audio real). Refuerza el concepto de "frecuencia". */
const AudioWave = ({ bars = 5, className = '', paused = false }: AudioWaveProps) => (
  <span className={`flex h-full items-center gap-[3px] ${className}`} aria-hidden="true">
    {Array.from({ length: bars }).map((_, i) => (
      <span
        key={i}
        className="w-[3px] flex-1 origin-center rounded-full bg-current"
        style={{
          height: `${HEIGHTS[i % HEIGHTS.length] * 100}%`,
          animation: paused
            ? undefined
            : `eq-bar ${DURATIONS[i % DURATIONS.length]}s ease-in-out ${(i % 7) * 0.11}s infinite`,
        }}
      />
    ))}
  </span>
);

export default AudioWave;

const layers = [
  { y: 148, color: "#0b213e", line: "#335776" },
  { y: 110, color: "#10315a", line: "#467db6" },
  { y: 72, color: "#164881", line: "#7bbaff" },
];

export function StudioDiagram() {
  return (
    <svg className="studio-diagram" viewBox="0 0 580 420" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="studio-plane" x1="145" y1="110" x2="422" y2="345" gradientUnits="userSpaceOnUse">
          <stop stopColor="#295887" stopOpacity=".55" />
          <stop offset="1" stopColor="#152c47" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id="studio-surface" x1="165" y1="100" x2="400" y2="276" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2365a9" />
          <stop offset="1" stopColor="#103259" />
        </linearGradient>
      </defs>
      <path d="m36 259 253-145 255 145-255 146Z" stroke="#2c4b6d" fill="url(#studio-plane)" />
      <g stroke="#2c4b6d" opacity=".65">
        {Array.from({ length: 7 }, (_, index) => {
          const x = 36 + (index + 1) * 31.65;
          const y = 259 - (index + 1) * 18.13;
          return <path key={index} d={`M${x} ${y}l255 146`} />;
        })}
        <path d="M67 277l254-145M99 295l253-145M131 314l253-145M162 332l253-145M194 350l253-145M226 369l253-145M257 387l253-145" />
      </g>
      <g stroke="#85beff" strokeWidth="1.6">
        <path d="M115 294l67-38m218-1 67 38M290 366v-55" />
        <path d="M60 265l55 29 33-19m316 17 56-32M290 366l-32 19" opacity=".6" />
      </g>
      <g fill="#91c6ff">
        <circle className="studio-node" cx="115" cy="294" r="4" />
        <circle className="studio-node" cx="466" cy="293" r="4" />
        <circle className="studio-node" cx="290" cy="366" r="4" />
      </g>
      {layers.map(({ y, color, line }, index) => (
        <g key={y} transform={`translate(0 ${y})`}>
          <path d="m139 100 150 86 151-86v15l-151 87-150-87Z" fill="#0b2039" stroke={line} />
          <path d="m139 100 150-86 151 86-151 86Z" fill={index === 2 ? "url(#studio-surface)" : color} stroke={line} />
          <path d="M289 186v16" stroke={line} />
          <path d="m389 141 24-14m-16 15 16-9" stroke={line} strokeWidth="1.5" />
        </g>
      ))}
      <g stroke="#b2d6ff" strokeWidth="1.6" strokeLinejoin="round">
        <path d="m220 172 69-40 70 40-70 40Z" fill="#153e6e" />
        <path d="m236 172 53-30 53 30-53 30Z" fill="#1b548f" />
        <path d="m271 170-8 5 8 5m36-10 8 5-8 5m-12-14-12 18" strokeWidth="2.4" />
        <path d="m210 137 20 12m-39-1 20 12m157-23-20 12m39-1-20 12m-157 45 20-12m-39 1 20-12m157 23-20-12m39 1-20-12" opacity=".62" />
      </g>
      <g stroke="#41678b" strokeDasharray="3 7">
        <path d="M139 170v-39m301 39v-39M289 86V53" />
      </g>
      <g fill="#8cbae8">
        <circle cx="139" cy="127" r="2.5" /><circle cx="440" cy="127" r="2.5" /><circle cx="289" cy="49" r="2.5" />
      </g>
    </svg>
  );
}

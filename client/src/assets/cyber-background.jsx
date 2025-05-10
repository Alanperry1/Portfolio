const CyberBackground = (props) => {
  return (
    <svg 
      viewBox="0 0 600 600" 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <defs>
        <radialGradient
          id="cyber-bg"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="cyber-grid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <rect width="600" height="600" fill="url(#cyber-bg)" rx="10" />
      
      <path 
        d="M0 50 L600 50 M0 100 L600 100 M0 150 L600 150 M0 200 L600 200 M0 250 L600 250 M0 300 L600 300 M0 350 L600 350 M0 400 L600 400 M0 450 L600 450 M0 500 L600 500 M0 550 L600 550 M50 0 L50 600 M100 0 L100 600 M150 0 L150 600 M200 0 L200 600 M250 0 L250 600 M300 0 L300 600 M350 0 L350 600 M400 0 L400 600 M450 0 L450 600 M500 0 L500 600 M550 0 L550 600" 
        stroke="url(#cyber-grid)" 
        strokeWidth="0.5"
      />
      
      <g filter="url(#glow)">
        <circle cx="300" cy="240" r="100" fill="#0f172a" fillOpacity="0.8" stroke="#22c55e" strokeWidth="2" />
        <path 
          d="M300 180 C270 180 245 205 245 235 L245 270 L355 270 L355 235 C355 205 330 180 300 180 Z" 
          fill="#22c55e" 
          fillOpacity="0.3" 
        />
        <rect x="245" y="270" width="110" height="80" rx="5" fill="#22c55e" fillOpacity="0.3" />
        <circle cx="300" cy="310" r="15" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
        <line x1="300" y1="310" x2="300" y2="325" stroke="#22c55e" strokeWidth="2" />
      </g>
      
      <g opacity="0.7">
        <text x="120" y="170" fill="#22c55e" fontSize="12">01010101010101</text>
        <text x="150" y="190" fill="#22c55e" fontSize="12">10101010101</text>
        <text x="180" y="210" fill="#22c55e" fontSize="12">01010101010</text>
        
        <text x="420" y="380" fill="#22c55e" fontSize="12">10101010101</text>
        <text x="390" y="400" fill="#22c55e" fontSize="12">01010101010</text>
        <text x="360" y="420" fill="#22c55e" fontSize="12">10101010101</text>
      </g>
      
      <g opacity="0.9">
        <circle cx="150" cy="450" r="15" fill="#22c55e" fillOpacity="0.2" />
        <circle cx="150" cy="450" r="7" fill="#22c55e" fillOpacity="0.6" />
        
        <circle cx="250" cy="500" r="15" fill="#22c55e" fillOpacity="0.2" />
        <circle cx="250" cy="500" r="7" fill="#22c55e" fillOpacity="0.6" />
        
        <circle cx="350" cy="480" r="15" fill="#22c55e" fillOpacity="0.2" />
        <circle cx="350" cy="480" r="7" fill="#22c55e" fillOpacity="0.6" />
        
        <circle cx="450" cy="430" r="15" fill="#22c55e" fillOpacity="0.2" />
        <circle cx="450" cy="430" r="7" fill="#22c55e" fillOpacity="0.6" />
        
        <line x1="150" y1="450" x2="250" y2="500" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="250" y1="500" x2="350" y2="480" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="350" y1="480" x2="450" y2="430" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1" />
      </g>
      
      <g transform="translate(180, 70) scale(0.6)">
        <path 
          d="M100 20 L180 20 L180 70 C180 120 140 150 100 170 C60 150 20 120 20 70 L20 20 L100 20 Z" 
          fill="#0f172a" 
          stroke="#22c55e" 
          strokeWidth="2" 
        />
        <path 
          d="M85 90 L115 60 L130 75 L85 120 L70 105 L85 90 Z" 
          fill="#22c55e" 
          fillOpacity="0.8" 
        />
      </g>
      
      <g transform="translate(380, 100) scale(0.5)">
        <path 
          d="M100 20 L180 20 L180 70 C180 120 140 150 100 170 C60 150 20 120 20 70 L20 20 L100 20 Z" 
          fill="#0f172a" 
          stroke="#22c55e" 
          strokeWidth="2" 
        />
        <path 
          d="M85 90 L115 60 L130 75 L85 120 L70 105 L85 90 Z" 
          fill="#22c55e" 
          fillOpacity="0.8" 
        />
      </g>
    </svg>
  );
};

export default CyberBackground;

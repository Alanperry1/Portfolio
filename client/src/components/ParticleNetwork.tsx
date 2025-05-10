import { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  type: 'node' | 'star';
  pulse?: number;
  pulseSpeed?: number;
  blinkTimeout?: number;
  maxBrightness?: number;
}

const ParticleNetwork = ({ className = '' }: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent size
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create particles - both network nodes and stars
    const particles: Particle[] = [];
    
    // Network nodes - fewer but larger nodes for the network effect
    const nodeCount = Math.min(Math.floor(canvas.width / 40), 50);
    
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        color: getRandomColor(),
        alpha: 0.5 + Math.random() * 0.5,
        type: 'node'
      });
    }
    
    // Stars - more numerous but smaller points of light
    const starCount = Math.min(Math.floor(canvas.width / 10), 150);
    
    for (let i = 0; i < starCount; i++) {
      const isTwinkle = Math.random() > 0.7;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.05, // Stars move slower
        vy: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 1.2 + 0.3,
        color: getStarColor(),
        alpha: 0.1 + Math.random() * 0.5,
        type: 'star',
        pulse: isTwinkle ? 0 : undefined,
        pulseSpeed: isTwinkle ? 0.02 + Math.random() * 0.04 : undefined,
        blinkTimeout: isTwinkle ? Math.random() * 200 : undefined,
        maxBrightness: 0.7 + Math.random() * 0.3
      });
    }
    
    // Helper function to get a random cyber-themed color
    function getRandomColor(): string {
      const colors = [
        'rgba(122, 54, 250, alpha)', // Purple
        'rgba(86, 76, 252, alpha)',  // Indigo
        'rgba(45, 149, 255, alpha)', // Blue
        'rgba(185, 103, 255, alpha)' // Violet
      ];
      
      return colors[Math.floor(Math.random() * colors.length)].replace('alpha', (0.5 + Math.random() * 0.5).toString());
    }
    
    // Helper function to get a random star color
    function getStarColor(): string {
      const colors = [
        'rgba(255, 255, 255, alpha)', // White
        'rgba(173, 216, 230, alpha)', // Light blue
        'rgba(255, 223, 186, alpha)', // Light orange
        'rgba(187, 143, 206, alpha)', // Light purple
        'rgba(122, 54, 250, alpha)'   // Accent purple
      ];
      
      return colors[Math.floor(Math.random() * colors.length)].replace('alpha', '1');
    }
    
    // Function to draw a glowing particle
    function drawGlowingParticle(particle: Particle) {
      if (!ctx) return; // Safety check
      
      const { x, y, size, color, alpha, type } = particle;
      
      // For stars, create a glowing effect
      if (type === 'star') {
        // Main star point
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color.replace('alpha', alpha.toString());
        ctx.fill();
        
        // Outer glow
        const gradient = ctx.createRadialGradient(x, y, size * 0.5, x, y, size * 4);
        const baseColor = color.substring(0, color.lastIndexOf(',')) + ', ';
        gradient.addColorStop(0, baseColor + (alpha * 0.5) + ')');
        gradient.addColorStop(1, baseColor + '0)');
        
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Random chance for a small "sparkle"
        if (Math.random() < 0.1) {
          ctx.beginPath();
          ctx.moveTo(x - size * 3, y);
          ctx.lineTo(x + size * 3, y);
          ctx.moveTo(x, y - size * 3);
          ctx.lineTo(x, y + size * 3);
          ctx.strokeStyle = baseColor + (alpha * 0.3) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      } else {
        // Network node with subtle glow
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Add a subtle glow to network nodes
        const gradient = ctx.createRadialGradient(x, y, size * 0.5, x, y, size * 3);
        const baseColor = color.substring(0, color.lastIndexOf(',')) + ', ';
        gradient.addColorStop(0, baseColor + (alpha * 0.4) + ')');
        gradient.addColorStop(1, baseColor + '0)');
        
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Animation loop
    let animationId: number;
    let frame = 0;
    
    const animate = () => {
      if (!ctx) return; // Safety check
      
      frame++;
      
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (const particle of particles) {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Handle twinkling stars
        if (particle.type === 'star' && particle.pulse !== undefined) {
          if (particle.blinkTimeout !== undefined && particle.blinkTimeout > 0) {
            particle.blinkTimeout--;
          } else {
            if (particle.pulseSpeed) {
              particle.pulse += particle.pulseSpeed;
              if (particle.pulse > Math.PI * 2) {
                particle.pulse = 0;
                // Set a random timeout before the next twinkle
                particle.blinkTimeout = Math.random() * 200;
              }
              
              // Calculate alpha based on sine wave for smooth pulsing
              const maxBrightness = particle.maxBrightness || 1;
              particle.alpha = (Math.sin(particle.pulse) * 0.4 + 0.6) * maxBrightness;
            }
          }
        }
        
        // Draw the particle with glow effect
        drawGlowingParticle(particle);
      }
      
      // Draw connections between network nodes that are close to each other
      // Only connect between node particles for better performance
      const nodeParticles = particles.filter(p => p.type === 'node');
      
      for (let i = 0; i < nodeParticles.length; i++) {
        for (let j = i + 1; j < nodeParticles.length; j++) {
          const p1 = nodeParticles[i];
          const p2 = nodeParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // The closer they are, the more opaque the line
            const opacity = 1 - (distance / 150);
            
            // Create a gradient for the connection
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            const baseColor1 = p1.color.substring(0, p1.color.lastIndexOf(',')) + ', ';
            const baseColor2 = p2.color.substring(0, p2.color.lastIndexOf(',')) + ', ';
            
            gradient.addColorStop(0, baseColor1 + (opacity * 0.7) + ')');
            gradient.addColorStop(1, baseColor2 + (opacity * 0.7) + ')');
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            
            // Add data flow animation on some connections
            if (Math.random() < 0.002) {
              const numDataPoints = Math.floor(Math.random() * 3) + 2;
              const dataSpeed = 0.01 + Math.random() * 0.02;
              
              for (let k = 0; k < numDataPoints; k++) {
                const t = ((frame * dataSpeed) % 1 + k / numDataPoints) % 1;
                const dataX = p1.x + (p2.x - p1.x) * t;
                const dataY = p1.y + (p2.y - p1.y) * t;
                
                ctx.beginPath();
                ctx.arc(dataX, dataY, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
              }
            }
          }
        }
      }
      
      // Update pulse waves
      updatePulseWaves();
      
      // Occasionally create a "pulse" from a random node
      if (Math.random() < 0.002 && nodeParticles.length > 0) {
        const sourceNode = nodeParticles[Math.floor(Math.random() * nodeParticles.length)];
        createPulseWave(sourceNode.x, sourceNode.y);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Pulse waves array
    const pulseWaves: {x: number, y: number, radius: number, maxRadius: number, color: string}[] = [];
    
    // Function to create pulse wave
    function createPulseWave(x: number, y: number) {
      const color = getRandomColor();
      pulseWaves.push({
        x,
        y,
        radius: 5,
        maxRadius: 100 + Math.random() * 150,
        color
      });
    }
    
    // Function to animate and draw pulse waves
    function updatePulseWaves() {
      if (!ctx) return; // Safety check
      
      for (let i = pulseWaves.length - 1; i >= 0; i--) {
        const wave = pulseWaves[i];
        wave.radius += 1 + wave.radius / 30;
        
        const baseColor = wave.color.substring(0, wave.color.lastIndexOf(',')) + ', ';
        const opacity = (1 - wave.radius / wave.maxRadius) * 0.5;
        
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = baseColor + opacity + ')';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        if (wave.radius > wave.maxRadius) {
          pulseWaves.splice(i, 1);
        }
      }
    }
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none"></div>
    </div>
  );
};

export default ParticleNetwork;
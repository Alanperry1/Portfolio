import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CyberSecurityBackgroundProps {
  className?: string;
}

const CyberSecurityBackground = ({ className = '' }: CyberSecurityBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create binary streams (Matrix-like effect)
    const binaryParticles: {
      x: number;
      y: number;
      speed: number;
      text: string;
      color: string;
      opacity: number;
    }[] = [];
    
    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor(canvas.width / 20); // Adjust density
      binaryParticles.length = 0;
      
      for (let i = 0; i < particleCount; i++) {
        binaryParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 1 + Math.random() * 3,
          text: Math.random() > 0.5 ? '1' : '0',
          color: `rgba(122, 54, 250, ${0.5 + Math.random() * 0.5})`, // Cyber purple with varying opacity
          opacity: 0.1 + Math.random() * 0.9
        });
      }
    };
    
    initParticles();
    window.addEventListener('resize', initParticles);
    
    // Nodes and connections (network visualization)
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];
    
    const initNodes = () => {
      const nodeCount = Math.floor(canvas.width / 150); // Fewer nodes for better performance
      nodes.length = 0;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 2 + Math.random() * 3,
          color: `rgba(122, 54, 250, ${0.3 + Math.random() * 0.3})`
        });
      }
    };
    
    initNodes();
    window.addEventListener('resize', initNodes);
    
    // Animation frame
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw dark overlay with grid pattern
      ctx.fillStyle = 'rgba(15, 15, 35, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(122, 54, 250, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw binary particles
      for (const particle of binaryParticles) {
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.font = '12px monospace';
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.globalAlpha = 1;
        
        // Randomly change 1s and 0s
        if (Math.random() < 0.01) {
          particle.text = Math.random() > 0.5 ? '1' : '0';
        }
      }
      
      // Update and draw nodes
      for (const node of nodes) {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
      
      // Draw connections between nearby nodes
      ctx.strokeStyle = 'rgba(122, 54, 250, 0.2)';
      ctx.lineWidth = 0.8;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect nodes within a certain distance
          if (distance < 150) {
            ctx.globalAlpha = 1 - (distance / 150);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      
      // Draw occasional "security scanning" lines
      if (Math.random() < 0.02) {
        const y = Math.random() * canvas.height;
        ctx.strokeStyle = 'rgba(122, 54, 250, 0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
        
        // Add glow effect
        ctx.strokeStyle = 'rgba(122, 54, 250, 0.3)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('resize', initNodes);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70 pointer-events-none"></div>
      
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none"></div>
      
      {/* Occasional flashing effect for "security alerts" */}
      <motion.div 
        className="absolute inset-0 bg-accent/5 pointer-events-none"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: Math.random() * 5 + 5, // Random interval between flashes
        }}
      ></motion.div>
    </div>
  );
};

export default CyberSecurityBackground;
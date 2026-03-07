import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Coin {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create dots
    const dots: Dot[] = [];
    const numDots = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Create floating coins
    const coins: Coin[] = [];
    const numCoins = 20;
    
    for (let i = 0; i < numCoins; i++) {
      coins.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 0.3 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Draw coin
    const drawCoin = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Coin body
      ctx.fillStyle = 'rgba(236, 72, 153, 0.15)';
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Coin edge
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // $ symbol
      ctx.fillStyle = 'rgba(236, 72, 153, 0.4)';
      ctx.font = `${size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', 0, 0);
      
      ctx.restore();
    };

    // Draw chart lines
    const drawChartLines = () => {
      const numLines = 5;
      for (let i = 0; i < numLines; i++) {
        const y = (canvas.height / numLines) * i + Math.sin(Date.now() / 1000 + i) * 50;
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        
        for (let x = 0; x < canvas.width; x += 50) {
          const nextY = y + Math.sin(x / 100 + Date.now() / 1000 + i) * 20;
          ctx.lineTo(x, nextY);
        }
        ctx.stroke();
      }
    };

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw chart lines
      drawChartLines();

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw dot
        ctx.fillStyle = 'rgba(236, 72, 153, 0.3)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[j].x - dot.x;
          const dy = dots[j].y - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(236, 72, 153, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      });

      // Update and draw coins
      coins.forEach((coin) => {
        coin.y -= coin.speed;
        coin.rotation += coin.rotationSpeed;
        
        // Reset coin when it goes off screen
        if (coin.y < -coin.size) {
          coin.y = canvas.height + coin.size;
          coin.x = Math.random() * canvas.width;
        }
        
        drawCoin(coin.x, coin.y, coin.size, coin.rotation);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-black"
    />
  );
}

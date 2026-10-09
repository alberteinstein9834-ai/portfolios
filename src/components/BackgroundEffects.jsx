import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let animationFrameId;
    let isRunning = false;
    let particles = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const mouse = {
      x: null,
      y: null,
      radius: 300,
    };

    function createParticles() {
      const isMobile = width < 640;
      const maxParticles = isMobile ? 38 : 105;
      const minParticles = isMobile ? 22 : 42;
      const particleCount = Math.min(
        maxParticles,
        Math.max(minParticles, Math.floor((width * height) / 11000))
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.6 + 0.8,
        opacity: Math.random() * 0.25 + 0.45,
      }));
    }

    function resizeCanvas() {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
    }

    function handlePointerMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handlePointerLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function updateParticles() {
      particles.forEach((particle) => {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Cursor ke qareeb particles ko cursor ki taraf kheenchna
          if (distance > 0 && distance < mouse.radius) {
            const pull = (1 - distance / mouse.radius) * 0.018;
            particle.vx += (dx / distance) * pull;
            particle.vy += (dy / distance) * pull;
          }
        }

        // Thodi friction, taake movement smooth rahe
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Speed limit
        const maxSpeed = 1.4;
        particle.vx = Math.max(-maxSpeed, Math.min(maxSpeed, particle.vx));
        particle.vy = Math.max(-maxSpeed, Math.min(maxSpeed, particle.vy));

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Screen ke edge par bounce
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      });
    }

    function drawConnections() {
      const maxDistance = width < 640 ? 145 : 180;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance >= maxDistance) continue;

          let cursorBoost = 0;

          if (mouse.x !== null && mouse.y !== null) {
            const centerX = (p1.x + p2.x) / 2;
            const centerY = (p1.y + p2.y) / 2;
            const cursorDx = centerX - mouse.x;
            const cursorDy = centerY - mouse.y;
            const cursorDistance = Math.sqrt(
              cursorDx * cursorDx + cursorDy * cursorDy
            );

            if (cursorDistance < mouse.radius) {
              cursorBoost = (1 - cursorDistance / mouse.radius) * 0.3;
            }
          }

          const lineOpacity =
            (1 - distance / maxDistance) * 0.38 + cursorBoost;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(249, 185, 140, ${Math.min(
            lineOpacity,
            0.65
          )})`;
          ctx.lineWidth = 0.7 + cursorBoost;
          ctx.stroke();
        }
      }
    }

    function drawParticles() {
      particles.forEach((particle) => {
        let cursorGlow = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            cursorGlow = (1 - distance / mouse.radius) * 0.35;
          }
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size + cursorGlow,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(249, 185, 140, ${Math.min(
          particle.opacity + cursorGlow,
          1
        )})`;
        ctx.fill();
      });
    }

    function draw() {
      if (!isRunning || document.hidden) return;
      ctx.clearRect(0, 0, width, height);
      updateParticles();
      drawConnections();
      drawParticles();
      animationFrameId = window.requestAnimationFrame(draw);
    }

    function startAnimation() {
      if (isRunning || document.hidden) return;
      isRunning = true;
      animationFrameId = window.requestAnimationFrame(draw);
    }

    function stopAnimation() {
      isRunning = false;
      window.cancelAnimationFrame(animationFrameId);
    }

    function handleVisibilityChange() {
      if (document.hidden) stopAnimation();
      else startAnimation();
    }

    resizeCanvas();
    startAnimation();

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      {/* Spider-web canvas */}
      <canvas
        ref={canvasRef}
        id="spider-web-canvas"
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      />

      {/* Dark overlay ko halka kiya hai taake lines nazar aayen */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(197,139,98,0.10)_0%,rgba(29,16,11,0.22)_58%,rgba(22,12,7,0.62)_100%)]"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-[15%] z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
    </>
  );
}

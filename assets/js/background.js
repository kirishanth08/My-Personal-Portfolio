/**
 * DYNAMIC BACKGROUND & INTERACTIVE CANVAS
 * -------------------------------------------------------------
 * High-performance, lightweight particle constellation + ambient glow
 * Reacts smoothly to cursor movement with fluid physics
 */

class InteractiveBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000, radius: 180 };
    this.animationFrameId = null;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    if (!this.reducedMotion) {
      this.animate();
    } else {
      this.renderStatic();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticles() {
    this.particles = [];
    // Adjust density based on screen dimensions
    const count = Math.min(Math.floor((this.width * this.height) / 14000), 85);

    const colors = [
      'rgba(139, 92, 246, 0.75)',  // Violet
      'rgba(6, 182, 212, 0.75)',   // Cyan
      'rgba(59, 130, 246, 0.75)',  // Blue
      'rgba(168, 85, 247, 0.65)'   // Purple
    ];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        baseRadius: Math.random() * 2 + 1,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() * 12 + 6
      });
    }
  }

  bindEvents() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.resize();
        this.createParticles();
        if (this.reducedMotion) this.renderStatic();
      }, 150);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      // Update CSS variables for interactive glow spotlight across the page
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    // Touch support for mobile devices
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Physics movement
      p.x += p.vx;
      p.y += p.vy;

      // Screen edge bounce
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse interaction (gentle repulsion/attraction)
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius && dist > 0) {
        const force = (this.mouse.radius - dist) / this.mouse.radius;
        const angle = Math.atan2(dy, dx);
        p.x -= Math.cos(angle) * force * 2.5;
        p.y -= Math.sin(angle) * force * 2.5;
      }

      // Draw particle with glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = p.glow;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset shadow for performance

      // Connect near particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const distX = p.x - p2.x;
        const distY = p.y - p2.y;
        const distBetween = Math.sqrt(distX * distX + distY * distY);
        const maxDist = 120;

        if (distBetween < maxDist) {
          const alpha = (1 - distBetween / maxDist) * 0.28;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(147, 130, 240, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  renderStatic() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.bgCanvas = new InteractiveBackground();
});

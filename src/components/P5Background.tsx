import { useEffect, useRef } from "react";
import p5 from "p5";

export const P5Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      const numParticles = 40;

      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        size: number;

        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
          this.size = p.random(1, 3);
        }

        update() {
          this.pos.add(this.vel);
          if (this.pos.x < 0 || this.pos.x > p.width) this.vel.x *= -1;
          if (this.pos.y < 0 || this.pos.y > p.height) this.vel.y *= -1;
        }

        draw() {
          p.noStroke();
          p.fill(255, 255, 255, 40);
          p.circle(this.pos.x, this.pos.y, this.size);
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(containerRef.current!);
        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
        }
      };

      p.draw = () => {
        p.clear();
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          for (let j = i + 1; j < particles.length; j++) {
            const d = p.dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            if (d < 150) {
              p.stroke(255, 255, 255, p.map(d, 0, 150, 40, 0));
              p.strokeWeight(0.5);
              p.line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-20 pointer-events-none opacity-40" />;
};

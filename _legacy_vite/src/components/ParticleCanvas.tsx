import React, { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
    darkMode: boolean;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ darkMode }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Tech stack definitions with their core simple shapes (coordinates relative to a center point)
    // We'll define simple iconic shapes using coordinates (scale 0-1)
    const techStack = [
        {
            name: "React",
            desc: "Built: Traxos Finance, Concession System, Tech Rental",
            // Ellipses pattern approximation
            points: Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                return {
                    x: Math.cos(angle) * 0.8 * Math.cos(Math.PI / 6) - Math.sin(angle) * 0.3 * Math.sin(Math.PI / 6),
                    y: Math.cos(angle) * 0.8 * Math.sin(Math.PI / 6) + Math.sin(angle) * 0.3 * Math.cos(Math.PI / 6)
                };
            }).concat(Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                return {
                    x: Math.cos(angle) * 0.8 * Math.cos(-Math.PI / 6) - Math.sin(angle) * 0.3 * Math.sin(-Math.PI / 6),
                    y: Math.cos(angle) * 0.8 * Math.sin(-Math.PI / 6) + Math.sin(angle) * 0.3 * Math.cos(-Math.PI / 6)
                };
            })).concat(Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                return {
                    x: Math.cos(angle) * 0.8 * Math.cos(Math.PI / 2) - Math.sin(angle) * 0.3 * Math.sin(Math.PI / 2),
                    y: Math.cos(angle) * 0.8 * Math.sin(Math.PI / 2) + Math.sin(angle) * 0.3 * Math.cos(Math.PI / 2)
                };
            }))
        },
        {
            name: "Next.js",
            desc: "Built: HealthFirstPriority (HFP) Clinical Platform",
            // V shape / Circle
            points: Array.from({ length: 90 }).map((_, i) => {
                const angle = (i / 90) * Math.PI * 2;
                return { x: Math.cos(angle), y: Math.sin(angle) };
            })
        },
        {
            name: "Python",
            desc: "Built: AI Honeypot, Face Rec Attendance, EchoAI",
            // Approx abstract representation
            points: Array.from({ length: 90 }).map((_, i) => {
                const angle = (i / 90) * Math.PI * 2;
                const r = 0.5 + 0.3 * Math.sin(3 * angle);
                return { x: r * Math.cos(angle), y: r * Math.sin(angle) };
            })
        }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        let mouse = { x: -1000, y: -1000, radius: 150 };

        let targetPattern: any = null;
        let targetCenter = { x: 0, y: 0 };

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 8000, 150);

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    density: (Math.random() * 20) + 1,
                    color: darkMode ? `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})` : `rgba(0, 0, 0, ${Math.random() * 0.3 + 0.1})`
                });
            }
        };

        const drawParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];

                // If a pattern is active, map particles to pattern points
                let targetX = p.baseX;
                let targetY = p.baseY;

                if (targetPattern && i < targetPattern.points.length) {
                    const point = targetPattern.points[i];
                    // Scale and position pattern around cursor
                    targetX = targetCenter.x + point.x * 60;
                    targetY = targetCenter.y + point.y * 60;
                }

                // Mouse interaction / Physics
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                // Repel distance
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;

                let directionX = (forceDirectionX * force * p.density);
                let directionY = (forceDirectionY * force * p.density);

                // Move towards target (either base or pattern)
                p.x += (targetX - p.x) * 0.05;
                p.y += (targetY - p.y) * 0.05;

                // Apply mouse repel if close
                if (distance < mouse.radius && !targetPattern) {
                    p.x -= directionX;
                    p.y -= directionY;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Draw connecting lines between close particles
                for (let j = i; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx2 = p.x - p2.x;
                    let dy2 = p.y - p2.y;
                    let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    // Connect lines if close or forming pattern
                    if (distance2 < (targetPattern ? 40 : 80)) {
                        ctx.beginPath();
                        ctx.strokeStyle = darkMode ? `rgba(255, 255, 255, ${0.1 - distance2 / 800})` : `rgba(0, 0, 0, ${0.1 - distance2 / 800})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = Math.max(0, requestAnimationFrame(drawParticles));
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY + window.scrollY; // adjust for scroll
        };

        const handleMouseClick = (e: MouseEvent) => {
            // Pick a random tech stack to form
            const randomTech = techStack[Math.floor(Math.random() * techStack.length)];
            targetPattern = randomTech;
            targetCenter = { x: e.clientX, y: e.clientY + window.scrollY };

            // Dissolve after 3 seconds
            setTimeout(() => {
                targetPattern = null;
            }, 3000);
        };

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);

        initCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', initCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};

export default ParticleCanvas;

/**
 * About Page Interactive Components
 * 
 * This script handles various interactive elements on the about page:
 * - Particle System Animation
 * - Real-time Clock Display
 * - Date Display
 * - Visitor Counter
 * - Interactive Calendar Widget
 * 
 * @author Association
 * @version 1.0.0
 */

// Particles.js - Interactive background animation system
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.config = {
            particleCount: 100,
            particleSize: { min: 1, max: 3 },
            speed: { min: 0.2, max: 0.8 },
            connectionDistance: 120,
            colors: ['#6366F1', '#818CF8', '#A5B4FC'],
            pulseSpeed: 0.01,
            mouseRepulsion: 80
        };

        this.setupEventListeners();
        this.resize();
        this.init();
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * (this.config.particleSize.max - this.config.particleSize.min) + this.config.particleSize.min,
                speedX: (Math.random() - 0.5) * this.config.speed.max,
                speedY: (Math.random() - 0.5) * this.config.speed.max,
                color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
                angle: Math.random() * Math.PI * 2,
                pulseSize: 0
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
        this.init();
    }

    update() {
        this.particles.forEach(p => {
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            p.angle += 0.02;
            p.pulseSize = Math.sin(p.angle) * 0.5;

            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.mouseRepulsion) {
                    const force = (this.config.mouseRepulsion - distance) / this.config.mouseRepulsion;
                    p.speedX -= (dx / distance) * force * 0.2;
                    p.speedY -= (dy / distance) * force * 0.2;
                }
            }

            // Edge boundaries
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

            // Speed limits
            p.speedX = Math.max(Math.min(p.speedX, this.config.speed.max), -this.config.speed.max);
            p.speedY = Math.max(Math.min(p.speedY, this.config.speed.max), -this.config.speed.max);
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.connectionDistance) {
                    const opacity = (1 - distance / this.config.connectionDistance) * 0.5;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });

        // Draw particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size + p.pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// DOM Event Handlers and Component Initializations
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const particleSystem = new ParticleSystem(canvas);
        particleSystem.animate();
    }
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize Time Display
    function updateTime() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        document.getElementById('timeCalendar').innerHTML = now.toLocaleTimeString('en-US', options);
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Initialize Current Date
    function updateCurrentDate() {
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
    }
    updateCurrentDate();

    // Initialize Visitor Counter
    function updateVisitorCount() {
        let count = localStorage.getItem('visitorCount') || 0;
        count++;
        localStorage.setItem('visitorCount', count);
        document.getElementById('visitorCount').textContent = count;
    }
    updateVisitorCount();

    // Initialize Calendar
    const calendarIcon = document.getElementById('calendar-icon');
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const dates = document.getElementById('dates');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        
        monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
        dates.innerHTML = '';
        
        for (let i = 0; i < firstDay; i++) {
            dates.innerHTML += '<div></div>';
        }
        
        for (let i = 1; i <= lastDate; i++) {
            let dateDiv = document.createElement('div');
            dateDiv.textContent = i;
            if (today.toDateString() === new Date(year, month, i).toDateString()) {
                dateDiv.classList.add('today');
            }
            dates.appendChild(dateDiv);
        }
    }

    prev.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    next.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    calendarIcon.addEventListener('click', () => {
        calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
    });

    // Initialize calendar on load
    renderCalendar(currentDate);
});

/**
 * Time and Date Functions
 * Handles real-time clock updates and date display
 */

/**
 * Visitor Counter Implementation
 * Tracks and displays visitor count using localStorage
 */

/**
 * Calendar Widget Implementation
 * Interactive calendar with month navigation
 */

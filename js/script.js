//==================================
//            Initialization
//==================================
// Initialize AOS animation library
AOS.init({
    duration: 1000,
    once: true
});

//==================================
//            Particles.js Config
//==================================
// Header particles
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#ffd700' },  // Gold color
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#daa520',         // Golden Rod
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});

// About section particles
particlesJS('about-particles', {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { 
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 6,
                duration: 0.4
            },
            push: { particles_nb: 4 }
        }
    }
});

// Menu section particles
particlesJS('menu-particles', {
    particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.3,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});

// Vision section particles
particlesJS('vision-particles', {
    particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.3,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});

// Footer particles
particlesJS('footer-particles', {
    particles: {
        number: { value: 20, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.2,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    }
});

//==================================
//            GSAP Animations
//==================================
// Logo animation
gsap.from('.logo-img', {
    duration: 1.5,
    scale: 0,
    rotation: 360,
    ease: 'elastic.out(1, 0.3)',
    stagger: 0.2
});

// Vision cards animation
gsap.registerPlugin(ScrollTrigger);
const visionCards = document.querySelectorAll('.vision-section .group');
visionCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2
    });
});

// Footer animation
gsap.from('footer .container > div', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

//==================================
//            Date & Time
//==================================
// Update current date display
function updateCurrentDate() {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
}

// Enhanced time display
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('timeCalendar').innerHTML = now.toLocaleTimeString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();

//==================================
//            Visitor Counter
//==================================
function updateVisitorCount() {
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    
    // Animate counter
    const counterElement = document.getElementById('visitorCount');
    gsap.to(counterElement, {
        textContent: count,
        duration: 1,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: {
            each: 1,
            onUpdate: function() {
                this.targets()[0].textContent = numberWithCommas(Math.ceil(this.targets()[0].textContent));
            },
        }
    });
}

// Helper function for number formatting
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//==================================
//            Calendar
//==================================
// Calendar initialization and event handlers
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
    // Fill in empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += '<div></div>';
    }
    // Create date cells
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
    adjustCalendarPosition();
});

// Calendar positioning
function adjustCalendarPosition() {
    const calendar = document.getElementById('calendar');
    const icon = document.getElementById('calendar-icon');
    if (window.innerWidth <= 768) {
        const iconRect = icon.getBoundingClientRect();
        calendar.style.left = `${iconRect.left}px`;
    } else {
        calendar.style.left = '50%';
    }
}

// Add event listeners for responsive calendar
window.addEventListener('resize', adjustCalendarPosition);

// Initialize the calendar on page load
renderCalendar(currentDate);

//==================================
//            Placement Slider
//==================================
// Slider configuration
const placementSliderConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            coverflowEffect: {
                depth: 50,
                modifier: 1
            }
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
            coverflowEffect: {
                depth: 60,
                modifier: 1.2
            }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            coverflowEffect: {
                depth: 80,
                modifier: 1.5
            }
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 25,
            coverflowEffect: {
                depth: 90,
                modifier: 2
            }
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            coverflowEffect: {
                depth: 100,
                modifier: 2.5
            }
        }
    }
};

// Initialize slider
const placementSwiper = new Swiper('.placement-slider', placementSliderConfig);

// Slide content animation
function animateSlideContent(slideEl) {
    if (!slideEl) return;

    const timeline = gsap.timeline();
    const elements = {
        image: slideEl.querySelector('.profile-image'),
        name: slideEl.querySelector('.name'),
        designation: slideEl.querySelector('.designation'),
        company: slideEl.querySelector('.company'),
        stats: slideEl.querySelectorAll('.stat-item'),
        socials: slideEl.querySelectorAll('.social-icon')
    };

    timeline
        .from(elements.image, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        })
        .from(elements.name, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
        })
        .from(elements.designation, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2')
        .from(elements.company, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2')
        .from(elements.stats, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.2')
        .from(elements.socials, {
            y: 0,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, '-=0.2');
}

// Slider event listeners
placementSwiper.on('slideChangeTransitionEnd', () => {
    animateSlideContent(document.querySelector('.swiper-slide-active'));
});

//==================================
//            Effects & Animations
//==================================
// Initialize tilt effect
VanillaTilt.init(document.querySelectorAll('.placement-card'), {
    max: 5,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
});

// Programming icons animation
function randomizeIconPositions() {
    const icons = document.querySelectorAll('.programming-icons i');
    icons.forEach(icon => {
        const randomX = Math.random() * 80 + 10; // 10-90%
        const randomY = Math.random() * 80 + 10; // 10-90%
        icon.style.left = `${randomX}%`;
        icon.style.top = `${randomY}%`;
    });
}

//==================================
//            Smooth Scroll
//==================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have hash (#) in them
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hashes
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll with easing
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Smooth scroll on page load if URL has hash
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

//==================================
//         Smooth Scrolling
//==================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hashes
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get header height for offset
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Smooth scroll with enhanced easing
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jump (pushState)
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Handle initial hash on page load
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

//==================================
//            Event Listeners
//==================================
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    randomizeIconPositions();
    updateTime();
    updateVisitorCount();
    renderCalendar(currentDate);
    adjustCalendarPosition();
    updateCurrentDate();
    
    // Set up intervals
    setInterval(updateCurrentDate, 60000);
    
    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#ffd700' },  // Gold color
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#daa520',         // Golden Rod
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    });

    particlesJS('about-particles', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { 
                value: 0.5,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'bubble' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 0.4
                },
                push: { particles_nb: 4 }
            }
        }
    });

    particlesJS('menu-particles', {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.3,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'bubble' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    });

    particlesJS('vision-particles', {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.3,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'bubble' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            }
        }
    });

    particlesJS('footer-particles', {
        particles: {
            number: { value: 20, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.2,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        }
    });

    updateTime();
    updateVisitorCount();
    renderCalendar(currentDate);
    adjustCalendarPosition();
    updateCurrentDate();
    setInterval(updateCurrentDate, 60000); // Update date every minute
});

// Add event listeners for responsive calendar
window.addEventListener('resize', adjustCalendarPosition);



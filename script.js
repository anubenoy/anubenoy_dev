// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Projects Video Carousel
const videoData = [
    {
        src: 'assets/Ngmart.mp4',
        title: 'NGMart',
        description: 'A responsive web platform integrating shops in small towns, enabling sellers to participate in e-commerce and giving buyers visibility of product availability and inventory management with automated expiry date tracking.',
        duration: 12000 // 12 seconds
    },
    {
        src: 'assets/Find.mp4',
        title: 'Find',
        description: 'A powerful discovery application designed to help users find and explore resources efficiently with an intuitive interface and seamless navigation experience.',
        duration: 70000 // 1 minute 10 seconds
    }
];

let currentProjectIndex = 0;
let projectAutoSwitchTimer = null;

function initializeProjectCarousel() {
    const projectDots = document.getElementById('projectDots');
    const projectVideo = document.querySelector('.project-video-bg');
    
    if (!projectDots || !projectVideo) return;
    
    // Add click handlers to dots
    const dots = projectDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            switchProject(index);
        });
    });
    
    // Start auto-switch
    startProjectAutoSwitch();
}

function switchProject(index) {
    currentProjectIndex = index;
    const projectVideo = document.querySelector('.project-video-bg');
    const projectDots = document.getElementById('projectDots');
    const projectTitle = document.querySelector('.project-title');
    const projectDescription = document.querySelector('.project-description');
    
    // Update video source and reset
    projectVideo.src = videoData[index].src;
    projectVideo.load();
    projectVideo.play();
    
    // Update text content
    projectTitle.textContent = videoData[index].title;
    projectDescription.textContent = videoData[index].description;
    
    // Update active dot
    const dots = projectDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Reset auto-switch timer
    clearProjectAutoSwitch();
    startProjectAutoSwitch();
}

function clearProjectAutoSwitch() {
    if (projectAutoSwitchTimer) {
        clearInterval(projectAutoSwitchTimer);
        projectAutoSwitchTimer = null;
    }
}

function startProjectAutoSwitch() {
    const currentDuration = videoData[currentProjectIndex].duration;
    projectAutoSwitchTimer = setTimeout(() => {
        const nextIndex = (currentProjectIndex + 1) % videoData.length;
        switchProject(nextIndex);
    }, currentDuration);
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', initializeProjectCarousel);
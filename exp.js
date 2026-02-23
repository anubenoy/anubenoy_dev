// Experience data embedded directly
const experienceData = [
     {
        "title": "IOT Internship",
        "company": "Kochi - based IOT Company",
        "duration": "2018",
        "description": "Gaining hands-on experience in developing and implementing IoT solutions, integrating sensors and devices, and analyzing data streams to optimize system performance and functionality."
    },
        {
        "title": "Advanced Python Programming Bootcamp",
        "company": "Amal Jyothi College of Engineering",
        "duration": "2020",
        "description": "Certifies ability to develop implement complex algorithms and design high-performance applications with a deep understanding of Python's advanced capabilities and functionalities."
    },
       {
        "title": "Introduction to PostgreSQL",
        "company": "Online Course",
        "duration": "2020",
        "description": "Acquiring fundamental knowledge and practical skills in database management, SQL querying, and data manipulation using PostgreSQL, open-source relational database management system."
    },
   {
        "title": "Analyzing and Visualizing Data with Microsoft Power BI",
        "company": "Coursera",
        "duration": "2020",
        "description": "Demonstrating proficiency in harnessing the capabilities of Power BI to analyze datasets, create insightful visualizations, and derive actionable insights for informed decision-making."
    },
    {
        "title": "Introduction to Data Analytics",
        "company": "Amal Jyothi College of Engineering",
        "duration": "2020",
        "description": "Demonstrating proficiency in advanced technologies and systems essential for navigating the complexities of the modern digital era."
    },
     {
        "title": "Computing & Communication System for Fourth Industrial Revolution - certification",
        "company": "Amazon",
        "duration": "2020",
        "description": "Demonstrating proficiency in advanced technologies and systems essential for navigating the complexities of the modern digital era."
    },
    {
        "title": "Masters Of Computer Application ( MCA ) ",
        "company": "APJ Abdul Kalam Technological University",
        "duration": "2016 - 2021",
        "description": "MCA graduate with Distinction excelling in cybersecurity research (Metasploit, Vail) and practical web/mobile development expertise."
    },
  {
        "title": "Full Stack Developer",
        "company": "Self-Employed Nearest Grocery Mart (NGMart)",
        "duration": "2020 - 2021",
        "description": "A responsive web platform integrating the shops in small towns enabling sellers to take part in e-commerce and gives buyers an idea about the availability of required items as well as monitoring and keeping track of all the inventories and their expiry dates, automatically informing the owner and providing a detailed report based on their inventory."
    },
  {
        "title": "Data Operations Analyst",
        "company": "Gartner",
        "duration": "2021 - 2022",
        "description": "Researched, designed and development different Automated scripts to prune and parse necessary data from the web and also made data visualization to get better grasp of data. Leveraged technical skills in utilizing X-Path, JavaScript (Js), Python, and C# for effective and accurate data extraction from various sources. Utilized Tortoise Git for efficient version control and collaborative code management and Grafana to monitor and analyze the data extraction process, optimizing performance and identifying areas for improvement. Collaborated on the testing and enhancement of an in-house tool, contributing to its functionality, reliability, and overall effectiveness. Played a key role in the successful migration of data from legacy systems to a new tool, ensuring data integrity and a seamless transition."
    },
   {
        "title": "Postgraduate diploma in Mobile Solutions Development",
        "company": "Conestoga College",
        "duration": "2022 - 2023",
        "description": "Graduate with Distinction (GPA: 3.6/4.0) skilled in mobile app design, native/cross-platform development,and machine learning. Demonstrated innovation through real-time video data model predictions in iOS."
    },
      {
        "title": "iOS Developer Penny - Expense Tracking App for iPhone",
        "company": "Self-Employed",
        "duration": "2022 - 2023",
        "description": "Developed and maintained Penny, a privacy-focused, ad-free iPhone expense tracking app with multi-account management, graphical spending analysis using Charts, and customizable categories, showcasing expertise in iOS app development, UI/UX design, and security implementation."
    },
    {
        "title": "Backend Developer",
        "company": "Self-Employed FoodARoma - Built your Own Pizza",
        "duration": "2023 - 2024",
        "description": "Enabled users to create and customize personalized pizzas, visualizing the end product in real-time, while integrating order/pickup functionalities for enhanced customer experience using Core Animation. Implemented a location-based system using CoreLocation for restaurants to track customer arrivals, and integrated a 3D model feature allowing establishments to showcase special menu items through AR views."
    },
];

// Load experience data - returns embedded data directly
async function loadExperienceData() {
    return experienceData;
}

// Carousel state
let currentCarouselIndex = 0;
let carouselAutoRotateTimer = null;
const CAROUSEL_INTERVAL = 5000; // 5 seconds

// Ring sizing and animation configuration
const ringSizes = [160, 185, 210, 235, 260, 285, 310, 335, 360, 385, 410, 435];
const animationDirections = [
    'rotate-anticlockwise',
    'rotate-clockwise',
    'rotate-anticlockwise',
    'rotate-clockwise',
    'rotate-anticlockwise',
    'rotate-clockwise',
    'rotate-anticlockwise',
    'rotate-clockwise',
    'rotate-anticlockwise',
    'rotate-clockwise',
    'rotate-anticlockwise',
    'rotate-clockwise'
];

// Create carousel dots
function createCarouselDots(totalDots) {
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToCarouselIndex(i));
        dotsContainer.appendChild(dot);
    }
}

// Update carousel display
function displayCarouselItem(index, experiences, showOnLeft = null) {
    currentCarouselIndex = index;
    const experience = experiences[index];
    
    const leftDetails = document.getElementById('leftDetails');
    const rightDetails = document.getElementById('rightDetails');
    
    // If showOnLeft is not specified, default to showing on left
    if (showOnLeft === null) {
        showOnLeft = true;
    }
    
    if (showOnLeft && leftDetails) {
        // Show on left
        leftDetails.querySelector('.details-title').textContent = experience.title;
        leftDetails.querySelector('.details-company').textContent = experience.company;
        leftDetails.querySelector('.details-duration').textContent = experience.duration;
        leftDetails.querySelector('.details-description').textContent = experience.description;
        leftDetails.classList.add('visible');
        
        // Hide right
        if (rightDetails) {
            rightDetails.classList.remove('visible');
        }
    } else if (!showOnLeft && rightDetails) {
        // Show on right
        rightDetails.querySelector('.details-title').textContent = experience.title;
        rightDetails.querySelector('.details-company').textContent = experience.company;
        rightDetails.querySelector('.details-duration').textContent = experience.duration;
        rightDetails.querySelector('.details-description').textContent = experience.description;
        rightDetails.classList.add('visible');
        
        // Hide left
        if (leftDetails) {
            leftDetails.classList.remove('visible');
        }
    }
    
    // Update active dot
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Highlight corresponding ring
    const allRings = document.querySelectorAll('.border-ring');
    allRings.forEach((ring, i) => {
        if (i === index) {
            ring.classList.add('active');
            ring.classList.remove('blurred');
        } else {
            ring.classList.add('blurred');
            ring.classList.remove('active');
        }
    });
}

// Navigate to specific carousel index
function goToCarouselIndex(index) {
    displayCarouselItem(index, experienceData);
    clearAutoRotate();
    startAutoRotate(experienceData);
}

// Clear auto-rotate timer
function clearAutoRotate() {
    if (carouselAutoRotateTimer) {
        clearInterval(carouselAutoRotateTimer);
        carouselAutoRotateTimer = null;
    }
}

// Start auto-rotate carousel
function startAutoRotate(experiences) {
    carouselAutoRotateTimer = setInterval(() => {
        const nextIndex = (currentCarouselIndex + 1) % experiences.length;
        displayCarouselItem(nextIndex, experiences);
    }, CAROUSEL_INTERVAL);
}

// Create rings dynamically with experience data
async function initializeRings() {
    const experiences = await loadExperienceData();
    const circle = document.getElementById('experienceCircle');
    const innerCircle = circle.querySelector('.inner-circle');

    // Create carousel dots
    createCarouselDots(experiences.length);
    
    // Get the inner circle's position
    let insertPosition = Array.from(circle.children).indexOf(innerCircle);

    experiences.forEach((experience, index) => {
        if (index < ringSizes.length) {
            const ring = document.createElement('div');
            ring.className = 'border-ring';
            ring.style.width = ringSizes[index] + 'px';
            ring.style.height = ringSizes[index] + 'px';
            ring.setAttribute('data-index', index);
            ring.setAttribute('data-title', experience.title);
            ring.setAttribute('data-company', experience.company);
            ring.setAttribute('data-duration', experience.duration);
            ring.setAttribute('data-description', experience.description);

            // Apply animation
            ring.style.animation = `${animationDirections[index]} 160s linear infinite`;

            // Add hover listeners
            ring.addEventListener('mouseenter', () => {
                clearAutoRotate();
                
                // Determine which side the ring is on
                const circle = document.getElementById('experienceCircle');
                const circleRect = circle.getBoundingClientRect();
                const ringRect = ring.getBoundingClientRect();
                
                const circleCenterX = circleRect.left + circleRect.width / 2;
                const ringCenterX = ringRect.left + ringRect.width / 2;
                
                const showOnLeft = ringCenterX < circleCenterX;
                
                displayCarouselItem(index, experiences, showOnLeft);
            });
            ring.addEventListener('mouseleave', () => {
                startAutoRotate(experiences);
            });

            // Insert ring at the calculated position
            if (insertPosition < circle.children.length) {
                circle.insertBefore(ring, circle.children[insertPosition]);
            } else {
                circle.appendChild(ring);
            }
            insertPosition++;
        }
    });
    
    // Display first item and start carousel
    displayCarouselItem(0, experiences);
    startAutoRotate(experiences);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeRings);

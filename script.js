document.addEventListener('DOMContentLoaded', () => {
    // --- Spotlight Effect ---
    const spotlight = document.getElementById('cursor-spotlight');
    window.addEventListener('mousemove', (e) => {
        if(spotlight) {
            const x = e.clientX;
            const y = e.clientY;
            spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(168, 182, 22, 0.15), transparent 80%)`;
        }
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Render Experience ---
    const renderTimeline = () => {
        const timelineContainer = document.getElementById('experience-list');
        if (!timelineContainer) return;

        const experiences = [
            {
                "title": "Customer Service Manager",
                "company": "Walmart",
                "duration": "DEC 2023 — Present",
                "description": "Led operational coordination, workflow optimization, and cross-department collaboration while maintaining critical business records and reporting systems. Leveraged analytical problem-solving, process automation, and data management to improve efficiency and operational performance. Supported business growth through resource planning, stakeholder communication, and continuous process improvement."
            },
            {
                "title": "Data Operations Analyst",
                "company": "Gartner",
                "duration": "2021 — 2022",
                "description": "Researched, designed and developed different automated scripts to prune and parse necessary data from the web and made data visualization to get a better grasp of data. Leveraged technical skills in utilizing X-Path, JavaScript (Js), Python, and C# for effective and accurate data extraction from various sources. Utilized Tortoise Git for efficient version control and collaborative code management and Grafana to monitor and analyze the data extraction process."
            }
        ];

        timelineContainer.innerHTML = ''; 

        experiences.forEach((exp) => {
            const li = document.createElement('li');
            li.className = 'mb-12 p-4 card-item -m-4';
            
            // Extract keywords/skills to make tags if possible, or just use some defaults
            const keywords = ['workflow optimization', 'process improvement', 'Swift', 'Python', 'SQL', 'JavaScript', 'Java', 'Dart', 'C++', 'iOS', 'Web', 'React', 'Node.js', 'Core Animation', 'Chart', 'UI/UX', 'Metasploit', 'Vail', 'X-Path', 'C#'];
            const tags = keywords.filter(k => exp.description.includes(k) || exp.title.includes(k));
            
            let tagsHtml = '';
            if(tags.length > 0) {
                tagsHtml = `<ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                    ${tags.map(tag => `<li class="mr-1.5 mt-2"><div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">${tag}</div></li>`).join('')}
                </ul>`;
            }

            li.innerHTML = `
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="${exp.duration}">${exp.duration}</header>
                    <div class="z-10 sm:col-span-6">
                        <h3 class="font-medium leading-snug text-slate-200">
                            <div>
                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base card-title" href="https://www.linkedin.com/in/anu-benoy/" target="_blank" rel="noreferrer" aria-label="${exp.title} at ${exp.company}">
                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>${exp.title} @ <span class="inline-block">${exp.company}<i class="fas fa-arrow-right ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none text-xs"></i></span></span>
                                </a>
                            </div>
                        </h3>
                        <p class="mt-2 text-sm leading-normal">${exp.description}</p>
                        ${tagsHtml}
                    </div>
                </div>
            `;
            timelineContainer.appendChild(li);
        });
    };

    // --- Render Education ---
    const educationContainer = document.getElementById('education-list');
    if(educationContainer) {
        const educations = [
            {
                title: 'Postgraduate diploma in Mobile Solutions Development',
                school: 'Conestoga College',
                duration: 'May 2022 - Aug 2023',
                description: 'Graduate with Distinction (GPA: 3.6/4.0) skilled in mobile app design, native/cross-platform development, and machine learning. Demonstrated innovation through real-time video data model predictions in iOS.',
                tags: ['Mobile App Design', 'Cross-Platform', 'Machine Learning', 'iOS']
            },
            {
                title: 'Masters Of Computer Application (MCA)',
                school: 'APJ Abdul Kalam Technological University',
                duration: 'Aug 2016 - Aug 2021',
                description: 'MCA graduate with Distinction excelling in cybersecurity research (Metasploit, Vail) and practical web/mobile development expertise.',
                tags: ['Cybersecurity', 'Metasploit', 'Web Development', 'Mobile Development']
            },
            {
                title: 'Advanced Python Programming Bootcamp',
                school: 'Amal Jyothi College of Engineering',
                duration: 'July 2020',
                description: 'Certifies ability to develop implement complex algorithms, and design high-performance applications with a deep understanding of Python\'s advanced features and capabilities.',
                tags: ['Python', 'Algorithms']
            },
            {
                title: 'Analyzing and Visualizing Data with Microsoft Power BI',
                school: 'Coursera',
                duration: 'Sep 2020',
                description: 'Demonstrating proficiency in harnessing the capabilities of Power BI to analyze datasets, create insightful visualizations, and derive actionable insights for informed decision-making.',
                tags: ['Power BI', 'Data Analysis', 'Data Visualization']
            }
        ];

        educations.forEach(edu => {
            const li = document.createElement('li');
            li.className = 'mb-12 p-4 card-item -m-4';
            
            li.innerHTML = `
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="${edu.duration}">${edu.duration}</header>
                    <div class="z-10 sm:col-span-6">
                        <h3 class="font-medium leading-snug text-slate-200">
                            <div>
                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base card-title" href="https://www.linkedin.com/in/anu-benoy/" target="_blank" rel="noreferrer" aria-label="${edu.title} at ${edu.school}">
                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>${edu.title} · <span class="inline-block">${edu.school}<i class="fas fa-arrow-right ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none text-xs"></i></span></span>
                                </a>
                            </div>
                        </h3>
                        <p class="mt-2 text-sm leading-normal">${edu.description}</p>
                        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                            ${edu.tags.map(tag => `<li class="mr-1.5 mt-2"><div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">${tag}</div></li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            educationContainer.appendChild(li);
        });
    }

    renderTimeline();
});

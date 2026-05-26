import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private sectionObserver?: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-fade'));

    if (!sections.length) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          this.sectionObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    sections.forEach((section) => this.sectionObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  portfolioData = {
    name: 'Raj Kushwaha',
    title: 'Software Engineer',
    roleTags: [
      {
        label: 'Angular',
        url: 'https://www.geeksforgeeks.org/angular-tutorial/'
      },
      {
        label: 'Node.js',
        url: 'https://www.geeksforgeeks.org/node-js/nodejs/'
      },
      {
        label: 'REST APIs',
        url: 'https://www.geeksforgeeks.org/rest-api-introduction/'
      }
    ],
    location: 'Bareilly, India',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Bareilly%2C%20India',
    phone: '+91-7983518424',
    email: 'rk2393810@gmail.com',
    profileImage: 'assets/media/raj-profile.webp',
    heroSummary: 'I build fast, maintainable web applications with Angular, Node.js, and thoughtful frontend architecture.',
    aboutSummary: 'I focus on building fast, maintainable, and user-friendly web applications. My recent work spans Angular frontend engineering, reusable component systems, API integration, and performance improvements for production products.',
    aboutDetails: [
      'At eSecForte, I work on production-grade product engineering for NxSAM V2, where I contribute to feature development, reusable UI building blocks, and smoother frontend performance.',
      'I enjoy turning complex workflows into interfaces that feel clear and dependable. That usually means structuring components well, keeping APIs predictable, and paying attention to responsiveness and usability.',
      'Alongside professional work, I have built academic and personal full-stack projects that strengthened my understanding of dashboards, inventory systems, relational data design, and workflow automation.'
    ],
    convocationImage: 'assets/media/convocation.jpeg',
    convocationBadge: 'Convocation 2025',
    convocationTitle: 'A milestone that reflects years of focused academic work.',
    convocationSummary: 'I wanted this moment to sit inside the portfolio as part of the story, not just as a gallery image. It marks the academic journey behind the projects, discipline, and recognition highlighted across the site.',
    linkedInUrl: 'https://www.linkedin.com/in/iamrajkushwaha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    githubUrl: 'https://github.com/',
    resumeUrl: 'assets/media/Raj-Kushwaha-SDE-1.pdf',
    highlights: [
      {
        value: '1.5+',
        label: 'Years of experience',
        url: '#experience'
      },
      {
        value: '3',
        label: 'Full-stack academic projects',
        url: '#projects'
      },
      {
        value: 'MCA Gold Medalist',
        label: 'Highest scorer in class',
        url: 'assets/media/Raj-Kushwaha-Resume-May26.pdf'
      }
    ],
    experience: [
      {
        company: 'eSecForte Technologies',
        companyUrl: 'https://www.esecforte.com/',
        role: 'Software Engineer',
        duration: 'Mar 2025 - Present',
        location: 'Gurgaon',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Gurgaon%2C%20India',
        points: [
          {
            text: 'Developed and enhanced NxSAM V2, a cloud security assessment platform used for vulnerability analysis.',
            url: 'https://www.esecforte.com/'
          },
          {
            text: 'Improved UI performance and usability by optimizing Angular components and reducing load time.',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            text: 'Built reusable and modular components to improve development efficiency across modules.',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            text: 'Collaborated with backend teams to integrate REST APIs and ensure seamless data flow.',
            url: 'https://www.geeksforgeeks.org/rest-api-introduction/'
          }
        ]
      }
    ],
    projects: [
      {
        name: 'Cake House',
        type: 'Frontend • Backend',
        frontendRepoUrl: 'https://github.com/iamrahulraj17/the-cake-house-frontend',
        backendRepoUrl: 'https://github.com/iamrahulraj17/the-cake-house-backend',
        stack: [
          {
            label: 'Angular',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            label: 'Node.js',
            url: 'https://www.geeksforgeeks.org/node-js/nodejs/'
          },
          {
            label: 'MySQL',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          }
        ],
        desc: 'A bakery management system that handles product catalog, orders, inventory, and streamlined admin workflows.',
        detail: 'This project was designed around practical day-to-day business needs, with a simple ordering flow, inventory visibility, and an admin-friendly structure for managing products and operations.',
        imagePath: 'assets/media/cake-house/project-cake-house.png',
        images: [
          'assets/media/cake-house/project-cake-house.png',
          'assets/media/cake-house/menu.png',
          'assets/media/cake-house/cart.png',
          'assets/media/cake-house/checkout.png',
          'assets/media/cake-house/profile.png',
          'assets/media/cake-house/track.png'
        ],
        highlights: [
          {
            text: 'Built a full-stack platform for product, order, and inventory management.',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            text: 'Designed REST APIs to support scalable order processing.',
            url: 'https://www.geeksforgeeks.org/rest-api-introduction/'
          },
          {
            text: 'Implemented role-based admin features with optimized CRUD workflows.',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          }
        ]
      },
      {
        name: 'Medical Shop Management System',
        type: 'Frontend • Backend',
        frontendRepoUrl: 'https://github.com/iamrahulraj17/medical-shop-frontend',
        backendRepoUrl: 'https://github.com/iamrahulraj17/medical-shop-backend',
        stack: [
          {
            label: 'Angular',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            label: 'Node.js',
            url: 'https://www.geeksforgeeks.org/node-js/nodejs/'
          },
          {
            label: 'MySQL',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          }
        ],
        desc: 'A pharmacy dashboard for medicine tracking, sales monitoring, billing, and stock visibility.',
        detail: 'The focus here was reliability and operational clarity: stock value, billing workflows, purchase tracking, and analytics that help a medical store manage inventory and revenue more efficiently.',
        imagePath: 'assets/media/medical-shop/project-medical-shop.png',
        images: [
          'assets/media/medical-shop/project-medical-shop.png',
          'assets/media/medical-shop/medicines.png',
          'assets/media/medical-shop/billing.png',
          'assets/media/medical-shop/stock.png',
          'assets/media/medical-shop/purchase.png'
        ],
        highlights: [
          {
            text: 'Developed medicine, billing, and stock tracking workflows.',
            url: 'https://www.geeksforgeeks.org/angular-tutorial/'
          },
          {
            text: 'Designed efficient data handling for larger inventory datasets.',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          },
          {
            text: 'Automated billing flows to reduce manual errors and improve speed.',
            url: 'https://www.geeksforgeeks.org/node-js/'
          }
        ]
      },
      {
        name: 'PrepBank',
        type: 'Live Project',
        liveUrl: 'https://snatsolution.com/las',
        stack: [
          {
            label: 'PHP',
            url: 'https://www.geeksforgeeks.org/php-tutorial/'
          },
          {
            label: 'MySQL',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          }
        ],
        desc: 'An interview preparation platform with categorized questions and quizzes for technical practice.',
        detail: 'PrepBank was built to make preparation more focused and approachable, combining categorized learning material with lightweight interaction patterns that keep the platform easy to navigate.',
        imagePath: 'assets/media/project-prepbank.png',
        images: [
          'assets/media/prepbank/project-prepbank.png',
          'assets/media/prepbank/menu.png',
          'assets/media/prepbank/signup.png',
          'assets/media/prepbank/resources.png',
          'assets/media/prepbank/quiz.png',
          'assets/media/prepbank/leaderboard.png'
        ],
        highlights: [
          {
            text: 'Built categorized interview preparation modules and quizzes.',
            url: 'https://www.geeksforgeeks.org/php-tutorial/'
          },
          {
            text: 'Designed a simple, learner-friendly UI for faster navigation.',
            url: 'https://www.geeksforgeeks.org/html-tutorial/'
          },
          {
            text: 'Improved engagement through focused practice-oriented flows.',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          }
        ]
      }
    ],
    skillGroups: [
      {
        name: 'Languages',
        items: [
          {
            label: 'JavaScript',
            url: 'https://www.geeksforgeeks.org/javascript-tutorial/'
          },
          {
            label: 'PHP',
            url: 'https://www.geeksforgeeks.org/php-tutorial/'
          },
          {
            label: 'Java',
            url: 'https://www.geeksforgeeks.org/java/'
          },
          {
            label: 'C',
            url: 'https://www.geeksforgeeks.org/c-programming-language/'
          },
          {
            label: 'HTML',
            url: 'https://www.geeksforgeeks.org/html-tutorial/'
          },
          {
            label: 'CSS',
            url: 'https://www.geeksforgeeks.org/css-tutorial/'
          }
        ]
      },
      {
        name: 'Frameworks / RDBMS',
        items: [
          {
            label: 'Angular 13',
            url: 'https://www.geeksforgeeks.org/angular-js/angular-13/'
          },
          {
            label: 'Angular 19',
            url: 'https://angular.love/angular-19-whats-new'
          },
          {
            label: 'Node.js',
            url: 'https://www.geeksforgeeks.org/node-js/nodejs/'
          },
          {
            label: 'CodeIgniter 3',
            url: 'https://www.tutorialspoint.com/codeigniter/index.htm'
          },
          {
            label: 'MySQL',
            url: 'https://www.geeksforgeeks.org/mysql-tutorial/'
          },
          {
            label: 'PostgreSQL',
            url: 'https://www.geeksforgeeks.org/postgresql-tutorial/'
          }
        ]
      },
      {
        name: 'Tools',
        items: [
          {
            label: 'RabbitMQ',
            url: 'https://www.geeksforgeeks.org/introduction-to-rabbitmq/'
          },
          {
            label: 'Git',
            url: 'https://www.geeksforgeeks.org/git-tutorial/'
          },
          {
            label: 'GitHub',
            url: 'https://education.github.com/git-cheat-sheet-education.pdf'
          },
          {
            label: 'GitLab',
            url: 'https://education.github.com/git-cheat-sheet-education.pdf'
          },
          {
            label: 'Postman',
            url: 'https://www.geeksforgeeks.org/postman-tutorial/'
          },
          {
            label: 'Zoho',
            url: 'https://www.zoho.com/crm/developer/docs/'
          }
        ]
      },
      {
        name: 'Concepts',
        items: [
          {
            label: 'REST APIs',
            url: 'https://www.geeksforgeeks.org/rest-api-introduction/'
          },
          {
            label: 'JWT Authentication',
            url: 'https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/'
          },
          {
            label: 'Validation',
            url: 'https://angular.dev/guide/forms/form-validation'
          },
          {
            label: 'OOP',
            url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/'
          },
          {
            label: 'DBMS',
            url: 'https://www.geeksforgeeks.org/dbms/'
          },
          {
            label: 'System Design Basics',
            url: 'https://www.geeksforgeeks.org/system-design-tutorial/'
          }
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Computer Application (MCA)',
        school: 'Shri Ram Murti Smarak CET, Bareilly',
        schoolUrl: 'https://srms.ac.in/cet/',
        duration: '2023 - 2025'
      },
      {
        degree: 'Bachelor of Computer Application (BCA)',
        school: 'Bareilly College, Bareilly',
        schoolUrl: 'https://bcb.ac.in/',
        duration: '2020 - 2023'
      },
      {
        degree: 'Schooling',
        school: 'Kendriya Vidyalaya NER, Izzatnagar, Bareilly',
        schoolUrl: 'https://nerizzatnagar.kvs.ac.in/',
        duration: '2007 - 2020'
      }
    ],
    achievements: [
      {
        text: 'Gold Medalist in MCA.',
        detail: 'Recognized for highest academic performance in the MCA program.',
        issuer: 'SRMS CET',
        imagePath: 'assets/media/gold-medilist.jpeg',
        url: 'assets/media/gold-medilist.jpeg'
      },
      {
        text: 'IBM Skill Build AI Certification.',
        detail: 'Completed AI certification under IBM Skill Build Program.',
        issuer: 'IBM',
        imagePath: 'assets/media/Completion Certificate _ SkillsBuild_page-0001.jpg',
        url: 'assets/media/Completion Certificate _ SkillsBuild.pdf'
      },
      {
        text: 'Selected for Earn While Learn Program for academic excellence.',
        detail: 'Recognition for strong academic performance. Certificate image will be added later.',
        issuer: 'SRMS CET',
        imagePath: 'assets/media/RAJ.png',
        url: 'assets/media/RAJ.png'
      },
      {
        text: 'Completed TCS Youth Employment Program.',
        detail: 'Certificate awarded for successful participation in the TCS Youth Employment Program.',
        issuer: 'TCS YEP',
        imagePath: 'assets/media/tcs-yep.jpeg',
        url: 'assets/media/tcs-yep.jpeg'
      },
      {
        text: 'Received academic scholarship for MCA first year.',
        detail: 'Scholarship recognition for strong academic performance in MCA year one.',
        issuer: 'SRMS CET',
        imagePath: 'assets/media/acedemic-scholarship.jpeg',
        url: 'assets/media/acedemic-scholarship.jpeg'
      },
      {
        text: 'Won second prize in a hackathon for Disease Management System.',
        detail: 'Secured second place for building a disease management system solution.',
        issuer: 'Hackathon Award',
        imagePath: 'assets/media/hackathon.jpeg',
        url: 'assets/media/hackathon.jpeg'
      }
    ]
  };

}

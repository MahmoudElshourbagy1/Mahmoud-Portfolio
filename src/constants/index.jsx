const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        title:
            "Built high-performance medical appointment system with booking, scheduling, admin dashboard, and SMS reminders. admin :123456",
        image: "/images/onboarding-img.webp",
        link: "https://mahmoud-carepulse.vercel.app/",
    },
    {
        id: 2,
        title: "Built full-featured clinic management system with responsive UI, real-time notifications, and optimized data \n" +
            "operations\n Admin Login: admin@clinic.com || Password: Admin@123",
        image: "/images/1q1.png",
        link: "https://clinicmanagementsystem.runasp.net/Account/Login?ReturnUrl=%2F",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML","JavaScript","TypeScript","Angular.js","React.js", "Next.js"],
    },
    {
        category: "Styling",
        items: ["CSS","TailwindCSS","Bootstrap","MaterialUI","Shadcn/UI","jQuery"],
    },
    {
        category: "Backend",
        items: ["C#","ASP.NETCore","MVC","WebAPIs","LINQ","EF","JWT","Clean Architecture","RepoPattern"],
    },
    {
        category: "Database",
        items: ["MySQL","Code-First","StoredProcedures"," Database Design","Normalization"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker","Postman","Swagger","N8N","Vercel"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/MahmoudElshourbagy1",
    },
    {
        id: 2,
        text: "Vercel",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://vercel.com/mahmoudshrifeelshourbagys-projects",
    },
    {
        id: 3,
        text: "Gmail",
        icon: "/icons/gmail.jpg",
        bg: "#ff866b",
        link: "https://mahmoudmera555@gmail.com",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/mahmoud-elshourbagy-976bb7267/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/m1.jpeg",
    },
    {
        id: 2,
        img: "/images/m2.jpeg",
    },
    {
        id: 3,
        img: "/images/m3.jpeg",
    },
    {
        id: 4,
        img: "/images/m4.jpeg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 5,
            name: "Shopping",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Shopping.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Shopping One Wine is a demo e-commerce web application that showcases a modern online shopping experience.",
                        "It features product listings, discounts and offers, user authentication, and a shopping cart that allows users to browse, add products, and review their selections before checkout.",
                        "The website is designed with a clean and user-friendly interface to simulate a complete and realistic online store experience.",
                    ],
                },
                {
                    id: 2,
                    name: "Shopping.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shopping-one-wine.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Shopping.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/shopping.png",
                },
                {
                    id: 5,
                    name: "shopping.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://shopping-one-wine.vercel.app/",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            id: 6,
            name: "mahmoud-carepulse",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "mahmoud-carepulse.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "CarePulse is a modern healthcare management web application designed to streamline patient registration and appointment booking.",
                        "It allows users to submit personal and medical information, schedule appointments with doctors, and track their requests through a clean and intuitive interface.",
                        "The platform focuses on usability, responsiveness, and a smooth digital healthcare experience.",
                        "Password Admin :123456"
                    ],
                },
                {
                    id: 2,
                    name: "mahmoud-carepulse.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://mahmoud-carepulse.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "mahmoud-carepulse.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/carepulse.png",
                },
                {
                    id: 5,
                    name: "mahmoud-carepulse.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://mahmoud-carepulse.vercel.app/    ",
                    position: "top-60 left-5",
                },
            ],
        },
        {
            id: 7,
            name: "Zentry",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Zentry.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Zentry is a responsive and modern web application designed to deliver high-quality content with a sleek user interface.",
                        "It features structured navigation, visually appealing layout, and interactive elements to enhance user engagement.",
                        "The site focuses on clarity, accessibility, and a smooth browsing experience across devices, making it suitable for showcasing content, portfolios, or digital services.",
                    ],
                },
                {
                    id: 2,
                    name: "Zentry.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://zentry-jade-rho.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Zentry.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/zentry.png",
                },
                {
                    id: 5,
                    name: "Zentry.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://zentry-jade-rho.vercel.app/",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            id: 8,
            name: "brainwave",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-45 left-85",
            windowPosition: "top-[45vh] left-20",
            children: [
                {
                    id: 1,
                    name: "brainwave.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "BrainWave is a modern and responsive web application designed with a clean and visually engaging user interface.",
                        "It focuses on smooth animations, interactive sections, and a well-structured layout to enhance user experience.",
                        "The project demonstrates strong front-end skills using modern web technologies and component-based architecture",
                        "It is optimized for performance and works seamlessly across different screen sizes and devices",
                    ],
                },
                {
                    id: 2,
                    name: "BrainWave.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://brainwave-azure-sigma.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "BrainWave.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/brainwave.png",
                },
                {
                    id: 5,
                    name: "BrainWave.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://brainwave-azure-sigma.vercel.app/",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            id: 9,
            name: "clinicmanagementsystem",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-80 left-80",
            windowPosition: "top-[80vh] left-20",
            children: [
                {
                    id: 1,
                    name: "clinicmanagementsystem.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Clinic Management System is a professional web application designed to manage daily operations in medical clinics and healthcare facilities",
                        "It provides a secure login interface for staff to access appointments, patient records, doctor information, and administrative data.",
                        "The system streamlines appointment scheduling, medical record organization, and electronic billing, replacing manual paperwork.",
                        "It enhances operational efficiency and delivers a simple, fast, and user-friendly experience for medical and administrative staff.",
                        "Admin Login: admin@clinic.com || Password: Admin@123",
                    ],
                },
                {
                    id: 2,
                    name: "clinicmanagementsystem.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://clinicmanagementsystem.runasp.net/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "clinicmanagementsystem.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/clinicmanagementsystem.png",
                },
                {
                    id: 5,
                    name: "clinicmanagementsystem.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://clinicmanagementsystem.runasp.net/",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            id: 10,
            name: "MealVerse",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-80 left-30",
            windowPosition: "top-[60vh] left-20",
            children: [
                {
                    id: 1,
                    name: "MealVerse.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "MealVerse is a web application built with ASP.NET Core Web API that helps users choose meals efficiently.",
                        "It features separate interfaces for admins, who manage menus, orders, and inventory, and customers, who browse the menu and receive AI-powered meal recommendations.",
                        "The system leverages AI to suggest dishes based on user preferences, making dining decisions faster and more personalized.",
                        "It enhances operational efficiency and delivers a simple, fast, and user-friendly experience for medical and administrative staff.",
                        "It demonstrates modern full-stack development, secure API design, and a responsive, user-friendly interface for both staff and diners.",
                    ],
                },
                {
                    id: 2,
                    name: "frontend-MealVerse.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Salma-Muhammed/Meal-Verse",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "Backend-MealVerse.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/3mosakr/MealVerse",
                    position: "top-40 right-30",
                },
                {
                    id: 4,
                    name: "MealVerse1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/MealVerse1.png",
                },
                {
                    id: 6,
                    name: "MealVerse2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 right-80",
                    imageUrl: "/images/MealVerse2.png",
                },
                {
                    id: 5,
                    name: "MealVerse.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/3mosakr/MealVerse",
                    position: "top-70 right-20",
                },
                {
                    id: 7,
                    name: "MealVerse3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 right-40",
                    imageUrl: "/images/MealVerse3.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/m1.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-15 right-30",
            imageUrl: "/images/m2.jpeg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/m3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/m1.jpeg",
            description: [
               "Full-Stack .NET Developer with experience in ASP.NET Core, MVC, Web API, Entity Framework Core, LINQ, \n" +
               "C#, SQL Server, Angular, React, Next.js, TypeScript, Tailwind, RESTful APIs, Clean Architecture, SOLID, OOP, \n" +
               "and Git. Experienced in building scalable, maintainable applications using modern best practices. Seeking a \n" +
               "junior role to apply technical skills and contribute to real-world software projects."
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
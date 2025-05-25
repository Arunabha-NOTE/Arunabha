import {ProjectModel} from "../models/projectModel";

const projectData: ProjectModel[] = [
    {
        id: 1,
        name: "Synthetic Data Generator",
        stack: "Angular, Typescript, Less CSS, FastAPI, Pandas, SQLite",
        description: "This is a web application where you can upload sample data and configure options to use a large language model (LLM) to generate synthetic data.",
        link: "https://github.com/Arunabha-NOTE/synthetic-data-gen-ui",
        platform: "Github"
    }, {
        id: 2,
        name: "Startup Weekend Jaipur 2024",
        stack: "React, TypeScript, Tailwind CSS, MongoDB, Express",
        description: "This is the official website for startup weekend jaipur 2024.",
        link: "https://github.com/pujan-modha/swj-24",
        platform: "Github"
    }, {
        id: 3,
        name: "To-Do Application",
        stack: "Spring Boot, MySQL, JSP, React, Tailwind CSS, JavaScript, Java",
        description: "This is a web application where you can add lists and custom to-dos for efficient work.",
        link: "https://github.com/Arunabha-NOTE/ToDo-App",
        platform: "Github"
    }, {
        id: 4,
        name: "IEEE CS MUJ Website",
        stack: "NextJs, TypeScript, Tailwind CSS",
        description: "This is the official website for IEEE CS MUJ. A student branch of IEEE Computer Society at Manipal University Jaipur.",
        link: "https://github.com/IEEECSMUJ/IEEECSMUJ",
        platform: "Github"
    }, {
        id: 5,
        name: "IC Hack 2.0 Website",
        stack: "React, Javascript, Tailwind CSS",
        description: "This is the official website for IC Hack 2.0. A annual hackathon conducted by the IEEE India Council.",
        link: "https://github.com/pujan-modha/ichack23",
        platform: "Github"
    }, {
        id: 6,
        name: "DoIC MUJ Website ",
        stack: "React, TypeScript, Prismic, Tailwind CSS",
        description: "This is the official website for DoIC MUJ.",
        link: "https://github.com/doicmanipal/website",
        platform: "Github"
    }, {
        id: 7,
        name: "CrowdSync ",
        stack: "React, Tailwind CSS, TypeScript, AppWrite, MariaDb, CircleCI, Docker",
        description: "This project is designed to empower users to report real-time conditions during disasters, such as flood levels, road\n" +
            "blockages, and other damages.",
        link: "https://gitlab.com/mangodb2/crowdsync",
        platform: "GitLab"
    }, {
        id: 8,
        name: "TedxMUJ Website",
        stack: "NextJs, TypeScript, Tailwind CSS",
        description: "This is the official website for TedxMUJ.",
        link: "https://github.com/anvit-dd/tedx-muj",
        platform: "Github"
    }, {
        id: 9,
        name: "Oneiros Muj 2024 website",
        stack: "Nextjs, TypeScript, Tailwind CSS",
        description: "This is the official website for Oneiros MUJ.",
        link: "https://ono-25-main.vercel.app/",
        platform: "website"
    }, {
        id: 10,
        name: "Checklist",
        stack: "Angular, Tailwind CSS, Spring Boot, TypeScript, Java, PostgreSQL (Supabase)",
        description: "A website to create and make use of Checklists for Flight simulation purposes.",
        link: "https://github.com/Arunabha-NOTE/checklist",
        platform: "Github"
    }
    , {
        id: 11,
        name: "Deepfake Detector",
        stack: "React, TypeScript, Tailwind CSS, FastAPI, Tensorflow, Python",
        description: "A website to submit a video to check if it is manipulated or not. It is making use of React and FastApi. The model used for classification is a Vision Transformer",
        link: "https://github.com/Arunabha-NOTE/deepfake-frontend",
        platform: "GitHub"
    }, {
        id: 12,
        name: "Diabetic Retinopathy Classification (Accepted yet to be published)",
        stack: "Tensorflow, Matplotlib, Pandas, Python",
        description: "A model to classify Diabetic Retinopathy using a Vision Transformer.",
        link: "",
        platform: "Paper"
    }, {
        id: 13,
        name: "Muj ERP",
        stack: "NextJs, Tailwind CSS, TurboRepo, TypeScript, Prisma, PostgreSQL (Supabase), AWS, Docker",
        description: "A web based ERP system for Manipal University Jaipur.",
        link: "",
        platform: "NA"
    },{
        id: 14,
        name: "Devsphere",
        stack: "Spring Boot, React, Terraform, CircleCI, Docker",
        description: "A platform for easy provisioning and deployment of configured virtual code spaces through our cli or ui in various providers like AWS, GCP, Azure, etc.",
        link: "https://gitlab.com/platinum-open-source/devsphere",
        platform: "Gitlab"
    }
]

export default projectData;

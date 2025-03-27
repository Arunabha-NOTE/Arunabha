import {ProjectModel} from "../models/projectModel";

const projectData: ProjectModel[] = [
  {
    id: 1,
    name: "Devsphere",
    description: "A platform for easy provisioning and deployment of configured virtual code spaces through our cli or ui in various providers like AWS, GCP, Azure, etc. It is built using multiple technologies such as Spring Boot, React, Terraform, CircleCI, Docker, etc.",
    link: "https://gitlab.com/devsphere1",
    platform: "Gitlab"
  },
  {
    id: 2,
    name: "Synthetic Data Generator",
    description: "This is a web application where you can upload sample data and configure options to use a large language model (LLM) to generate synthetic data.",
    link: "https://github.com/Arunabha-NOTE/synthetic-data-gen-ui",
    platform: "Github"
  }, {
    id: 3,
    name: "Startup Weekend Jaipur 2024",
    description: "This is the official website for startup weekend jaipur 2024. It is built using multiple technologies such as React, Vite, Tailwind, Mongodb, Express, etc.",
    link: "https://github.com/pujan-modha/swj-24",
    platform: "Github"
  }, {
    id: 4,
    name: "To-Do Application",
    description: "This is a web application where you can add lists and custom to-dos for efficient work manIt is built using multiple technologies such as Spring Boot, JSP, and React. ",
    link: "https://github.com/Arunabha-NOTE/ToDo-App",
    platform: "Github"
  }, {
    id: 5,
    name: "IEEE CS MUJ Website",
    description: "This is the official website for IEEE CS MUJ. A student branch of IEEE Computer Society at Manipal University Jaipur. It is built using technologies such as NextJs and Tailwind CSS.",
    link: "https://github.com/IEEECSMUJ/IEEECSMUJ",
    platform: "Github"
  }, {
    id: 6,
    name: "IC Hack 2.0 Website",
    description: "This is the official website for IC Hack 2.0. A annual hackathon conducted by the IEEE India Council. It is built using technologies such as React and Tailwind CSS.",
    link: "https://github.com/pujan-modha/ichack23",
    platform: "Github"
  },{
    id: 7,
    name: "DoIC MUJ Website ",
    description: "This is the official website for DoIC MUJ, It is built using technologies such as React, prismic and Tailwind CSS.",
    link: "https://github.com/doicmanipal/website",
    platform: "Github"
  },{
    id: 8,
    name: "CrowdSync ",
    description: "This project is designed to empower users to report real-time conditions during disasters, such as flood levels, road\n" +
      "blockages, and other damages. Tech Stack - React, Tailwind CSS, AppWrite, MariaDb, CircleCI, Docker, etc.",
    link: "https://gitlab.com/mangodb2/crowdsync",
    platform: "GitLab"
  },{
    id: 9,
    name: "TedxMUJ Website",
    description: "This is the official website for TedxMUJ. It is built using technologies such as Nextjs and Tailwind CSS.",
    link: "https://github.com/anvit-dd/tedx-muj",
    platform: "Github"
    },{
        id: 10,
        name: "Oneiros Muj 2024 website",
        description: "This is the official website for Oneiros MUJ. It is built using technologies such as React, prismic and Tailwind CSS.",
        link: "https://ono-25-main.vercel.app/",
        platform: "website"
    },{
        id: 11,
        name: "Checklist",
        description: "A website to create and make use of Checklists for Flight simulation purposes. It is built using Angular, Tailwind and Supabase.",
        link: "https://github.com/Arunabha-NOTE/checklist",
        platform: "Github"
    }
    ,{
        id: 11,
        name: "Deepfake Detector",
        description: "A website to submit a video to check if it is manipulated or not. It is making use of React and FastApi. The model used for classification is a Vision Transformer",
        link: "https://github.com/Arunabha-NOTE/deepfake-frontend",
        platform: "GitHub"
    }, {
    id: 12,
    name: "Diabetic Retinopathy Classification",
    description: "A model to classify Diabetic Retinopathy using a Vision Transformer.",
    link: "",
    platform: "Paper"
    }, {
        id: 13,
        name: "Muj ERP",
        description: "Multiple portals for ERP for MUJ. We are making use of Tools and Technologies NextJs, Tailwind CSS, Supabase, Prisma, Express, AWS, Docker.",
        link: "",
        platform: "Paper"
    }
]

export default projectData;

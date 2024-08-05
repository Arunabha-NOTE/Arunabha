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
    description: "This is a web application where you can add lists and custom to-dos for efficient work manIt is built using multiple technologies such as Spring Boot, JSP, and React.agement. ",
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
  }
]

export default projectData;

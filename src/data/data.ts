import casemice from "./images/companies/casemice.jpeg";
import ecodation from "./images/companies/ecodation.png";
import orionInnovation from "./images/companies/orionInnovation.png";
import SakaryaUni from "./images/companies/sakaryaUni.png";
import MicroTeams from "./images/skills/MicroTeams.png";
import vscode from "./images/skills/vscode.png";
import react from "./images/skills/react.png";
import mongodb from "./images/skills/mongodb.png";
import nodejs from "./images/skills/nodejs.png";
import javascript from "./images/skills/javascript.png";
import typescript from "./images/skills/typescript.png";
import html5 from "./images/skills/html-5.png";
import css3 from "./images/skills/css3.png";
import python from "./images/skills/python.png";
import bootstrap from "./images/skills/bootstrap.png";
import postgres from "./images/skills/postgresql.png";
import redis from "./images/skills/redis.png";
import mysql from "./images/skills/mysql.png";
import heroku from "./images/skills/heroku.png";
import outlook from "./images/skills/outlook.png";
import aws from "./images/skills/aws.png";
import slack from "./images/skills/slack.png";
import termius from "./images/skills/termius.png";
import webstorm from "./images/skills/webstorm.png";
import phpstorm from "./images/skills/phpstorm.png";
import PyCharm from "./images/skills/PyCharm.png";
import Postman from "./images/skills/postman.png";
import docker from "./images/skills/Docker.png";

export const companies = [
    {
        title: "Orion Innovation",
        alt: "PS image",
        role: "Senior Software Engineer",
        skills: ["php", "angular", "typescript", "javascript", "react"],
        period: "December 2021 - Present",
        logo: orionInnovation
    },
    {
        title: "Sakarya University",
        alt: "Sakarya image",
        role: "Hardware Intern",
        skills: ["python", "cyber-security"],
        period: " May 2021 - May 2021",
        logo: SakaryaUni
    },
    {
        title: "Casemice Digital",
        alt: "Casemice image",
        role: "Junior Software Engineer",
        skills: ["Reactjs", "html", "css", "React Native",'heroku','nginx'],
        period: "March 2021 - December 2021",
        logo: casemice
    },
    {
        title: "Casemice Digital",
        alt: "Casemice image",
        role: "Software Intern",
        skills: ["Reactjs", "html", "css", "React Native"],
        period: "January 2021 - March 2021",
        logo: casemice
    },
    {
        title: "Ecodation Teknoloji ve Yazilim",
        alt: "Ecodation image",
        role: "Software Intern",
        skills: ["Ionic", "php",],
        period: "June 2020 - August 2020",
        logo: ecodation
    }
];

export const institutes = [
    {
        short_title: "Sau",
        title: "Sakarya University",
        alt: "Sakarya image",
        role: "Bachelor's Degree in Computer Engineering",
        skills: ["project management", "web development", "data structures"],
        period: "2017 - 2021",
        startingYear: "2017",
        logo: SakaryaUni,
    },
    {
        short_title: "EKMAL",
        title: "Emlak Konut MimarSinan Anadolu Lisesi",
        alt: "Ekmal image",
        role: "Student",
        skills: ["mathematic", "chemistry", "physics"],
        period: "2012 - 2016",
        startingYear: "2012",
        logo: ""
    }
];

export const skills = [
    {
        name: "React",
        description: "Web development",
        link: "https://reactjs.org/",
        type: "development",
        image: react
    },
    {
        name: "Nodejs",
        description: "Web development",
        link: "https://nodejs.org/en/",
        type: "development",
        image: nodejs
    },
    {
        name: "Python",
        description: "Web development, scrapping",
        link: "https://www.python.org/",
        type: "development",
        image: python
    },
    {
        name: "Javascript",
        description: "Web development",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type: "development",
        image: javascript
    },
    {
        name: "Typescript",
        description: "Web development",
        link: "https://www.typescriptlang.org/",
        type: "development",
        image: typescript
    },
    {
        name: "Html5",
        description: "Web layouts",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        type: "development",
        image: html5
    },
    {
        name: "Css3",
        description: "Web design",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        type: "design",
        image: css3
    },
    {
        name: "Bootstrap",
        description: "Web design",
        link: "https://getbootstrap.com/",
        type: "design",
        image: bootstrap
    },
    {
        name: "Postgres",
        description: "Database",
        link: "https://www.postgresql.org/",
        type: "Database",
        image: postgres
    },
    {
        name: "Mongodb",
        description: "Database",
        link: "https://www.mongodb.com/",
        type: "Database",
        image: mongodb
    },
    {
        name: "Mysql",
        description: "Database",
        link: "https://www.mysql.com/",
        type: "Database",
        image: mysql
    },
    {
        name: "Redis",
        description: "Database",
        link: "https://redis.io/",
        type: "Database",
        image: redis
    },
    {
        name: "Heroku",
        description: "Devops",
        link: "https://www.heroku.com/",
        type: "devops",
        image: heroku
    },
    {
        name: "AWS",
        description: "Devops",
        link: "https://aws.amazon.com/",
        type: "devops",
        image: aws
    },
    {
        name: "Docker",
        description: "Devops",
        link: "https://www.docker.com//",
        type: "devops",
        image: docker
    },
    {
        name: "Visual Studio Code",
        description: "Code editor of choice",
        link: "https://code.visualstudio.com/",
        type: "Development",
        image: vscode
    },
    {
        name: "PhpStorm",
        description: "Code editor of choice",
        link: "https://www.jetbrains.com/phpstorm/",
        type: "Development",
        image: phpstorm
    },
    {
        name: "WebStorm",
        description: "Code editor of choice",
        link: "https://www.jetbrains.com/webstorm/",
        type: "Development",
        image: webstorm
    },
    {
        name: "Pycharm",
        description: "Code editor of choice",
        link: "https://www.jetbrains.com/pycharm/",
        type: "Development",
        image: PyCharm
    },
    {
        name: "Termius",
        description: "Host Management",
        link: "https://termius.com/",
        type: "Development",
        image: termius
    },
    {
        name: "Postman",
        description: "API Platform",
        link: "https://www.postman.com/",
        type: "Development",
        image: Postman
    },
    {
        name: "Outlook",
        description: "Communication",
        link: "https://outlook.live.com/owa/",
        type: "Communication",
        image: outlook
    },
    {
        name: "Microsoft Teams",
        description: "Communication",
        link: "https://www.microsoft.com/en-ww/microsoft-teams",
        type: "Communication",
        image: MicroTeams
    },
    {
        name: "Slack",
        description: "Communication",
        link: "https://slack.com/",
        type: "Communication",
        image: slack
    },
];

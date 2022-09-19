import self from "../../../Images/self.jpg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Ahmet Kutay",
    lastName: "Karacair",
    initials: "js",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the TR'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Orion Innovation"
        },
        {
            emoji: "📧",
            text: "kutaykaracair@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/kutaykaracair",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ahmetkutay",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/ahmetkutay",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/kutaykaracair",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Ahmet Kutay. I'm a software engineer for Orion Innovation. I studied Computer Engineering at Sakarya University, I enjoy play chess and learn something new.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'nodejs'],
            exposedTo: ['flutter', 'python', 'php']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'chess',
            emoji: '♟️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'play video games',
            emoji: '🎮'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    /*portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]*/
}

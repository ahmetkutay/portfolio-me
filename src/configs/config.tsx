import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Ahmet Kutay Karacair. All Rights Reserved.`,
    author: {
        name: "Ahmet Kutay Karacair",
        accounts: [
            {
                url: "https://github.com/ahmetkutay",
                label: "Github Account",
                type: "gray",
                icon: <FaGithub />
            },
            {
                url: "https://twitter.com/kutaykaracair",
                label: "Twitter Account",
                type: "twitter",
                icon: <FaTwitter />
            },
            {
                url: "https://linkedin.com/in/ahmetkutay",
                label: "LinkedIn Account",
                type: "linkedin",
                icon: <FaLinkedin />
            },

        ]
    }
};

export default siteConfig;

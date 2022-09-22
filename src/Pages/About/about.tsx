import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "./InfoMe/info_me";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>{firstName} {info.lastName.toLowerCase()} $</span>
                <span className={Style.text}> cat about {firstName} </span> </p>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>about {firstName}
                <span className={Style.green}> (main)</span> $ </span>
                <span className={Style.text}>{info.bio}</span>
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>{firstName} {info.lastName.toLowerCase()} $</span>
                <span className={Style.text}> cd skills/tools </span>
            </p>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>skills/tools <span
                className={Style.green}>(main)</span> $</span>
                <span className={Style.text}> ls </span> </p>
            <p style={{color: info.baseColor, fontWeight:"bold"}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index} style={{
                    color: "#0C0C0C",
                    fontWeight: "bold"
                }}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor, fontWeight:"bold"}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index} style={{
                    color: "#0C0C0C",
                    fontWeight: "bold"
                }}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>{firstName} {info.lastName.toLowerCase()} $</span>
                <span className={Style.text}> cd hobbies/interests </span> </p>
            <p><span style={{color: info.baseColor, fontWeight:"bold"}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span>
                <span className={Style.text}> ls </span> </p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index} style={{
                        color: "#0C0C0C",
                        fontWeight: "bold"
                    }}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}

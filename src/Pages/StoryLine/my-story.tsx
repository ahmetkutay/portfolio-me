import * as React from "react";
import {
    Text,
    VStack,
    Heading,
    Box,
    Image,
    HStack,
    Divider,
} from "@chakra-ui/react";
import { StoryTimeline } from "./Components/myStoryLine";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import placeholder from "../../assets/images/placeholder.png";
import { companies, institutes } from "../../data/data";
import Header from "../../Components/header";
import Section from "../../Components/section";
import { PageSlideFade } from "../../Components/pate-transitions";
import { MotionArrow } from "../../Components/motion";

const MyStory = () => {

    return (
        <VStack>
            <Section mb={14}>
                <PageSlideFade>
                    <VStack>
                        <Header mt={0} mb={1} underlineColor={"null"}>
                            Developer Story
                        </Header>
                        <Text>
It is a chronological display of the companies I have worked for so far or the schools I have graduated from
</Text>
                    </VStack>
<MotionArrow />
                </PageSlideFade>
            </Section>
            <VStack textAlign="start" align="flex-start" mb={0}>
                <Box>
                    <StoryTimeline year={new Date().getFullYear().toString()} index={0} />
                    {companies.map((company, index) => (
                        <StoryTimeline
                            icon={BsFillBriefcaseFill}
                            index={index}
                        >
                            {" "}
                            <HStack>
                                <Image
                                    rounded="full"
                                    w={[6, 8]}
                                    h={[6, 8]}
                                    objectFit="cover"
                                    fallbackSrc={placeholder}
                                    src={company.logo}
                                    alt={company.alt}
                                />
                                <VStack align="start">
                                    <Heading
                                        fontSize={[12, 13, 15]}
                                        lineHeight="shorter"
                                        fontWeight="bold"
                                    >
                                        <Box>{company.title}</Box>
                                        <Box mt={1}>{company.period}</Box>
                                    </Heading>
                                </VStack>
                            </HStack>
                            <Divider my={2} />
                            <Text fontSize={[12, 13, 15]}>{company.role}</Text>
                        </StoryTimeline>
                    ))}
                    <StoryTimeline year={"2017"} index={0} />
                    {institutes.map((institute, index) => (
                        <>
                            <StoryTimeline
                                icon={FaGraduationCap}
                                index={index > 0 ? index + 1 : index}
                            >
                                {" "}
                                <HStack>
                                    <Image
                                        rounded="full"
                                        w={[6, 8]}
                                        h={[6, 8]}
                                        objectFit="cover"
                                        fallbackSrc={placeholder}
                                        src={institute.logo}
                                        alt={institute.alt}
                                    />
                                    <VStack align="start">
                                        <Heading
                                            fontSize={[12, 13, 15]}
                                            lineHeight="shorter"
                                            fontWeight="bold"
                                        >
                                            <Box>{institute.short_title}</Box>
                                            <Box mt={1}>{institute.period}</Box>
                                        </Heading>
                                    </VStack>
                                </HStack>
                                <Divider my={2} />
                                <Text fontSize={[12, 13, 15]}>{institute.role}</Text>
                            </StoryTimeline>
                            <StoryTimeline
                                year={institute.startingYear}
                                index={0}
                                skipTrail={index === institutes.length - 1 ? true : false}
                            />
                        </>
                    ))}
                </Box>
            </VStack>
        </VStack>
    );
};

export default MyStory;

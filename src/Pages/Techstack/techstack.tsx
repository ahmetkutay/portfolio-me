import * as React from "react";
import { useState } from "react";
import {
    Icon,
    VStack,
    HStack,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorModeValue,
    SimpleGrid
} from "@chakra-ui/react";
import { PageSlideFade } from "../../Components/pate-transitions";
import Section from "../../Components/section";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop, BiMessageAltDetail, BiCode } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import { FiDatabase } from "react-icons/fi";
import SkillCard from "../../Components/skill-card";
import { skills } from "../../data/data";
import Header from "../../Components/header";
import { MotionBox } from "../../Components/motion";
import { container } from "../../Components/pate-transitions";

const TechStack = () => {
    const [skillsList, setSkillsList]:any = useState([]);

    React.useEffect(() => {
        setSkillsList(skills);
    }, []);

    const filterSkills = (tab:any) => {
        if (tab.length) setSkillsList(skills.filter(skill => skill.type === tab));
        else setSkillsList(skills);
    };

    return (
        <PageSlideFade>
            <VStack spacing={8}>
                <Section>
                    <VStack>
                        <Header mt={0} mb={1} underlineColor={"null"}>
                            Tech Stack
                        </Header>
                        <Text
                            fontSize={"xl"}
                            color={useColorModeValue("gray.500", "gray.200")}
                            maxW="lg"
                            textAlign="center"
                        >
                            A list of my favorite tools and technologies that I use on a
                            regular basis.
                        </Text>
                    </VStack>
                </Section>
                <Section>
                    <Tabs
                        variant="soft-rounded"
                        colorScheme="blue"
                        align="center"
                        w="100%"
                    >
                        <TabList display="flex" flexWrap="wrap">
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "green.800",
                                    bg: "green.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={AiTwotoneThunderbolt} height="fill" />
                                    <Text>All</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.500", "gray.500")}
                                _selected={{
                                    color: useColorModeValue("gray.100", "gray.800"),
                                    bg: useColorModeValue("gray.900", "gray.100")
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("development")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={BiDesktop} height="fill" />
                                    <Text>Web Development</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "green.800",
                                    bg: "green.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("design")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={GiSpiderWeb} height="fill" />
                                    <Text>Web Design</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "red.800",
                                    bg: "red.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("devops")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={AiOutlineCloudServer} height="fill" />
                                    <Text>Devops</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "red.800",
                                    bg: "red.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("Database")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={FiDatabase} height="fill" />
                                    <Text>Database</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "red.800",
                                    bg: "red.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("Communication")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={BiMessageAltDetail} height="fill" />
                                    <Text>Communication</Text>
                                </HStack>
                            </Tab>
                            <Tab
                                bg={useColorModeValue("gray.100", "gray.800")}
                                color={useColorModeValue("gray.600", "gray.500")}
                                _selected={{
                                    color: "red.800",
                                    bg: "red.100"
                                }}
                                mr={2}
                                mt={2}
                                onClick={() => filterSkills("Development")}
                            >
                                <HStack spacing={1}>
                                    <Icon as={BiCode} height="fill" />
                                    <Text>Development</Text>
                                </HStack>
                            </Tab>
                        </TabList>
                        <TabPanels minHeight={"45vh"}>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                               // platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                            <TabPanel px={0}>
                                <MotionBox
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                                        {skillsList.map((tool:any, index:any) => (
                                            <SkillCard
                                                key={index}
                                                name={tool.name}
                                                description={tool.description}
                                                image={tool.image}
                                                //platform={"web"}
                                                link={tool.link}
                                            />
                                        ))}
                                    </SimpleGrid>
                                </MotionBox>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Section>
            </VStack>
        </PageSlideFade>
    );
};

export default TechStack;

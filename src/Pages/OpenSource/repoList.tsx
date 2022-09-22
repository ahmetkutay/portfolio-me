import * as React from "react";
import {
    VStack,
    Text,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { PageSlideFade } from "../../Components/pate-transitions";
import Header from "../../Components/header";
import LiveData from "./Components/live-data";

const TURQUOISE = "#06b6d4";

const RepositoriesList = () => {
    return (
        <PageSlideFade>
            <VStack align="start" spacing={3}>
                <HStack justifyContent={"space-between"} width={"100%"}>
                    <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                        Open Source
                    </Header>
                </HStack>
                <Text
                    color={useColorModeValue("gray.500", "gray.200")}
                    textAlign="left"
                >
                    This page lists some of the open source repositories I have published
                    or contributed to.
                </Text>
            </VStack>
            <LiveData />
        </PageSlideFade>
    );
};

export default RepositoriesList;

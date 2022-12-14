import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../style/theme";
import Layout from "../layout/layout";

export const App = () => (
    <ChakraProvider theme={theme} resetCSS={true}>
        <Layout />
    </ChakraProvider>
);





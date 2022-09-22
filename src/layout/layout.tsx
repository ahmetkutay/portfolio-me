import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import TopNav from "../Components/topNav";
import Footer from "../Components/footer";
import Navigation from "../Components/Navigation";

const Layout = () => {
    return (
        <Router>
            <TopNav />
            <Box
                textAlign="center"
                fontSize="xl"
                w={["90%", "85%", "80%"]}
                maxW={800}
                mx="auto"
            >
                <Box pt={10} pb={10}>
                    <Navigation/>
                </Box>
            </Box>
            <Footer />
        </Router>
    );
};

export default Layout;

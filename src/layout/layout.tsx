import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import TopNav from "../Components/topNav";
import About from '../Pages/About/about';
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
                    {/*<Navigation/>*/}
                </Box>
            </Box>
            <Footer />
        </Router>
    );
};

export default Layout;

/*function App() {
    return (
        <div className="App">
            <TopNav />
            <header className="App-header">
                <About />
            </header>
        </div>
    );
}

export default App;*/

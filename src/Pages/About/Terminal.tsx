import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";
import {Circle, useColorModeValue} from "@chakra-ui/react";

function Terminal(props:any) {
    const {text} = props;

    return (
        <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
             width={{xs: '100%', md: '100%'}} borderRadius={'0.5rem'} mb={'4rem'}>
            <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
                 fontSize={'1rem'} display={"flex"}>
                <Circle
                    size={5}
                    bg={useColorModeValue('red.400', 'red.400')}
                    sx={{marginRight: 1}}
                />
                <Circle
                    size={5}
                    bg={useColorModeValue('yellow.400', 'yellow.400')}
                    sx={{marginRight: 1}}
                />
                <Circle
                    size={5}
                    bg={useColorModeValue('green.400', 'green.400')}
                    sx={{}}
                />

            </Box>
            <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
                 sx={{backgroundColor: '#eee8d5'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
                {text}
            </Box>
        </Box>
    );
}

export default Terminal;

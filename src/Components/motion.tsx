import {
    Box,
    Flex,
    Image,
    forwardRef,
    keyframes,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import placeholder from "../assets/images/placeholder.png";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRef } from "react";

const animationKeyframes = keyframes`
  0% {
    transform:  translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 60px);
    opacity: 0;
  }
`;



const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Box ref={ref} {...chakraProps} />;
    })
);
export const MotionFlex = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Flex ref={ref} {...chakraProps} />;
    })
);

export const MotionImage = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return (
            <Image
                ref={ref}
                fallbackSrc={placeholder}
                {...chakraProps}
            />
        );
    })
);

export const MotionArrow = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <ChevronDownIcon 
                    animation={animation} 
                    boxSize={100} 
                    marginRight={5}
                    ref={ref}
                    {...chakraProps}
                />
    })
);

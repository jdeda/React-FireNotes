import { Text, Container, Center, Button, HStack, VStack, Heading } from "@chakra-ui/react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Center>
            <VStack>
                <Heading color="teal.400"> Oops! An error occured.</Heading>
                <Button
                    borderRadius={5}
                    variant="solid"
                    bg="teal.400"
                    colorScheme="teal"
                    width="full"
                    onClick={() => navigate("/login")}
                >
                    Go back to login page
                </Button>
            </VStack>
        </Center >
    )
};

export default ErrorPage;
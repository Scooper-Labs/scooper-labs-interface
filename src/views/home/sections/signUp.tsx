import { Box, Button, Input, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function FooterSignup() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle your email submission logic here, e.g., sending to an API
    console.log("Submitted email:", email);
    // Reset the email state if needed
    // setEmail("");
  };

  return (
    <Flex flexDir="column">
      <Text fontFamily="Adineue-pro" fontSize="18px" fontWeight="700">
        Subscribe to our Newsletter
      </Text>

      <form onSubmit={handleSubmit}>
        <Box position="relative" mt="10px">
          <Input
            type="email"
            isRequired
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            px="25px"
            w={["100%", "290px", "350px", "500px", "500px"]}
            height="72px"
            borderRadius="8px"
            bg="white"
            _placeholder={{ color: "secondaryGray.700", fontSize: "14px" }}
            placeholder="Yourmail@mail.com"
            _focus={{ outline: 0 }}
            color="secondaryGray.700"
            borderWidth={0}
          />
          <Button
            type="submit"
            w={["94px", "94px", "143px", "143px", "143px"]}
            height="56px"
            color="#FEFBFB"
            _hover={{ bg: "#002EE9" }}
            position="absolute"
            top="2"
            right="2"
            bg="#002EE9"
            borderRadius="8px"
            px="25px"
            fontWeight={400}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Flex>
  );
}

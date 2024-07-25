// src/pages/Home.js
import { Box, Text, Button, Heading, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.lg" textAlign="center" mt={10}>
      <Heading as="h1" size="2xl">Welcome!</Heading>
      <Text fontSize="xl" mt={4}>
        I’m <Text as="span" fontWeight="bold">Yadam Dheeraj Reddy</Text>, a <Text as="span" fontWeight="bold">Front-End Web Developer</Text> passionate
        about building seamless and responsive web experiences. Leveraging skills in HTML, CSS, JavaScript, and ReactJS. I aim to transform ideas into impactful digital realities.
      </Text>
      <Text fontSize="xl" mt={4}>
        Discover my work, journey, and the values I bring to every project.
      </Text>
      <Text fontSize="xl" mt={4}>
        Ready to innovate together?
      </Text>
      <Button mt={4}>Know More</Button>
    </Container>
  );
};

export default Home;

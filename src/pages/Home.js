// src/pages/Home.js
import { Text, Button, Heading, Container, Box, Link, Flex, Grid, GridItem } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const skills = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS", "NodeJS", "Flask", "Figma", "Python"
];

const Home = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" px={4}>
      <Container maxW="container.lg" textAlign={{ base: 'left', md: 'justify' }} mt={{ base: 10, md: 100 }} px={{ base: 4, md: 0 }} width={{ base: '100%', md: '800px' }}>
        <Heading as="h1" size={{ base: 'xl', md: '2xl' }} fontFamily="Nunito, sans-serif">Welcome!</Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} mt={4}>
          I’m <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">Yadam Dheeraj Reddy</Text>, a <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">Front-End Web Developer</Text> passionate
          about building seamless and responsive web experiences. Leveraging skills in HTML, CSS, JavaScript, and ReactJS. I aim to transform ideas into impactful digital realities.
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mt={4} fontWeight="bold">
          Discover my work, journey, and the values I bring to every project.
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} mt={4} fontWeight="bold">
          Ready to innovate together?
        </Text>
        <Button 
          mt={4} 
          bg="black" 
          color="white" 
          borderRadius="0" 
          height="42px"
          width="122px" 
          fontSize="md"
          fontWeight="0"
          _hover={{ bg: 'blue.500', transform: 'scale(1.1)' }}
          transition="all 0.2s ease-in-out"
        >
          Know More
        </Button>
        
        {/* About Section */}
        <Flex direction="column" align="center" mt={{ base: 10, md: 20 }} width="100%">
          <Box width={{ base: '100%', md: '600px' }}>
            <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
              About Me
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
              I'm <Text as="span" fontWeight="bold" color="blue.500">Yadam Dheeraj Reddy</Text>, a <Text as="span" fontWeight="bold" color="blue.500">Front-End Web Developer</Text> passionate about crafting responsive, <Text as="span" fontWeight="bold" color="blue.500">user-centric web experiences</Text>. Specializing in <Text as="span" fontWeight="bold" color="blue.500">HTML, CSS, JavaScript</Text>, and <Text as="span" fontWeight="bold" color="blue.500">ReactJS</Text>, I've developed a knack for turning complex ideas into seamless digital realities.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
              My experience extends from concept to completion, leading projects like a <Text as="span" fontWeight="bold" color="blue.500">personal portfolio website</Text>, a <Text as="span" fontWeight="bold" color="blue.500">temperature converter app</Text>, and a <Text as="span" fontWeight="bold" color="blue.500">login/signup interface</Text> for an online bookstore during my internship. These projects not only showcase my technical skills but also my creativity and problem-solving abilities.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
              As a lead member of <Text as="span" fontWeight="bold" color="blue.500">HACK SIST</Text>, the college computer club, I’ve fostered a tech community, promoting <Text as="span" fontWeight="bold" color="blue.500">computer science education</Text> and collaboration. This role highlighted my leadership qualities and my commitment to the tech community.
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} fontStyle="italic" color="gray.600">
              "Innovation distinguishes between a leader and a follower."
              <br />- <Link isExternal color="blue.500">Steve Jobs</Link>
            </Text>
            <Button 
              mt={4} 
              bg="black" 
              color="white" 
              borderRadius="0" 
              height="50px" 
              width="100%"
              fontSize="md"
              fontWeight="0"
              _hover={{ bg: 'blue.500', transform: 'scale(1.1)' }}
              transition="all 0.2s ease-in-out"
            >
              Resume
            </Button>
          </Box>
        </Flex>

        {/* Skills Section */}
        <Box mt={{ base: 10, md: 20 }} width="100%">
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
            Skills
          </Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6}>
            {skills.map((skill) => (
              <GridItem
                key={skill}
                bg="gray.100"
                p={4}
                borderRadius="md"
                textAlign="center"
                fontWeight="bold"
                color="black"
                _hover={{ bg: 'blue.500', color: 'white', animation: `${float} 2s infinite` }}
                transition="all 0.2s ease-in-out"
              >
                {skill}
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Flex>
  );
};

export default Home;

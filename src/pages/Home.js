// src/pages/Home.js
import { useState } from 'react';
import { Text, Button, Heading, Container, Box, Link, Flex, Grid, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPython, FaFigma } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const skills = [
  { name: "HTML", icon: FaHtml5, description: "Markup language for creating web pages" },
  { name: "CSS", icon: FaCss3Alt, description: "Stylesheet language for designing web pages" },
  { name: "JavaScript", icon: FaJs, description: "Programming language for web development" },
  { name: "Bootstrap", icon: FaBootstrap, description: "CSS framework for responsive design" },
  { name: "React", icon: FaReact, description: "JavaScript library for building user interfaces" },
  { name: "Node.js", icon: FaNodeJs, description: "JavaScript runtime for server-side development" },
  { name: "Flask", icon: SiFlask, description: "Micro web framework for Python" },
  { name: "Figma", icon: FaFigma, description: "Design tool for creating user interfaces" },
  { name: "Python", icon: FaPython, description: "Programming language for various applications" }
];

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    onOpen();
  };

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
          <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} justifyItems="center">
            {skills.map((skill, index) => (
              <Box
                key={skill.name}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="white"
                color="black"
                borderRadius="md"
                boxShadow="md"
                width="150px"
                height="150px"
                mx={2}
                textAlign="center"
                fontWeight="bold"
                transition="transform 0.2s, background-color 0.2s, color 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'lg', bg: 'blue.500', color: 'white' }}
                animation={`${fadeInUp} 0.6s ${index * 0.1}s forwards`}
                opacity="0"
                cursor="pointer"
                onClick={() => handleSkillClick(skill)}
              >
                <Icon as={skill.icon} boxSize="40px" mb={2} />
                <Text mt={2}>{skill.name}</Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Skill Modal */}
        {selectedSkill && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedSkill.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex direction="column" align="center">
                  <Icon as={selectedSkill.icon} boxSize="40px" mb={4} />
                  <Text>{selectedSkill.description}</Text>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </Flex>
  );
};

export default Home;

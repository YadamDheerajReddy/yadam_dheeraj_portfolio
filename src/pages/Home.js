// src/pages/Home.js
import { useState } from 'react';
import {
  Text,
  Button,
  Heading,
  Container,
  Box,
  Link,
  Flex,
  Grid,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Divider,
  useDisclosure
} from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPython, FaFigma, FaGraduationCap, FaSchool, FaCertificate } from 'react-icons/fa';
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

const projects = [
  {
    title: "Project One",
    description: "This is a description for project one.",
    technologies: ["React", "Node.js", "CSS"],
    link: "#",
    imageUrl: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
  },
  {
    title: "Project Two",
    description: "This is a description for project two.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    imageUrl: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
  },
  {
    title: "Project Three",
    description: "This is a description for project three.",
    technologies: ["Python", "Flask", "SQL"],
    link: "#",
    imageUrl: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
  },
  // Add more projects as needed
];

const education = {
  highSchool: [
    {
      institution: "High School B",
      degree: "High School Diploma",
      duration: "2013 - 2015",
      description: "Focus on science and mathematics, graduated with distinction.",
    },
    // Add more high school entries as needed
  ],
  university: [
    {
      institution: "University A",
      degree: "Bachelor of Science in Computer Science",
      duration: "2015 - 2019",
      description: "Graduated with honors, specialized in software development.",
    },
    // Add more university entries as needed
  ],
  certifications: [
    {
      institution: "Certification C",
      degree: "Certified Web Developer",
      duration: "2020",
      description: "Completed a comprehensive web development certification.",
    },
    // Add more certifications as needed
  ]
};

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    onOpen();
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" px={4} mt={{ base: 20, md: 40 }}>
      <Container maxW="container.lg" textAlign={{ base: 'left', md: 'justify' }} mt={{ base: 10, md: 100 }} px={{ base: 4, md: 0 }}>
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
        <Flex direction="column" align="center" width="100%" mt={{ base: 20, md: 40 }}>
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

        {/* Divider */}
        <Divider my={10} />

        {/* Skills Section */}
        <Box width="100%" mt={{ base: 10, md: 20 }}>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
            Skills
          </Heading>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6} justifyItems="center">
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
                width={{ base: '100px', md: '150px' }}
                height={{ base: '100px', md: '150px' }}
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
                <Icon as={skill.icon} boxSize={{ base: '30px', md: '40px' }} mb={2} />
                <Text mt={2} fontSize={{ base: 'sm', md: 'md' }}>{skill.name}</Text>
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

        {/* Divider */}
        <Divider my={10} />

        {/* Projects Section */}
        <Box width="100%" mt={{ base: 10, md: 20 }}>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
            Projects
          </Heading>
          <Accordion allowMultiple>
            {projects.map((project, index) => (
              <AccordionItem key={index} border="none" mb={4}>
                <AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }} _hover={{ bg: 'blue.400' }} borderRadius="md" boxShadow="md" transition="background-color 0.3s ease">
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {project.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} bg="gray.50" borderRadius="md" boxShadow="md">
                  <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
                    <Box flex="1" borderRadius="md" p={4} mb={{ base: 4, md: 0 }} mr={{ md: 4 }} overflow="hidden">
                      <Image src={project.imageUrl} alt={project.title} borderRadius="md" />
                    </Box>
                    <Box flex="2">
                      <Heading as="h3" size="md" mb={2}>{project.title}</Heading>
                      <Text mb={2}>{project.description}</Text>
                      <Text fontWeight="bold" mb={2}>Technologies Used:</Text>
                      <Flex wrap="wrap" mb={2}>
                        {project.technologies.map((tech, techIndex) => (
                          <Box key={techIndex} bg="gray.200" borderRadius="md" p={1} m={1}>
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" bg="blue.500" color="white" _hover={{ bg: 'blue.600' }}>
                        View Project
                      </Button>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {/* Divider */}
        <Divider my={10} />

        {/* Education Section */}
        <Box width="100%" mt={{ base: 10, md: 20 }}>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
            Education
          </Heading>
          <Tabs variant="enclosed" colorScheme="blue">
            <TabList>
              <Tab>
                <Icon as={FaSchool} mr={2} />
                High School
              </Tab>
              <Tab>
                <Icon as={FaGraduationCap} mr={2} />
                University
              </Tab>
              <Tab>
                <Icon as={FaCertificate} mr={2} />
                Certifications
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {education.highSchool.map((edu, index) => (
                  <Box key={index} bg="white" borderRadius="md" boxShadow="md" p={{ base: 4, md: 6 }} mb={6} borderLeft="4px solid blue.500">
                    <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>{edu.institution}</Heading>
                    <Text fontWeight="bold" mb={2}>{edu.degree}</Text>
                    <Text mb={2} color="gray.600">{edu.duration}</Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{edu.description}</Text>
                  </Box>
                ))}
              </TabPanel>
              <TabPanel>
                {education.university.map((edu, index) => (
                  <Box key={index} bg="white" borderRadius="md" boxShadow="md" p={{ base: 4, md: 6 }} mb={6} borderLeft="4px solid blue.500">
                    <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>{edu.institution}</Heading>
                    <Text fontWeight="bold" mb={2}>{edu.degree}</Text>
                    <Text mb={2} color="gray.600">{edu.duration}</Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{edu.description}</Text>
                  </Box>
                ))}
              </TabPanel>
              <TabPanel>
                {education.certifications.map((edu, index) => (
                  <Box key={index} bg="white" borderRadius="md" boxShadow="md" p={{ base: 4, md: 6 }} mb={6} borderLeft="4px solid blue.500">
                    <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>{edu.institution}</Heading>
                    <Text fontWeight="bold" mb={2}>{edu.degree}</Text>
                    <Text mb={2} color="gray.600">{edu.duration}</Text>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{edu.description}</Text>
                  </Box>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Flex>
  );
};

export default Home;

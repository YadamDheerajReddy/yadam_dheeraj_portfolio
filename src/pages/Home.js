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
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPython, FaFigma, FaGraduationCap, FaSchool, FaCertificate, FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import { keyframes } from '@emotion/react';
import Footer from '../components/Footer';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

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
  {
    name: "Next.js",
    icon: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.195 0.833C23.327 0.965 23.415 1.139 23.415 1.326V22.674C23.415 22.861 23.327 23.035 23.195 23.167C23.063 23.299 22.889 23.387 22.702 23.387H19.9C19.684 23.387 19.487 23.274 19.386 23.084L12.002 10.833L4.618 23.084C4.518 23.274 4.321 23.387 4.105 23.387H1.302C1.116 23.387 0.941 23.299 0.809 23.167C0.677 23.035 0.589 22.861 0.589 22.674V1.326C0.589 1.139 0.677 0.965 0.809 0.833C0.941 0.701 1.116 0.613 1.302 0.613H3.799C4.015 0.613 4.211 0.726 4.311 0.916L12.002 12.168L19.693 0.916C19.793 0.726 19.989 0.613 20.205 0.613H22.702C22.889 0.613 23.063 0.701 23.195 0.833ZM18.485 0.835L11.47 11.477L18.485 22.119H15.677L9.964 13.514L4.25 22.119H1.446L8.462 11.477L1.446 0.835H4.25L9.964 9.441L15.677 0.835H18.485Z"
          fill="black"
        />
      </svg>
    ),
    description: "React framework for building fast, server-rendered web applications",
  },
  { name: "Node.js", icon: FaNodeJs, description: "JavaScript runtime for server-side development" },
  { name: "Flask", icon: SiFlask, description: "Micro web framework for Python" },
  { name: "Figma", icon: FaFigma, description: "Design tool for creating user interfaces" },
  { name: "Python", icon: FaPython, description: "Programming language for various applications" },
];

const projects = [
  {
    title: "Dakshin - Authentic South Indian Cuisine Website",
    description: "I have designed the Dakshin website with the aim of creating a modern and user-friendly platform for an Indian restaurant that specializes in authentic South Indian cuisine. This state-of-the-art website integrates traditional cultural elements with a sleek contemporary type of design that makes it easy for users to navigate through whatever gadget they prefer.",
    technologies: ["React", "Charka UI", "Node.js"],
    link: "https://dakshin-ten.vercel.app/",
    imageUrl: project1, // Replace with actual image URL
  },
  {
    title: "NatureID - AI-Powered Plant Identification Website",
    description: "I developed NatureID, a cutting-edge web application designed to help users identify plants through AI-powered image recognition. The website combines modern design with advanced technology, offering users a seamless experience in discovering the world of plants.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js","Gemini API"],
    link: "https://natureid.vercel.app/",
    imageUrl: project2, // Replace with actual image URL
  },
  {
    title: "Eventura – Modern Event Booking Platform",
    description: "I developed Eventura, a sleek and modern event booking platform designed to connect users with events seamlessly. The website is crafted with attention to detail, ensuring a visually appealing and highly functional experience for both event organizers and attendees.",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    link: "https://evnetura-website.vercel.app/",
    imageUrl: project3, // Replace with actual image URL
  },
  {
    title: "Weblance - Web Services Provider Website",
    description: "Weblance is a web development agency that offers professional and creative web development services. The website is designed to be user-friendly, responsive, and SEO optimized, targeting potential clients looking for high-quality web development solutions. The design is clean and modern, with a focus on clear navigation and showcasing the company’s services, portfolio, and client testimonials.",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    link: "https://weblance-test.vercel.app/",
    imageUrl: project4, // Replace with actual image URL
  },
  {
    title: "Project-5",
    description: "Project Description",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    link: "#",
    imageUrl: project3, // Replace with actual image URL
  }
  // Add more projects as needed
];

const education = {
  highSchool: [
    {
      institution: "Bhashyam Blooms",
      location: "Hyderabad, Telangana, India",
      degree: "Secondary Education",
      duration: "Completed in 2019",
      description: "Focus on all the core subjects of basic education.",
    },
    {
      institution: "Sri Gayatri Junior College",
      location: "Hyderabad, Telangana, India",
      degree: "Intermediate Education",
      duration: "2019 - 2021",
      description: "Focus on Maths, Physics and Chemistry.",
    },
    // Add more high school entries as needed
  ],
  university: [
    {
      institution: "Sathyabama Institute of Science and Technology",
      location: "Chennai, Tamil Nadu, India",
      degree: "Bachelor of Engineering in Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning",
      duration: "2021 - 205",
      description: "Focus on Compter Science, Artificial Intelligence and Machine Learning.",
    },
    // Add more university entries as needed
  ],
  certifications: [
    {
      institution: "Coursera", 
      degree: "Introduction to Front-End Development (META)",
      duration: "2023",
      description: "Completed a comprehensive front-end web development certification by META on Coursera.",
    },
    {
      institution: "Coursera", 
      degree: "Programming with JavaScript (META)",
      duration: "2023",
      description: "Completed a comprehensive JavaScript programming certification by META on Coursera.",
    },
    {
      institution: "Coursera", 
      degree: "Making Appllications with REACT",
      duration: "2024",
      description: "Completed a comprehensive REACT web development certification on Coursera.",
    },
    {
      institution: "MATLAB", 
      degree: "App Building Onramp",
      duration: "2024",
      description: "Completed a comprehensive App development certification by MATLAB.",
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
    <Flex direction="column" align="center" justify="center" minH="100vh" px={4} mt={{ base: 20, md: 30 }}>
      <div id="home"></div>
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
        <Link href='https://linkedin.com' isExternal>
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
         </Link> 
        <Flex justify="left" margin="2px" mt={4}>
          <Link href="https://www.linkedin.com/in/ydheeraj/" isExternal mx={2}>
            <Icon as={FaLinkedin} boxSize="6" />
          </Link>
          <Link href="https://github.com/YadamDheerajReddy" isExternal mx={2}>
            <Icon as={FaGithub} boxSize="6" />
          </Link>
          <Link href="https://www.instagram.com/_.x.bittu.x._/" isExternal mx={2}>
            <Icon as={FaInstagram} boxSize="6" />
          </Link>
        </Flex>
      </Container>

      {/* About Section */}
      <span id="about"></span>
      <Flex  direction="column" align="center" width="100%" mt={{ base: 20, md: 80 }}>
        <Box width={{ base: '100%', md: '600px' }}>
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }} fontFamily="Nunito, sans-serif" mb={4} textAlign="center">
            About Me
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
            I'm <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">Yadam Dheeraj Reddy</Text>, a <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">Front-End Web Developer</Text> passionate about crafting responsive, <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">user-centric web experiences</Text>. Specializing in <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">HTML, CSS, JavaScript</Text>, and <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">ReactJS</Text>, I've developed a knack for turning complex ideas into seamless digital realities.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
            My experience extends from concept to completion, leading projects like a <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">personal portfolio website</Text>, a <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">temperature converter app</Text>, and a <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">login/signup interface</Text> for an online bookstore during my internship. These projects not only showcase my technical skills but also my creativity and problem-solving abilities.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textAlign="justify">
            As the president of <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">HACK SIST</Text>, the college computer club, I’ve fostered a tech community, promoting <Text as="span" fontWeight="bold" color="#0080FE" fontStyle="italic">computer science education</Text> and collaboration. This role highlighted my leadership qualities and my commitment to the tech community.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} fontStyle="italic" color="gray.600">
            "Innovation distinguishes between a leader and a follower."
            <br />- <Link isExternal fontWeight="bold" color="#0080FE" fontStyle="italic">Steve Jobs</Link>
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
            onClick={() => {
              window.open('/resume.pdf', '_blank');
            }}
          >
            Resume
          </Button>
        </Box>
      </Flex>

      {/* Divider */}
      <span id="skills"></span>
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
      <span id="projects"></span>
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
                    <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" bg="black" color="white" _hover={{ bg: 'blue.500', transform: 'scale(1.05)' }} borderRadius="0px">
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
      <span id="education"></span>
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
              <Icon as={FaCertificate} mr={2}/>
              Certifications
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {education.highSchool.map((edu, index) => (
                <Box key={index} bg="white" borderRadius="md" boxShadow="md" p={{ base: 4, md: 6 }} mb={6} borderLeft="4px solid blue.500">
                  <Heading as="h3" size={{ base: 'sm', md: 'md' }} mb={2}>{edu.institution}</Heading>
                  <Text fontStyle="italic" mb={2}>{edu.location}</Text>
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
                  <Text fontStyle="italic" mb={2}>{edu.location}</Text>
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

      {/* Include the Footer */}
      <Footer />
    </Flex>
  );  
};

export default Home;

import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Heading,
  Spacer,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
  Text,
  Icon,
  useToast
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from 'emailjs-com';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const btnRef = useRef();
  const formRef = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fm8gzuc', 'template_hte9ahi', formRef.current, 'RN8vqjJo08r80Z8eK')
      .then((result) => {
        toast({
          title: 'Message Sent',
          description: "Your message has been sent successfully!",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        formRef.current.reset();
        onModalClose();
      }, (error) => {
        toast({
          title: 'Error',
          description: "An error occurred while sending your message. Please try again later.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding="1.5rem" bg="white" borderBottom="2px solid black" position="sticky" top="0" zIndex="1000">
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Dheeraj
        </Heading>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center" flex="1" justifyContent="center">
          <ScrollLink to="home" smooth={true} duration={500}>
            <Link px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">
              Home
            </Link>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Link px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">
              About
            </Link>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>
            <Link px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">
              Skills
            </Link>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Link px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">
              Projects
            </Link>
          </ScrollLink>
          <ScrollLink to="education" smooth={true} duration={500}>
            <Link px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">
              Education
            </Link>
          </ScrollLink>
        </Box>
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Button 
          ml={4} 
          bg="black" 
          color="white" 
          borderRadius="0" 
          height="50px" 
          fontSize="md"
          fontWeight="0"
          _hover={{ bg: 'blue.500', transform: 'scale(1.1)' }}
          transition="all 0.2s ease-in-out"
          display={{ base: 'none', md: 'block' }}
          onClick={onModalOpen}
        >
          Contact Me
        </Button>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          ref={btnRef}
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dheeraj</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="center">
              <ScrollLink to="home" smooth={true} duration={500} onClick={onClose}>
                <Link py={2} _hover={{color: 'blue.500' }} transition="all 0.2s ease-in-out" textAlign="center">
                  Home
                </Link>
              </ScrollLink>
              <Divider />
              <ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>
                <Link py={2} _hover={{ color: 'blue.500' }} transition="all 0.2s ease-in-out" textAlign="center"> 
                  About
                </Link>
              </ScrollLink>
              <Divider />
              <ScrollLink to="skills" smooth={true} duration={500} onClick={onClose}>
                <Link py={2} _hover={{ color: 'blue.500'}} transition="all 0.2s ease-in-out" textAlign="center">
                  Skills
                </Link>
              </ScrollLink>
              <Divider />
              <ScrollLink to="projects" smooth={true} duration={500} onClick={onClose}>
                <Link py={2} _hover={{ color: 'blue.500'}} transition="all 0.2s ease-in-out" textAlign="center"> 
                  Projects
                </Link>
              </ScrollLink>
              <Divider />
              <ScrollLink to="education" smooth={true} duration={500} onClick={onClose}>
                <Link py={2} _hover={{ color: 'blue.500' }} transition="all 0.2s ease-in-out" textAlign="center">
                  Education
                </Link>
              </ScrollLink>
              <Divider />
              <Button 
                mt={4} 
                bg="black" 
                color="white" 
                borderRadius="0" 
                height="50px" 
                fontSize="md"
                fontWeight="0"
                _hover={{ bg: 'blue.500', transform: 'scale(1.1)' }}
                transition="all 0.2s ease-in-out"
                onClick={onModalOpen}
                width="100%"
              >
                Contact Me
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Contact Me Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent maxW={{ base: '90%', md: '500px' }}>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form" ref={formRef} onSubmit={sendEmail}>
              <Input name="user_name" placeholder="Your Name" mb={3} borderRadius="0px" />
              <Input name="user_email" type="email" placeholder="Your Email" mb={3} borderRadius="0px" />
              <Textarea name="message" placeholder="Your Message" mb={3} borderRadius="0px" />
              <Button type="submit" bg="black" color="white" _hover={{ bg: 'blue.500', transform: 'scale(1.05)' }} width="100%" borderRadius="0px">
                Send Message
              </Button>
            </Box>
            <Box mt={6} textAlign="center">
              <Text fontWeight="bold" mb={2}>Follow Me</Text>
              <Flex justify="center" spacing={4}>
                <Link href="https://facebook.com" isExternal mx={2}>
                  <Icon as={FaFacebook} boxSize="6" />
                </Link>
                <Link href="https://twitter.com" isExternal mx={2}>
                  <Icon as={FaTwitter} boxSize="6" />
                </Link>
                <Link href="https://linkedin.com" isExternal mx={2}>
                  <Icon as={FaLinkedin} boxSize="6" />
                </Link>
                <Link href="https://github.com" isExternal mx={2}>
                  <Icon as={FaGithub} boxSize="6" />
                </Link>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;

// src/components/Navbar.js
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
  ModalFooter,
  Input,
  Textarea,
  Text,
  Icon  
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding="1.5rem" bg="white" borderBottom="2px solid black">
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Dheeraj
        </Heading>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center" flex="1" justifyContent="center">
          <Link href="#home" px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">Home</Link>
          <Link href="#about" px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">About</Link>
          <Link href="#skills" px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">Skills</Link>
          <Link href="#projects" px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">Projects</Link>
          <Link href="#education" px={4} fontSize="lg" _hover={{ color: 'blue.500', textDecoration: 'none', transform: 'scale(1.1)' }} transition="all 0.2s ease-in-out">Education</Link>
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
            <VStack spacing={4} align="stretch">
              <Link href="#home" py={2} onClick={onClose} _hover={{ bg: 'blue.100', borderRadius: '5px' }} transition="all 0.2s ease-in-out" textAlign="center">
                Home
              </Link>
              <Divider />
              <Link href="#about" py={2} onClick={onClose} _hover={{ bg: 'blue.100', borderRadius: '5px' }} transition="all 0.2s ease-in-out" textAlign="center"> 
                About
              </Link>
              <Divider />
              <Link href="#skills" py={2} onClick={onClose} _hover={{ bg: 'blue.100', borderRadius: '5px'}} transition="all 0.2s ease-in-out" textAlign="center">
                Skills
              </Link>
              <Divider />
              <Link href="#projects" py={2} onClick={onClose} _hover={{ bg: 'blue.100', borderRadius: '5px', bgopacity: '50%'}} transition="all 0.2s ease-in-out" textAlign="center"> 
                Projects
              </Link>
              <Divider />
              <Link href="#education" py={2} onClick={onClose} _hover={{ bg: 'blue.100', borderRadius: '5px' }} transition="all 0.2s ease-in-out" textAlign="center">
                Education
              </Link>
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
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form">
              <Input placeholder="Your Name" mb={3} />
              <Input type="email" placeholder="Your Email" mb={3} />
              <Textarea placeholder="Your Message" mb={3} />
              <Button type="submit" bg="blue.500" color="white" _hover={{ bg: 'blue.600' }} width="100%">
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

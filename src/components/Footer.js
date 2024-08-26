// src/components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text, Icon, Spacer } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="white" color="black" py={10} width="100%" borderTop="2px solid black" borderRight="2px solid black" borderLeft= "2px solid black">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" px={6}>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="lg" fontWeight="bold">Yadam Dheeraj Reddy</Text>
          <Text fontSize="sm">Front-End Web Developer</Text>
        </Box>
        <Spacer />
        <Box textAlign="center" my={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Contact</Text>
          <Text fontSize="sm">Email: dheerajr205@gmail.com</Text>
        </Box>
        <Spacer />
        <Flex justify="center">
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
      </Flex>
      <Text textAlign="center" mt={6} fontSize="sm">© 2024 Yadam Dheeraj Reddy. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;

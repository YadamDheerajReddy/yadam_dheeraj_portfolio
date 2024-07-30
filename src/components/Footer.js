// src/components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text, Icon, Spacer } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" px={6}>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Text fontSize="lg" fontWeight="bold">Yadam Dheeraj Reddy</Text>
          <Text fontSize="sm">Front-End Web Developer</Text>
        </Box>
        <Spacer />
        <Box textAlign="center" my={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Contact</Text>
          <Text fontSize="sm">Email: dheeraj@example.com</Text>
        </Box>
        <Spacer />
        <Flex justify="center">
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
      </Flex>
      <Text textAlign="center" mt={6} fontSize="sm">© 2024 Yadam Dheeraj Reddy. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;

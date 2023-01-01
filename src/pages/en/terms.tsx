import { Box, Heading, Link, Text, useColorMode, Flex, useBreakpointValue } from "@chakra-ui/react";

const Terms = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const fontColor = { light: "black", dark: "white" };
  const fontSize = useBreakpointValue({ base: "sm", lg: "md" });
  const marginTop = useBreakpointValue({ base: "12", lg: "16" });
  return (
    <Box
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 6, lg: 12 }}
      bg={bgColor[colorMode]}
      color={fontColor[colorMode]}
    >
      <Flex align="center" justify={{ base: "center", lg: "space-between" }} mb={6}>
        <Heading as="h1" size="xl" fontWeight="bold">
          DodgeLoL
        </Heading>
      </Flex>
      <Heading as="h2" size="lg" mb={4} fontWeight="bold">
        TERMS OF SERVICE
      </Heading>
      <Text mb={4}>
        These terms of service ("Terms") govern your use of our website and services (the
        "Service"). By using the Service, you agree to be bound by these Terms. If you do not agree
        to these Terms, you may not use the Service.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold">
        1. Scope of Service
      </Heading>
      <Text mb={4}>
        The Service allows you to view statistical information about Riot Games Services Players.
        The Service is not endorsed by Riot Games and does not reflect the views or opinions of Riot
        Games or anyone importally involved in producing or managing Riot Games Services. Riot Games
        Services and Riot Games are trademarks or registered trademarks of Riot Games, Inc. © Riot
        Games, Inc.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        2. User Input
      </Heading>
      <Text mb={4}>
        By using the Service, you may be able to submit data or other content (collectively, "User
        Input"). You retain ownership of any intellectual property rights that you hold in the User
        Input. By providing User Input to the Service, you grant us a worldwide, perpetual,
        irrevocable, non-exclusive, transferable, royalty-free license to use, reproduce, modify,
        adapt, publish, translate, create derivative works from, distribute, and display the User
        Input in any media.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        3. Disclaimer of Warranties
      </Heading>
      <Text mb={4}>
        The Service is provided on an "as is" and "as available" basis. We make no representations
        or warranties of any kind, express or implied, as to the operation of the Service or the
        information, content, materials, or products included on the Service. You expressly agree
        that your use of the Service is at your sole risk. To the full extent permissible by
        applicable law, we disclaim all warranties, express or implied, including, but not limited
        to, implied warranties of merchantability and fitness for a particular purpose. We do not
        warrant that the Service, its servers, or email sent from us are free of viruses or other
        harmful components. We will not be liable for any damages of any kind arising from the use
        of the Service, including, but not limited to, direct, indirect, incidental, punitive, and
        consequential damages.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        4. Limitation of Liability
      </Heading>
      <Text mb={4}>
        We will not be liable for any damages of any kind arising from the use of the Service,
        including, but not limited to, direct, indirect, incidental, punitive, and consequential
        damages.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        5. Indemnification
      </Heading>
      <Text mb={4}>
        You agree to indemnify and hold us and our affiliates, officers, agents, and employees
        harmless from any claim or demand, including reasonable attorneys' fees, made by any third
        party due to or arising out of your use of the Service, your violation of these Terms, or
        your violation of any rights of another.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        6. Changes to These Terms
      </Heading>
      <Text mb={4}>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        If a revision is material, we will try to provide at least 30 days' notice prior to any new
        terms taking effect. What constitutes a material change will be determined at our sole
        discretion.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        7. Governing Law
      </Heading>
      <Text mb={4}>
        These Terms and your use of the Service shall be governed by and construed in accordance
        with the laws of the State of Minnesota, without giving effect to any principles of
        conflicts of law.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        8. Privacy Policy
      </Heading>
      <Text mb={4}>
        Our privacy policy, which sets out how we will use your information, can be found at{" "}
        <Link href="/en/privacy">dodgelol.gg/en/privacy</Link>. By using the Service, you consent to
        the collection, use, and sharing of your information as set out in our privacy policy.
      </Text>
      <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
        9. Contact Us
      </Heading>
      <Text mb={4}>
        If you have any questions about these Terms, please contact us at
        <Link href="mailto:info@sushilkattel.com"> info@sushilkattel.com</Link>.
      </Text>
    </Box>
  );
};

export default Terms;

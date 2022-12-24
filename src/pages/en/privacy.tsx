import {
    Box,
    Heading,
    Link,
    Text,
    useColorMode,
    Flex,
    useBreakpointValue,
  } from '@chakra-ui/react';
const Privacy = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'white', dark: 'gray.800' };
    const fontColor = { light: 'black', dark: 'white' };
    const fontSize = useBreakpointValue({ base: 'sm', lg: 'md' });
    const marginTop = useBreakpointValue({ base: '12', lg: '16' });
    return (
        <Box
        px={{ base: 4, md: 8, lg: 16 }}
        py={{ base: 6, lg: 12 }}
        bg={bgColor[colorMode]}
        color={fontColor[colorMode]}
      >
        <Flex
          align="center"
          justify={{ base: 'center', lg: 'space-between' }}
          mb={6}
        >
          <Heading as="h1" size="xl" fontWeight="bold">
            DodgeLoL
          </Heading>
        </Flex>
        <Heading as="h2" size="lg" mb={4} fontWeight="bold">
          PRIVACY POLICY
        </Heading>
        <Text mb={4}>
          This privacy policy ("Policy") describes how we collect, use, and share
          information about you when you use our website, mobile application, and
          other online products and services (collectively, the "Service").
          This Policy does not apply to third-party websites, products, or
          services, even if they link to our Service.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          1. Information We Collect
        </Heading>
        <Text mb={4}>
          We may collect information about you when you use the Service,
          including:
        </Text>
        <Text mb={4}>
          - Information you provide to us: We may collect information you
          provide to us directly, such as when you create an account or
          profile, participate in a survey, contest, or promotion, or
          communicate with us. This information may include your name, email
          address, phone number, and other contact information.
        </Text>
        <Text mb={4}>
          - Information we collect automatically: We may collect information
          about you automatically when you use the Service, such as your IP
          address, device type, operating system, browser type, language
          preference, referral website, and location. We may also collect
          information about your usage of the Service, such as the pages you visit, the features you use, the time and duration of your visit, and
          other usage data.
        </Text>
        <Text mb={4}>
          - Information we collect from third parties: We may receive
          information about you from third parties, such as social media
          platforms, partners, and service providers.
        </Text>
        <Text mb={4}>
          We may combine the information we collect from you with information
          we receive from third parties.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          2. How We Use Your Information
        </Heading>
        <Text mb={4}>
          We may use the information we collect from you to:
        </Text>
        <Text mb={4}>
          - Provide and improve the Service: We may use your information to
          provide and improve the Service, including to personalize your
          experience, to communicate with you, and to respond to your
          requests.
        </Text>
        <Text mb={4}>
          - Analyze and improve the Service: We may use your information to
          understand how you use the Service and to improve the Service.
        </Text>
        <Text mb={4}>
          - Communicate with you: We may use your information to send you
          updates, newsletters, marketing materials, and other communications.
          You may opt out of receiving these communications by following the
          unsubscribe instructions in the communication.
        </Text>
        <Text mb={4}>
          - Protect our rights and interests: We may use your information to
          protect the security and integrity of the Service and to enforce our
          terms and policies.
        </Text>
        <Text mb={4}>
          - Comply with legal obligations: We may use your information to
          comply with legal obligations, such as to respond to subpoenas or
          court orders.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          3. How We Share Your Information
        </Heading>
        <Text mb={4}>
          We may share your information with third parties in the following
          circumstances:
        </Text>
        <Text mb={4}>
          - Service providers: We may share your information with service
          providers who perform services on our behalf, such as hosting
          providers, analytics providers, and payment processors.
        </Text>
        <Text mb={4}>
          - Business partners: We may share your information with business
          partners for marketing or other purposes.
        </Text>
        <Text mb={4}>
          - Legal purposes: We may share your information with third parties
          if we believe in good faith that disclosure is necessary to comply
          with the law, to protect our rights or the rights of third parties,
          or to prevent harm.
        </Text>
        <Text mb={4}>
          We may also share aggregated or de-identified information, which
          cannot reasonably be used to identify you.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          4. Your Choices
        </Heading>
        <Text mb={4}>
          You may have the following choices regarding your information:
        </Text>
        <Text mb={4}>
          - Opting out of communications: You may opt out of receiving
          marketing communications from us by following the unsubscribe
          instructions in the communication.
        </Text>
        <Text mb={4}>
          - Accessing and correcting your information: You may access and
          update your account information by logging into your account and
          making the necessary changes. You may also contact us to request
          access to or correction of your personal information.
        </Text>
        <Text mb={4}>
          - Deleting your information: You may request that we delete your
          personal information by contacting us. Please note that we may
          retain certain information as required by law or for legitimate
          business purposes.
        </Text>
        <Text mb={4}>
          - Cookies: Most web browsers are set to accept cookies by default. If you prefer, you can usually set your browser to remove
          or reject cookies. Please note that if you choose to remove or reject
          cookies, this may affect the availability and functionality of the
          Service.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          5. Data Security
        </Heading>
        <Text mb={4}>
          We have implemented reasonable technical and organizational measures
          to protect your personal information from unauthorized access, use,
          or disclosure. However, no system is completely secure, and we cannot
          guarantee the security of your information.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          6. Changes to This Policy
        </Heading>
        <Text mb={4}>
          We may update this Policy from time to time. We will post any
          changes on this page and encourage you to review the Policy
          periodically. Your continued use of the Service after any changes
          to this Policy will constitute your acceptance of such changes.
        </Text>
        <Heading as="h3" size="md" mb={4} fontWeight="bold" mt={marginTop}>
          7. Contact Us
        </Heading>
        <Text mb={4}>
          If you have any questions about this Policy, please contact us at
          <Link href="mailto:info@sushilkattel.com"> info@sushilkattel.com</Link>.
        </Text>
      </Box>
    )}
    export default Privacy;
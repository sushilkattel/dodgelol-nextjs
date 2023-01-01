import { Flex, FlexProps, Text, Stack, StackProps, Divider } from "@chakra-ui/react";

export const Footer = (props: StackProps) => (
  <Stack {...props}>
    <footer>
      <Text fontFamily={"Bebas Neue"} fontSize={24} color={"white"}>
        © 2022 DodgeLoL
      </Text>
      <Text fontFamily={"Bebas Neue"} fontSize={[10, 16]} color={"white"}>
        DodgeLoL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot
        Games or anyone officially involved in producing or managing League of Legends. League of
        Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.‍
      </Text>
    </footer>
  </Stack>
);

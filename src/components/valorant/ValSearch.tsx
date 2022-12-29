import { Input, InputProps, Stack } from "@chakra-ui/react";

export const ValSearch = (props: InputProps) => (
    <Stack width={'max-content'} height={'max-content'} bgColor={'white'}>
    <Input
      placeholder="ENTER YOUR PLAYER NAME HERE"
      //size={'lg'}
      variant={'filled'}
      width={["60vw", "40vw"]}
      _outline={'1px dotted black'}
      backgroundColor={"white"}
      outlineColor={'#808080'}
      //width={{base: '30vw', md: '40vw', sm: '50vw', xs: '60vw'}}
      height={["6vh", "8vh"]}
      //fontSize={"1.4vw"}
      fontFamily={'Bebas Neue'}
      fontSize={["sm", "md", "lg", "xl"]}
      color="#808080"
      rounded={'none'}
      _placeholder={{ color: "#808080" }}
      required
      {...props}
    />
    </Stack>
  );
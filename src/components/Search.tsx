import { Input, InputProps } from "@chakra-ui/react";

export const Search = (props: InputProps) => (
    <Input 
    placeholder="Summoner Name..." 
    //size={'lg'} 
    width={'30vw'}
    height={'5vh'}
    fontSize={'1.4vw'}
    rounded='lg'
    color='teal'
    _placeholder={{color: 'white'}}
    required
    {...props}

    />
)

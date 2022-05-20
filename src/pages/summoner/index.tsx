import { Text, Image, HStack } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import Link from 'next/link'

const index = () => {
    
        return (
            <Container height="100vh"> 
                <Text>Hello how tf did u end up here lmao go back to <Link href='/'><a>home</a></Link></Text>
            </Container>
        )
}

export default index
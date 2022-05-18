import {
  Text, Image, HStack
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Search } from '../components/Search'
import { ArrowBtn } from '../components/ArrowBtn'
import { useState } from 'react'
import Link from 'next/link'

const Index = () => {
  const [summonerName, setSummonerName] = useState("");
  const submitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(summonerName)
    window.location.href = `/summoner`;
  };

  return (
    <Container height="100vh">
      <Main>
      <Image 
        src='https://drive.google.com/uc?id=1O_Np5sH4NMKtl0N7ldPnHdrzGxbm5W0K' 
        alt='logo'
        width={'20vw'}
        />
        <Hero />
        <form onSubmit={submitName}>
          <HStack style={divStyle}>
            <Search 
              onChange={(e) => setSummonerName(e.target.value)}
            />
            <ArrowBtn type='submit' />
          </HStack>
        </form>

      </Main>
      <Footer>
        <Text>© 2022 DodgeLoL</Text>
      </Footer>
    </Container>
  ) }

const divStyle = {
  paddingTop: '2vh',
}

export default Index

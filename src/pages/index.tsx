import React, { useState } from 'react'
import type { HeadFC } from 'gatsby'
import { Theme, ThemeProvider } from '@emotion/react'
import { getStoredTheme, getTheme, setStoredTheme } from '../utils/theme.utils'
import { GlobalStyle } from '../components/GlobalStyle'
import { NavBar } from '../components/NavBar'
import { Terminal } from '../components/Terminal'
import { txt } from '../const/info'
import { Quote } from '../components/Quote'
import { MainContainer } from '../components/MainContainer'
import { Header } from '../components/Header'
import { MyName } from '../components/MyName'
import { Main } from '../components/Main'

const IndexPage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme())

  const toggleTheme = (value: string) => {
    const selectedTheme = getTheme(value)
    setTheme(selectedTheme)
    setStoredTheme(selectedTheme.name)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <NavBar toggleTheme={toggleTheme} />
          <MyName>Elias Bobadilla</MyName>
          <Quote />
        </Header>
        <Terminal language="shell-session" text={txt} typeItOut={true} />
        <Main>AQUI VA EL CONTENIDO DE LA WEB</Main>
      </MainContainer>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

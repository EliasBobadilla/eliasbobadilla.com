import React, { useEffect, useState } from 'react'
import hljs from 'highlight.js'
import styled from '@emotion/styled'
import { faCode, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareJs,
  faPython,
  faReact,
  faNodeJs,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import 'highlight.js/styles/base16/railscasts.css'

const ShellSession = () => (
  <div className="css-1j656od-Pre e1tiyvjb0">
    <Code className="shell-session hljs language-nginx">
      <span className="hljs-attribute">saile</span>
      <span className="hljs-regexp"> ~ $</span> node <br />
      Welcome to Node.js v16.
    </Code>
  </div>
)
const Text = () => (
  <div className="css-1j656od-Pre e1tiyvjb0">
    <Code className="shell-session hljs language-nginx">
      <span>
        ➜ 😊 Hi! I'm Elías{' '}
        <a href="https://youtu.be/rVDNYdphfX8" target="_blank">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </a>{' '}
        a Software Developer with <b>7+ years of experience</b> developing resilience,
        maintainable and scalable Desktop and Web applications, focusing on user
        experience to deliver software that exceeds expectations.
        <br /> <br />
      </span>
      <span>My favorite technologies:</span>
      <ul>
        <li>
          <FontAwesomeIcon icon={faSquareJs} /> JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} /> C#
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} /> Python
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} /> React
        </li>
        <li>
          <FontAwesomeIcon icon={faNodeJs} /> NodeJS
        </li>
        <li>
          <FontAwesomeIcon icon={faWindows} /> .NET
        </li>
      </ul>
    </Code>
  </div>
)

const aboutMe = `const response = await fetch('https://javascriptheroes.com/api/v1/eliasbobadilla')
const { about } = await response.json();
console.log(about)`

export const Terminal = () => {
  const [code, setCode] = useState<string>('> ')
  const [showText, setShowText] = useState<boolean>(false)

  useEffect(() => {
    hljs.highlightAll()
  }, [code])

  useEffect(() => {
    const speed = 60
    let i = 0
    let txt = code

    function typeIt() {
      if (i < aboutMe.length) {
        txt += aboutMe.charAt(i)
        setCode(txt)
        i++
        setTimeout(typeIt, speed)
      } else {
        setTimeout(() => setShowText(true), speed)
      }
    }

    setTimeout(typeIt, 1800)
  }, [])

  return (
    <Container>
      <ShellSession />
      <Pre>
        <JavaScriptCode className="javascript">{code}</JavaScriptCode>
      </Pre>
      {showText && <Text />}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.code_background};
  min-height: 280px;
  animation: fadeUp 2s;
  box-shadow: 0px 12px 36.8px 9.2px rgba(0, 0, 0, 0.3);
  font-size: 0.8rem;
  @media (max-width: 750px) {
    width: 90%;
    min-height: 350px;
  }
`
const Pre = styled.pre`
  white-space: pre-line;
  background: none;
`

const Code = styled.code`
  padding: 0 !important;
  background: none;

  ul {
    padding-left: 0.8rem;
    line-height: 1.2rem;
    margin-top: 0.2rem;
  }
`

const JavaScriptCode = styled(Code)`
  margin-top: -0.6rem;
  overflow-x: hidden !important;
`

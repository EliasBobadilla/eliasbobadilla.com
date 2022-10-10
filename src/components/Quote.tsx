import React from 'react'
import styled from '@emotion/styled'
import { quotes } from '../const/info'

const Section = styled.section`
  width: 100%;
  font-style: oblique;
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.colors.secondary_text};
`

const Text = styled.p`
  text-align: center;
  margin: 0;
`

export const Quote = () => {
  const text = quotes[Math.floor(Math.random() * quotes.length)]
  return (
    <Section>
      <Text>
        "{text.quote}" - <b>{text.author}</b>
      </Text>
    </Section>
  )
}

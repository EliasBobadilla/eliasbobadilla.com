import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { NAVBAR_LINKS, ICONS } from '../../const/external-links'
import { Nav, Ul, Li, Button } from './styles'

interface Props {
  toggleTheme: (theme: string) => void
}

export const NavBar = ({ toggleTheme }: Props) => {
  const [visible, setVisible] = useState(false)
  const theme = useTheme()

  const handleToggleTheme = () => {
    if (theme.name === 'Dark') {
      toggleTheme('Light')
    } else {
      toggleTheme('Dark')
    }
  }

  const getMenuItems = () => {
    let menuItems = NAVBAR_LINKS.map((item) => (
      <a key={item.label} href={item.link} target="_blank">
        {ICONS[item.label.toLowerCase()]}
        <span>{item.label}</span>
      </a>
    ))

    menuItems.push(
      <button key={theme.name} onClick={handleToggleTheme}>
        {ICONS[theme.name.toLowerCase()]}
        <span>{theme.name}</span>
      </button>,
    )
    return menuItems
  }
  return (
    <Nav>
      <Button visible={visible} onClick={() => setVisible(!visible)}>
        <span />
      </Button>
      <Ul>
        {getMenuItems().map((item, index) => (
          <Li
            key={`
            ${item.key}-${index}
          `}
            visible={visible}
          >
            {item}
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faMoon, faSun, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

interface Links {
  label: string
  link: string
}

interface Icons {
  [key: string]: React.ReactNode
}

export const NAVBAR_LINKS: Links[] = [
  {
    label: 'Blog',
    link: 'https://blog.eliasbobadilla.com',
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/eliasbobadilla/',
  },
  {
    label: 'Github',
    link: 'https://github.com/EliasBobadilla',
  },
]

export const ICONS: Icons = {
  blog: <FontAwesomeIcon icon={faComment} size="1x" />,
  linkedin: <FontAwesomeIcon icon={faLinkedin} size="1x" />,
  github: <FontAwesomeIcon icon={faGithub} size="1x" />,
  dark: <FontAwesomeIcon icon={faMoon} size="1x" />,
  light: <FontAwesomeIcon icon={faSun} size="1x" />,
}

import styled from '@emotion/styled'

export const Nav = styled.nav`
  width: 100%;
  top: 0;
  display: flex;
  height: ${(props) => props.theme.sizes.nav_height};
  position: relative;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  text-align: right;
  list-style: none;
  position: absolute;
  margin: 0;
  gap: 2rem;
  right: 0;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    top: ${(props) => props.theme.sizes.nav_height};
    li:first-of-type {
      padding-top: 1rem;
    }
  }
`

export const Li = styled.li<{ visible: boolean }>`
  a,
  button {
    text-decoration: none;
    transition: all 0.3s ease-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 60px;
    :hover {
      color: ${(props) => props.theme.colors.accent};
      text-shadow: 0px 3px 2px ${(props) => props.theme.colors.shadow},
        0px 5px 10px ${(props) => props.theme.colors.shadow},
        0px 5px 10px ${(props) => props.theme.colors.shadow};
    }
  }

  @media (max-width: 600px) {
    display: none;
    ${(props) => props.visible && ` display: block; `}
  }
`
export const Button = styled.button<{ visible: boolean }>`
  display: none;
  border: none;
  background: transparent;
  width: 0;
  height: 0;
  right: 0;
  top: 13px;
  position: absolute;

  span,
  span:before,
  span:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 18px;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.primary_text};
    display: block;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  span:before {
    top: -6px;
  }

  span:after {
    bottom: -6px;
  }

  ${(props) =>
    props.visible &&
    `
          span {
            background-color: transparent;
          }

          span:before,
          span:after {
            top: 0;
          }

          span:before {
            transform: rotate(45deg);
          }

          span:after {
            transform: rotate(-45deg);
          }
        `}

  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
    display: block;
  }
`

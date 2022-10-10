import styled from '@emotion/styled'

const Button = styled.button<{ isExpanded: boolean }>`
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
    props.isExpanded &&
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

export const Hamburger = ({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean
  setIsExpanded: (value: boolean) => void
}) => {
  return (
    <Button isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
      <span />
    </Button>
  )
}

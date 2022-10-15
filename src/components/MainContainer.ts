import styled from '@emotion/styled'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: auto;
  width: 60%;
  height: 100vh;

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 92%;
  }
`

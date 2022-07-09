import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background: #80ff80;
  width: 100%;
  height: 60px;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

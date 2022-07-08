import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #008000;
  width: 100%;
  height: 150px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const A = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 10px;
`

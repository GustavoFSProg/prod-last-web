import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 55px;
  width: 95%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    display: flex;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  background: #b3ffb3;
  height: 400px;
  padding-bottom: 30px;
  padding-left: 30px;
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding-left: 10px;
    height: auto;
  }
`

import styled from 'styled-components'

export const Label = styled.span`
  margin-bottom: 7px;
  margin-top: 18px;
  font-size: 1rem;
  color: #009933;
  font-weight: 100px;
  align-items: flex-start;
  display: flex;
  margin-left: 11px;
`
export const Input = styled.input`
  width: 100%;
  background: #ffffcc;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #cccc00;
`
export const Button = styled.button`
  width: 100%;
  background: #80ffbf;
  height: 42px;
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid #00e673;
  color: #003333;
  transition: ease 0.6s;

  :hover {
    background: #009999;
    color: white;
  }
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 135px;
  width: 370px;

  @media screen and (max-width: 700px) {
    width: 99%;
  }
`

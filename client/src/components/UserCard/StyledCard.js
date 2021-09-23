import styled from 'styled-components';

export const ContentDiv = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color:#0a122a;
  border-radius: 1.5rem;;
  padding: 30px;
  margin: 20px;
`;

export const ButtonsDiv = styled.div`
display: flex;
flex-direction: column;
`

export const Button = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 3rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
  margin: 1rem;
  p {
    font-weight: bold;
    font-size: 1.2rem;
    color: #0a122aff;
    display: inline;
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    background-color: #f06449;
  }
`

export const ImgDiv = styled.div`
  img {
    width: 12rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.2rem solid #f06449ff;
    margin: 1rem;
  }
`;


export const ItemCard = styled.div`
  width: 100%;
  p {
    font-size: 1.2rem;
    color: white;
    padding: 0 1rem;
  }
  h4 {
    font-size: 1rem;
  }
  `

  export const TitleDiv = styled.div`
  display:flex;
  position: relative;
  text-transform: uppercase;
  color:white;
  margin:  1.5rem 1rem;
  align-self: baseline;
  h4 {
    font-size: 1.2rem;
    &:after {
      position: absolute;
      top: 110%;
      left: 0;
      width: 100%;
      height: 0.5rem;
      background-color: #f06449ff;
      content: " ";
    }
  }
`;

export const InfoContainer = styled.div`
`
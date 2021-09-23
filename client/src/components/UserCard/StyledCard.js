import styled from 'styled-components';

export const Button = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 3rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
  margin: 1rem;
  p {
    font-weight: bold;
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
    width: 13rem;
    height: 11rem;
    border-radius: 50%;
    border: 0.3rem solid #f06449ff;
  }
`;
export const ContentDiv = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ButtonsDiv = styled.div`
display: flex;
flex-direction: column;
`

export const ItemCard = styled.div`
  width: 100%;
  p {
    font-size: 1.2rem;
    background-color: #f06449ff;
    color: #0a122aff;
    padding: 0 1rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  `
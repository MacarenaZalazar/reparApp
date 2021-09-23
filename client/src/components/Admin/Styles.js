import styled from 'styled-components';

export const ContainerDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1.5rem;
    background-color:#0a122a;
    padding: 30px;
    margin: 20px;
    .littleContainer{
        display: flex;
        align-items:center;

        option {
            font-size: 1.2rem;
        }
        
  input {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};
    width: 25rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};
  }

  label {
    width: 10rem;
    text-align: end;
  }
  select {
    color: #e7decdff;
    background-color: #0a122aff;
    width: 25rem;
    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
  }

        
    }
`
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
`;

export const TitleDiv = styled.div`
  display:flex;
  
  position: relative;
  text-transform: uppercase;
  color:white;
  margin:  1.5rem 1rem;
  align-self: baseline;
  h4 {
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

export const UserDiv = styled.div`
`
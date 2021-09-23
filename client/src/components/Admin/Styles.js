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
        select {
            transition: 1s ease;
            opacity: 0;
            width: 100%;
            font-size: 1.2rem;
            color: #e7decdff;
            background-color: #0a122aff;
            padding: 0.3rem;
            margin: 1rem;
            outline: 0;
            border: 0;
            border-bottom: 1px solid #e7decdff;
        }
        option {
            font-size: 1.2rem;
        }
        input {
            color: #e7decdff;
            background-color: #0a122aff;
            padding: 0.3rem;
            text-align: center;
            font-family: "Montserrat", sans-serif;
            color: "#e7decdff";
            width: 25rem;
            outline: 0;
            border: 0;
            border-bottom: 1px solid #e7decdff;
            margin:0.3rem;
          }
        
    }
`
export const Button = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 3rem;
  transition: 0.5s ease;
  background-color: #e7decdff;
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
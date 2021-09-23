import styled  from 'styled-components';

export const StyledDashContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 50px;
height: 100%;
    .workContainer{
        margin: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .addJob{
            margin: 20px;
            display: flex; 
            align-items: center;
        }
    }
    .usersContainer{
        display:flex;
        align-items: flex-start;
        justify-content: space-around;
        
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
`
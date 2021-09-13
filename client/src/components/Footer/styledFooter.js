import styled from "styled-components";

export const StyledDiv = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  background-color: #de6b48;
  align-items: center;
  justify-content: space-around;
  .titlelogo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img{
      padding: 10px
    }
  }

  .link:hover{
    color:black;
    font-weight: bold;
  }
`;

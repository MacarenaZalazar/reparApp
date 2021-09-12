import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px;
  height: 150px;
  width: 600px;
  border-radius: 15px;
  box-shadow: rgba(181, 129, 108, 0.8) 0px 8px 34px -25px;
  background-color: white;
  button {
    transition: 0.6s ease;
    padding: 1rem 2rem;
    color: rgb(248, 248, 248);
    font-weight: bold;
    background-color: #ff8882;
    border: 1px solid #ffffff;
    border-radius: 1rem;

    :hover {
      background-color: #194350;
      cursor: pointer;
    }
  }
  span {
    font-size: 15px;
  }
  .infoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    .name {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ced4da;
      margin: 5px;
    }
    label {
      font-size: 15px;
    }
    .subtitle {
      display: flex;
      align-items: center;
      ul {
        padding: 5px;
      }
      p {
        padding: 5px;
      }
    }
  }

  ul {
    font-size: 15px;
    list-style: none;
  }
  img {
    margin: 10px;
    max-width: 100px;
    border-radius: 10px;
  }
`;

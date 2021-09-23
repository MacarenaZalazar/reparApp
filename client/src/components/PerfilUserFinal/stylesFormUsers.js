import styled from "styled-components";

export const StyledDiv = styled.div`
  /* box-shadow: rgba(181, 129, 108, 0.8) 0px 8px 34px -25px;
  border-radius: 15px;
  padding: 30px 50px;
  height: 100%;
  margin: 50px; */
  height: calc(100vh - 11.75rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    padding: 0.6rem;
    font-family: "Montserrat", sans-serif;
    color: rgb(248, 248, 248);
    background-color: #194350;
    cursor: pointer;
    border-radius: 1rem;
    transition: 0.5s ease;

    :hover {
      background-color: #ff8882;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  span {
    padding: 10px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Input = styled.div`
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#194350")};
    border-radius: 2rem;
    width: 20rem;
    border: 1px solid #194350;
    background-color: ${({ error }) => (error ? "#ff8882" : "")};
    outline: 0;
  }

  label {
    width: 10rem;
    text-align: end;
  }

  select {
    width: 20rem;
    padding: 0.3rem;
    border-radius: 2rem;
  }

  .flexZones {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &__ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.3rem;
      p {
        font-size: 0.8rem;
      }

      &--item {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.3rem;
      }

      .btn-zone {
        padding: 0.1rem 0.4rem;
        border-radius: 50%;
      }
    }
  }

  .flex__confirm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--span {
      align-self: flex-end;
    }
  }
`;
export const InputJobs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .gridJobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    padding: 0.3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

import styled from "styled-components";

export const StyledDiv = styled.div`
  /* background-color: #0a122a; */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    background-color: #e7decdff;
    border: none;
    font-family: "Montserrat", sans-serif;
    transition: 0.5s ease;

    p {
      font-weight: bold;
      color: #0a122aff;
    }

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #f06449;
    }
  }
`;

export const Form = styled.div`
  .title {
    position: relative;
    text-transform: uppercase;
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
  }

  color: #e7decdff;
  background-color: #0a122aff;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 5rem 1.3rem;
  span {
    padding: 10px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;
export const Input = styled.div`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  input {
    color: #e7decdff;
    background-color: #0a122aff;
    padding: 0.3rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: ${({ error }) => (error ? "rgb(248, 248, 248)" : "#e7decdff")};
    min-width: 15rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    border-bottom: ${({ error }) =>
      error ? " 1px solid #f06449ff" : "1px solid #e7decdff"};
    @media screen and (max-width: 768px) {
      max-width: 100%;
      min-width: 15rem;
    }
  }

  label {
    max-width: 7rem;
    text-align: end;
  }
  select {
    color: #e7decdff;
    background-color: #0a122aff;
    min-width: 15rem;
    padding: 0.3rem;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #e7decdff;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      min-width: 15rem;
    }
  }

  .flexZones {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .flexZonesNew {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

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

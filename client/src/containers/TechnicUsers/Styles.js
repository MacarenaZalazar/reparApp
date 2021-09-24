import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  .title {
    background-color: #f06449ff;
    border-radius: 1.5rem;
    p {
      text-align: center;
      padding: 0.5rem;
      font-weight: bold;
    }
  }

  .carousel {
    width: 100%;
    height: 100%;
    .rec.rec-arrow:disabled {
      visibility: hidden;
    }
    .rec.rec-arrow {
      background-color: #e7decd;
      color: #0a122a;
      :hover {
        background-color: #f06449;
      }
    }
    .rec.rec-dot {
      box-shadow: 1px 1px 1px 1px #0a122a;
      background-color: #e7decd;
    }
    .rec.rec-dot_active {
      background-color: #f06449;
    }
  }

  .notFound {
    text-align: center;
  }
`;

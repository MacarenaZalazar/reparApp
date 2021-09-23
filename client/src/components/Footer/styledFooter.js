import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: #0a122a;
  padding: 0.5rem;
  p {
    color: #f9f6f4;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .link {
    transition: 0.5s ease;
    :hover {
      transform: scale(1.1);
      color: #f06449;
      font-weight: bold;
    }
  }
`;
export const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #0a122a;
  padding: 1rem;
  p {
    color: #f9f6f4;
  }
`;

export const FooterDiv = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #dcca87 42%, #eee51e 100%);
  /*background: linear-gradient(to right, rgba(220, 202, 135,0.23));*/
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: var(--color-crimson);
  border-radius: 2rem;
  cursor: pointer;
`;
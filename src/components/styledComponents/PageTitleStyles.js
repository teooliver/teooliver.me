import styled from "styled-components";

const PageTitleStyles = styled.h3`
  box-sizing: border-box;
  background-color: ${props => props.theme.primary};
  color: #ffffff;
  font-weight: 200;
  font-size: 1.75rem;
  margin-bottom: 3rem;
  margin-top: 0;
  padding: 1.2rem 4rem;
  text-transform: uppercase;
`;

export default PageTitleStyles;

import styled from "styled-components";

const ThemeButtonStyles = styled.div`
  text-align: center;
  button:hover {
    background: ${props => props.theme.primary};
    color: white;
  }
`;

export default ThemeButtonStyles;

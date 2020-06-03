import styled from "styled-components";

const ThemeButtonStyles = styled.div`
  text-align: center;
  button {
    margin: 0.5rem 0.2rem;
    box-shadow: none;
    outline: none;
    border: 1px solid ${props => props.theme.themeButtonBorder};
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.themeButtonTextColor};
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    &:hover {
      background: #52bc92;
      color: #ffffff;
      /* padding: 2rem; */
    }
  }
`;

export default ThemeButtonStyles;

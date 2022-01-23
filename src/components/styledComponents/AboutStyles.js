import styled from "styled-components";

const AboutStyles = styled.div`
  color: ${props => props.theme.aboutTextColor};
  box-sizing: border-box;
  padding-left: 3rem;
  width: 95%;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    border-bottom: 1px solid lightgray;
  }

  ul {
    margin-bottom: 2rem;
  }

  blockquote {
    border-left: 5px solid ${props => props.theme.aboutTextColor};
    padding-left: 1.5rem;
    font-size: 1.7rem;
    margin-left: 0;
    margin-bottom: 2rem;
    font-weight: 400;
  }
  p,
  li {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-top: 0;
    margin-bottom: 1rem;
    /* list-style-type: none; */
    a {
      padding-left: 0.2rem;
    }
  }
`;

export default AboutStyles;

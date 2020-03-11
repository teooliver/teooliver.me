import styled from "styled-components";

const BodyContainer = styled.div`
  margin-left: 160px;
  /* padding: 0px 10px; */
  z-index: 1;
  /* background-color: #ffffff; */
  background-color: ${props => props.theme.primary};
  /* https://www.heropatterns.com/ */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23d8d8d8' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

  @media screen and (max-width: 900px) {
    margin-left: 0px;
    margin-top: 60px;
    /* margin-top: 64px; */
  }
`;

export default BodyContainer;

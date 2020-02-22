import styled from "styled-components";

const MaskStyles = styled.div`
  background-color: rgba(3, 3, 3, 0.5);
  /* Todo: transition on opacity */
  opacity: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9;
  display: ${props => (props.isOpen ? "block" : "none")};
`;

export default MaskStyles;

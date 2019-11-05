import styled from "styled-components"

const ContactCardStyles = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 30px;
  width: 540px;
  height: 300px;
  background: #fefefe;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
  transition: -webkit-clip-path 1s ease;

  .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: -webkit-clip-path 1s ease;
    padding: 100px 0 0;
    overflow: hidden;
    border-radius: 5px;
  }
`

export default ContactCardStyles

import styled from "styled-components"

const ContactCardStyles = styled.div`
  position: relative;
  margin: auto;
  width: 540px;
  height: 300px;
  background: #fefefe;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);

  .content {
    margin: 2rem;
    padding-top: 0.5rem;
    h1 {
      font-size: 3rem;
    }
  }

  .p-contact {
    color: black;
  }

  .p-contact a {
    margin-right: 1rem;
    display: inline-block;
    text-align: center;
    position: relative;
    color: rgb(70, 70, 70);
    vertical-align: middle;
  }

  .p-contact i {
    font-size: 2rem;
  }
`

export default ContactCardStyles

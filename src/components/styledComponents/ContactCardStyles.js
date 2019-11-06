import styled from "styled-components"

const ContactCardStyles = styled.div`
  /* todo: add background color or something */

  position: relative;
  margin: auto;
  width: 540px;
  height: 300px;
  background: #fefefe;
  background-image: linear-gradient(to right, #d2d7db, #bdc3c7);
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);

  .contact {
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
    z-index: 6;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 700;
    padding: 5px 15px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.1);
    line-height: 1;
    /* cursor: pointer; */
    text-shadow: 0 1px 0px rgba(255, 255, 255, 0.1);
  }

  .content {
    margin: 2rem;
    padding-top: 1rem;

    h1 {
      font-size: 3rem;
      margin-top: 3rem;
      margin-bottom: 0.5rem;
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

  @media screen and (max-width: 900px) {
    width: 270px;
    height: 150px;
    font-size: 0.75rem;
    .contact {
      display: none;
    }
    .content {
      margin: 2rem;
      padding-top: 0.2rem;

      h1 {
        display: none;
      }
    }
  }
`

export default ContactCardStyles

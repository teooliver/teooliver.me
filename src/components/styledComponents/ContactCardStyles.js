import styled from "styled-components"

const ContactCardStyles = styled.div`
  /* todo: add background color or something */

  position: relative;
  margin: auto;
  width: 540px;
  height: 300px;
  background: #fefefe;
  /* background-image: linear-gradient(to right, #d2d7db, #bdc3c7); */
  background-image: linear-gradient(to right, #f7f7f7, #e8edf2);
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);

  .contact {
    /* todo: change px to rem */
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
    z-index: 6;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.66rem;
    font-weight: 700;
    padding: 0.313rem 0.938rem;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.1);
    line-height: 1;
    text-shadow: 0 1px 0px rgba(255, 255, 255, 0.1);
  }

  .content {
    margin: 2rem;
    padding-top: 1rem;

    h1 {
      font-size: 3rem;
      margin-top: 2.8rem;
      margin-bottom: 0.5rem;
    }
  }

  .p-contact {
    color: rgb(70, 70, 70);
    margin-top: 0;
    margin-bottom: 0.8rem;
    a {
      text-decoration: none;
      display: inline-block;
      text-align: center;
      position: relative;
      color: rgb(70, 70, 70);
      &:hover {
        color: #4c8bad;
        transition: color 100ms ease-in-out;
        span {
          border-bottom: 1px solid #4c8bad;
          transition: 100ms ease-in-out;
        }
      }
      span {
        border-bottom: 1px solid transparent;
      }
    }

    i {
      font-size: 1.8rem;
      margin-right: 1rem;
      text-align: center;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 600px) {
    width: 270px;
    height: 150px;
    font-size: 1rem;
    .contact {
      display: none;
    }
    .content {
      margin: 2rem;
      padding-top: 10%;

      h1 {
        display: none;
      }
    }
  }
`

export default ContactCardStyles

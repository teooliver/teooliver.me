import styled from "styled-components"

const CardStyles = styled.section`
  position: relative;
  border-radius: 0.25rem;
  width: 24rem;
  display: flex;
  flex: 1 0 0%;
  flex-direction: column;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  word-wrap: wrap break-word;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .project-img {
    max-width: 100%;
    max-height: auto;
  }

  .card-title {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 1.68rem;
  }

  .card-body {
    padding: 0.1rem 0.9rem;
  }
  .card-text {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .btn {
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    font-weight: 400;
    display: block;
    width: 100%;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    text-align: center;
    line-height: 1.5;
    border: 1px solid transparent;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 0.25rem;
    text-decoration: none;
  }
`

export default CardStyles

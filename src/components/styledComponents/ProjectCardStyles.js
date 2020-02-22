import styled from "styled-components"

const ProjectCardStyles = styled.section`
  background-color: #f9f9f9;
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
  animation-name: pickup_effect_off;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    animation-name: pickup_effect_on;
  }

  hr {
    padding: 0;
    margin: 0;
    height: 2px;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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
    span {
      font-weight: bolder;
    }
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

  @keyframes pickup_effect_on {
    0% {
      transform: scale(1) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    }
    25% {
      transform: scale(1) rotateY(20deg) rotateX(5deg) rotateZ(1deg);
    }
    50% {
      transform: scale(1) rotateY(20deg) rotateX(5deg) rotateZ(2deg);
    }
    75% {
      transform: scale(1.03) rotateY(0deg) rotateX(2.5deg) rotateZ(1deg);
    }
    100% {
      transform: scale(1.03) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    }
  }

  @keyframes pickup_effect_off {
    0% {
      transform: scale(1.03) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    }
    25% {
      transform: scale(1.03) rotateY(0deg) rotateX(-2.5deg) rotateZ(-1deg);
    }
    50% {
      transform: scale(1) rotateY(20deg) rotateX(-5deg) rotateZ(2deg);
    }
    75% {
      transform: scale(1) rotateY(-20deg) rotateX(-5deg) rotateZ(1deg);
    }
    100% {
      transform: scale(1) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    }
  }
`

export default ProjectCardStyles

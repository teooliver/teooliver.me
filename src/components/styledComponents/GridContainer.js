import styled from "styled-components"
// grid container
const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 50px;
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .card-body {
    padding: 2px 16px;
  }
  .card-text {
    font-size: 1rem;
    line-height: 1.5;
  }
  .project-img {
    max-width: 500px;
    max-height: auto;
    margin-left: auto;
  }
  p {
    font-size: 1.68rem;
    font-weight: 300;
    line-height: 2.88rem;
  }
`

export default GridContainer
// Page Title

// navbar

// project card

// skills card

// section (with id for scroll spy) (maybe just a section without style)

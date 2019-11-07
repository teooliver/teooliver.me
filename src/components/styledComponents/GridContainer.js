import styled from "styled-components"

const GridContainer = styled.div`
  /* border: 10px solid yellow; */
  display: grid;
  grid-column-gap: 1.8rem;
  grid-template-columns: repeat(auto-fill, 24rem);
  justify-content: center;
  margin: 2rem;
`

export default GridContainer

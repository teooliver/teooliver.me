import styled from "styled-components";

const SkillsStyles = styled.div`
  .card {
    margin-bottom: 3rem;
    margin-left: 5%;
    background-color: white;
    position: relative;
    width: 90%;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    .card-header {
      font-size: 2rem;
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      background-color: rgba(0, 0, 0, 0.03);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .card-body {
      box-sizing: content-box;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      margin-top: 1rem;
      margin-bottom: 1rem;

      .text-center {
        text-align: center;
      }

      .badge-img {
        /* todo: change pixels to rem */
        max-height: 100px;
        max-width: 100px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
        display: block;
        word-break: none;
        text-align: center;
      }
    }
  }
`;

export default SkillsStyles;

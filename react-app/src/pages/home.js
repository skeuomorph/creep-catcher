import styled from "styled-components"

const PageHeader = styled.h2`
  font-weight: bold;
  margin: 2em auto;
  text-align: center;
`

export default function Home() {
    return (
      <div>
        <PageHeader>Home</PageHeader>
        <form>
          <input type='text'></input>
        </form>
      </div>
    );
  }
  
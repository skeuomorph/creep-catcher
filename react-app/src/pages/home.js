import styled from "styled-components";
import HomeButton from "./components/homeButton";

const Container = styled.div`
display: flex;
`
const FlexDiv= styled.div`
  border:red solid 2px;
  margin: 2em auto;
  padding: 4em 3em;
`

export default function Home() {
    return (
      <Container>
        <FlexDiv>
          <HomeButton to="/report" title="Report"></HomeButton>
          <HomeButton to="/incidents" title="My Incidents"></HomeButton>
          <HomeButton to="/support" title="Support"></HomeButton>
        </FlexDiv>
        <FlexDiv>Goodbye</FlexDiv>
      </Container>
    );
  }
  
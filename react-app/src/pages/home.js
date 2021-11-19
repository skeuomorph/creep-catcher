import styled from "styled-components";
import HomeButton from "./components/homeButton";

const Container = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-content:stretch;
`
const FlexDiv= styled.div`
  border:red solid 2px;
  flex:1;
`

export default function Home() {
    return (
      <Container>
        <FlexDiv>
          <HomeButton to="/report" title="Report"></HomeButton>
          <HomeButton to="/incidents" title="My Incidents"></HomeButton>
          <HomeButton to="/support" title="Support"></HomeButton>
        </FlexDiv>
        <FlexDiv>MAP GOES HERE</FlexDiv>
      </Container>
    );
  }
  
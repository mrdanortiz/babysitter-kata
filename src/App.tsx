import * as React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { NavBar } from "./Components/NavBar";

class App extends React.Component {
  render() {
    return (
      <Container data-testid="app">
        <NavBar />
        <Container textAlign="center" style={{ width: 320 }}>
          <p>HELLO</p>
        </Container>
      </Container>
    );
  }
}

export default App;

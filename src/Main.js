import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./components/navbar";
import Items from "./components/items.js";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <main className="container">
          <Items />
        </main>
      </Container>
    );
  }
}

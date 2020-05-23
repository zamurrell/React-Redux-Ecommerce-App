import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { getItems } from "../actions/actions";

class NavBar extends Component {
  componentWillMount() {
    this.props.dispatch(getItems());
  }

  render() {
    const totalItems = this.props.item.items.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Zach's Ziggurat{" "}
          <FontAwesomeIcon className="ml-5" icon={faShoppingCart} /> Cart
          <span className="badge badge-pill badge-secondary ml-2">
            {totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

function mapStatesToProps(state) {
  return {
    item: state.item,
  };
}

export default connect(mapStatesToProps)(NavBar);

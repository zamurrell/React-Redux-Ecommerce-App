import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./item";

import {
  createItem,
  getItems,
  deleteItem,
  updateIncrement,
  updateDecrement,
  handleReset,
} from "../actions/actions";

class Items extends Component {
  componentWillMount() {
    this.props.dispatch(getItems());
  }

  handleAdd(item) {
    this.props.dispatch(createItem(item));
  }

  handleReset() {
    this.props.dispatch(handleReset());
  }

  render() {
    return (
      <div>
        {/* <button
          onClick={() => this.handleReset()}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button> */}
        <button
          onClick={() => this.handleAdd(this)}
          className="btn btn-success btn-sm m-2"
        >
          Add Item
        </button>
        {this.props.item.items.map((item) => (
          <Item
            key={item.id}
            deleteItem={deleteItem}
            updateIncrement={updateIncrement}
            updateDecrement={updateDecrement}
            item={item}
          />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    item: state.item,
    counter: state.item.items,
  };
}
export default connect(mapStateToProps)(Items);

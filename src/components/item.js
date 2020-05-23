import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateIncrement,
  updateDecrement,
  getItems,
  deleteItem,
  setItemForDecrement,
  setItemForIncrement,
} from "../actions/actions";

function validate(values) {
  var errors = {};
  const { description } = values;
  if (!description || description.trim() === "") {
    errors.description = "Item Description is Required";
  }
  return errors;
}

class Item extends Component {
  Decrement(item) {
    this.props.dispatch(updateDecrement(item));
  }
  Increment(item) {
    this.props.dispatch(updateIncrement(item));
  }
  deleteItem(item) {
    this.props.dispatch(deleteItem(item));
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.Increment(this.props.item)}
          className="btn btn-dark btn-sm"
        >
          +1
        </button>
        <button
          onClick={() => this.Decrement(this.props.item)}
          className="btn btn-dark btn-sm m-2"
        >
          -1
        </button>
        <button
          onClick={() => this.deleteItem(this.props.item)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.item.value === 0 ? "badge-secondary" : "badge-info";
    return classes;
  }

  formatCount() {
    return this.props.item.value === 0 ? "None" : this.props.item.value;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => {
      dispatch({ updateIncrement });
    },
  };
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Item);

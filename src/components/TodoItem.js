import React, { Component } from "react";
import PropTypes from "prop-types";

// const itemStyles = {
//   backgroundColor: "#f4f4f4",
// };

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      color: "black",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : " none",
    };

    //OR
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }
  };

  // markComplete = (e) => {
  //   console.log(this.props)
  // }

  render() {

    const { id, title } = this.props.todo

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
          {/* this.props.todo.title is replaced by {title} using destructuring.Here {const {id,title} = this.props.todo} is done  */}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}

//Proptypes

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;

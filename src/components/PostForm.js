import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { createPosts } from "../actions/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = {
      title,
      body
    };
    //call action
    this.props.createPosts(post);
  };
  render() {
    return (
      <div>
        <h1>add post </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title :</label>
            <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Body :</label>
            <br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type='submit'> Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propType = {
  createPost: PropType.func.isRequired
};
export default connect(null, { createPosts })(PostForm);

import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <PostForm />
        <hr />
        <Post />
      </div>
    );
  }
}

export default App;

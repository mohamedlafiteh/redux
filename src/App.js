import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "./App.css";

const store = createStore(() => [], {}, applyMiddleware());
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='app'>
          <Navbar />
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;

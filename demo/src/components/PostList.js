import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <ul>
          {posts.length
            ? posts.map((post) => (
                <li key={post.id} className="post-list">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                </li>
              ))
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </ul>
      </div>
    );
  }
}

export default PostList;

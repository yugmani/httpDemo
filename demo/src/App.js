import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Posts</h1>
      </header>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;

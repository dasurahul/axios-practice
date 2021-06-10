import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <h1>Loading</h1>
      </Container>
    );
  }

  return (
    <div className="App">
      <h1 className="text-primary text-center mt-4 mb-4">Posts</h1>
      <Container>
        <ListGroup>
          {posts.map((post) => {
            return (
              <ListGroup.Item className="mt-2 mb-2" key={post.id}>
                {post.body}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
};

export default App;

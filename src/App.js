import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Article from "./components/Articles/Article";
import Blog from "./views/Blog/Blog";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <div id="wrapper">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog/article/:id">
            <Article />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

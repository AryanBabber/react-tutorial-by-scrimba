import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import image001 from "./logo512.png"
import image002 from "./img002.png"

const root = document.getElementById("root")

function Header() {
  return (
    <nav>
        <div className="nav--left">
          <img src={image001} alt='image001' className="image" />
          <h1 id="left--header">ReactFacts</h1>
        </div>
        <div className="nav--right">
          <h4>React Course - Project 1</h4>
        </div>
    </nav>
  )
}

function Footer() {
  return (
      <footer id="footer">
          <small>© 2022 AB development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div id="main-content">
          <img src={image002} alt='image001' className="main--image" />
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </div>
  )
}

function App() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}


ReactDOM.render(<App />, root)

/*
{
  type: "h1",
  key: null, 
  ref: null,
  props: {className: "header", children: "This is JSX"}, 
  _owner: null, 
  _store: {}
}
*/

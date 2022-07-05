import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

const root = document.getElementById("root")

function App(){
  return(
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, root)
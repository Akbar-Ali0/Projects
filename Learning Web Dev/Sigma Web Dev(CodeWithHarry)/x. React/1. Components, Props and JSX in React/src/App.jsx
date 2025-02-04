import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      
      <div className="cards">
        <Card title="Title 1" desc="Description 1" />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )
}

export default App

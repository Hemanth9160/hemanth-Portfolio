import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import ResumePage from "./components/ResumePage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

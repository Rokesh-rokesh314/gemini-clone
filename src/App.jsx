// eslint-disable-next-line no-unused-vars
import React from "react"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

const App = () => {
  return  (
  <>
  <div className="flex">
    <Sidebar />
    <MainContent />
    </div>
  </>

)
}

export default App
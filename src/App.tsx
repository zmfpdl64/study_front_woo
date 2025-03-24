import { Fragment } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from './containers/Home'
import Test from './containers/Test'
import Notfound from './containers/Notfound'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      

    </Fragment>
  )
}

export default App

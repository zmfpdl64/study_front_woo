import { Fragment } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from './containers/Home'
import Test from './containers/Test'
import Notfound from './containers/Notfound'
import './assets/styles/blog.css'

function App() {
  return (
    <Fragment>
      <div className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">우진의 블로그</h1>
          <p className="blog-description">개발과 기술에 대한 이야기</p>
        </header>
        
        <main className="blog-main">
          <div className="blog-content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </BrowserRouter>
          </div>
          
          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h2 className="sidebar-title">카테고리</h2>
              <ul>
                <li>개발</li>
                <li>기술</li>
                <li>일상</li>
              </ul>
            </div>
            <div className="sidebar-section">
              <h2 className="sidebar-title">최근 포스트</h2>
              <ul>
                <li>첫 번째 포스트</li>
                <li>두 번째 포스트</li>
                <li>세 번째 포스트</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </Fragment>
  )
}

export default App

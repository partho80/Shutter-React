import Header from './component/Header/Header'
import Home from './pages/Home'
import Footer from './component/Footer/Footer'
import Product from './pages/Product'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import BlogDetails from './pages/BlogDetails'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_2 from './pages/Home_2'

function App() {
  

  return (
    <div>
     <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home_2' element={<Home_2 />} />
            <Route exact path='/Shop' element={<Shop />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/BlogDetails' element={<BlogDetails />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Error' element={<Error />} />
          <Route exact path='/Product' element={<Product />} />
            <Route exact path='/Contact' element={<Contact />} />
        </Routes>   
        <Footer />
        </Router>

   </div>
  )
}

export default App

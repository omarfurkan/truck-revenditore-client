
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Register from './components/Register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

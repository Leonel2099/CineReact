import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
// import peliculas from './peliculas.json';
//import Main2 from './Main2';
import Component from './Component';
function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path='/'element={<Main/>}/>
    //     <Route path='/index.html'element={<Main/>}/>
    //     <Route path='/peliculas'element={<Component/>}/>
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
     <>
       <Header />
       <Component/>
       <Footer />
     </>
  );
}

export default App;


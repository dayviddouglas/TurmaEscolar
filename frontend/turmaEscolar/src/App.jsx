


import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import { Helmet } from "react-helmet";
import Turmas from './pages/Turmas';
import Sobre from './pages/Sobre';



function App() {
  

  return (
    <>
      <Router>

       
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/sobre' element={<Sobre/>}/>
        <Route exact path='/turmas' element={<Turmas/>}/>
        

        </Routes>
        
      </Router>

      <Helmet>
        <title>Escola Web </title>
        <link rel="icon" type="image/svg+xml" href="https://cdn-icons-png.flaticon.com/512/686/686051.png" />

      </Helmet>


      
    </>
  )
}

export default App

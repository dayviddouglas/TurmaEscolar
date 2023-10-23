
import './App.css'

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import { Helmet } from "react-helmet";

function App() {
  

  return (
    <>
      <Router>

       
        <Routes>
        <Route exact path='/' element={<Home/>}/>

        </Routes>

        

      </Router>

      <Helmet>
        <title> Escola Web</title>
        <link rel="icon" type="image/svg+xml" href="/assets/frontend/turmaEscolar/src/assets/chapeu-de-graduacao.svg" />

      </Helmet>
    </>
  )
}

export default App

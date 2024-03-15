
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './pages/home/Home';
import MovieList from './Component/movielist/MovieList';
import Movies from './pages/movieDetail/Movies';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movies/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

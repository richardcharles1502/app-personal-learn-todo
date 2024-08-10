import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Bootstrap.css'
import Header from './header/header';
import Home from './home/home';
import Document from './dynamic-component/document';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/document" element={<Document/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

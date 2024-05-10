
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Routes } from 'react-router-dom';
import Applayout from './layout/Applayout';
import PageNotFound from './page/PageNotFound';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Posts from './page/Posts';
import Post from './page/Post';



const Test = styled.div`
  background-color: var(--color-purple-50); // Ensure CSS is enclosed in backticks
`;



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Applayout/>}>
      <Route index element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='posts' element={<Posts/>}>
            <Route path='new' element={<h1>New Posts</h1>}/>
            <Route path=':postid' element={<Post/>}/>

      </Route>

        <Route>
        <Route path='*' element={<PageNotFound/>}/>
        </Route>

        </Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App; 
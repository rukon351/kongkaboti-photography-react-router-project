import { useState } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./components/Home/Home";
import Navber from './components/Navber/Navber';
import NotFound from './components/NotFound/NotFound';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';
import Reviews from './components/Reviews/Reviews';
import useReviewsData from './hooks/useReviewsData';


export const ReviewContext = createContext()

function App() {

  const [reviews, setReviews] = useReviewsData([]);
  // const [reviews, setReviews] = useReviews([]);

  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/review-details/:id' element={<ReviewDetails></ReviewDetails>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </ReviewContext.Provider>
  );
}

export default App;

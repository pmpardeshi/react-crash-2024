import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layout/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import Jobpage from './pages/Jobpage';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage />}/>
    <Route path='/jobs' element={<JobsPage />}/>
    <Route path='/jobs/:id' element={<Jobpage />}/>
    <Route path='/*' element={<NotFoundPage />}/>
    </Route>
  )
);

const App = () => {

  return <RouterProvider router = {router} />
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <HomeCards />
//       <JobListings />
//       <ViewAllJobs />
//     </>
//   )
}

export default App
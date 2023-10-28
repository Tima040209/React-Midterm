import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Post from './pages/Post';
import ErrorComponent from './components/Error';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Navbar from './components/NavBar';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} errorElement={<ErrorComponent />}>
        <Route index element={<Home />} path='/home'/>
        <Route element={<Profile />} path='/profile'/>
        <Route element={<Post />} path='/post'/>
      </Route>
    ),
    
  )



  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App


const Root = () => {
  return (
    <>
      <Navbar />

      <div>
        {/* page placeholder */}
        <Outlet />
      </div>

      <Footer />
    </>
  )
}
//   return(
//     <div>
//       <BrowserRouter>
//           <Routes>
//               <Route index element={<Home />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path='/profile' element={<Profile/>}/>
//           </Routes>
//       </BrowserRouter>
//     </div>
//   )
  
// }

// export default App;

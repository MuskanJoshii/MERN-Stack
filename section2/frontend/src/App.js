import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EventHandling from './components/EventHandling';

function App() {
  return (
    <div>
     
   <BrowserRouter>
    <Navbar/>
        <Routes>
          
          <Route path="/"  element={  <Navigate to="/home"/> }/>
          <Route path="home"  element={  <Home/> }/>
          <Route path="login"  element={ <Login/>  }/>
          <Route path="signup"  element={ <Signup/>  }/>
          <Route path="event"  element={ <EventHandling/>  }/>

        </Routes>
   </BrowserRouter>

   

    </div>
  );
}

export default App;


// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import Signup from './components/Signup';
// // import Textform from './components/Textform';


// function App() {
//      return (
//     <>

//     <Navbar />
//     <div className="container my-3 ">
//       {/* <Textform heading="Enter the text to analyze" /> */}
//       {/* <About/> */}
//       <Signup/>
      

//     </div>
//     </>
//     );
// }

// export default App;


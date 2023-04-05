import logo from './logo.svg';
import './App.css';
// import login from './components/login';

function App() {
  return (
    <>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link> */}
     {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script> */}


     <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="box1 shadow-lg w-25 p-2">
        <div className="box2">
          <h1>Instagram</h1>
          <input className='form-control' type="text" placeholder='Username' />
          <input   type="password" placeholder='password' />
          <button className="w-100 ">Log in</button>
          <div>Forgot Password</div> 
          <div className="box3">
            <span>Don't have an account?</span>
            <a href="#">Sign up</a>
          </div>
               
        </div>
      </div>

     </div>


 
    </>

  );
}

export default App;

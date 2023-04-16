import React, { useState } from 'react'

const Profilereact = () => {

   const [myColor, setMyColor] = useState('#eee')

  return (
    <div className='outermost d-flex justify-content-center align-items-center text-align-center flex-column '>
      <div className="innerouter ">
       <div className="card border shadow-0 ">
     <div className="card body ps-3 pe-3  pt-2">

     <div className='d-flex justify-content-end'>
      <button className='btn btn-outline-secondary text-muted'>EDIT</button>
     </div>

      <div className="pro d-flex justify-content-center ">
        <img className='rounded-circle mt-3' height={150} width={130} src="profile4.jpeg" alt="no img found"  />
      </div>

      
                   
        <h1>Muskan Joshi</h1>
        <p className='my-0'>Full Stack Developer</p>
        <p className='my-0'>idmuskanjoshi04@gmail.com</p>
        <p >Female</p>

        <div className="row ">
          <div className='col-4 '>
            <h5>Age</h5>
            <p>22 years</p>
          </div>

          <div className='col-4'>
            <h5>Weight</h5>
            <p>59 KGs</p>
          </div>

          <div className='col-4'>
            <h5>Height</h5>
            <p>5"5"</p>
          </div>
          
        </div>

       <div>
        <div className="d-flex justify-content-center ">
          <p className='text-muted my-0'>Emergency Contact</p>
          </div>
          <div className='d-flex justify-content-center my-0'>
          <button className='btn btn-success my-1 '>7355526432</button>
        </div>
        </div>

        <div className='mt-5'>
          <div className="row">
            <div className="col">
              <h5>SKILLS</h5>
              </div>

            <div className='col d-flex justify-content-end'>
              <button className='text-muted btn btn-outline-secondary'>EDIT</button>
            </div>

              <span><p>Html, Css, JS, Reactjs, MongoDb, Express</p></span> 
            
          </div>

          <div className="mt-3">
            <div className="row">
              <div className="col">
                <h5>ADDRESS</h5>
              </div>
 
              <div className='col d-flex justify-content-end'>
              <button className='text-muted btn btn-outline-secondary'>EDIT</button>
            </div>

            <div>
              <p style={{margin: "0" }}>Rajajipuram</p>
              <p style={{margin: "0" }}>Lucknow, 226017</p>
            </div>


            </div>
          </div>

          <div className="mt-5">
            <div>
              <h3>Custom Setting</h3>
              <input type="color" onChange={ (e) => {setMyColor(e.target.value)}} />
            </div>
            <div>
              <h3>Background Color</h3>

            </div>

      </div>
            <div>
              <h3>Font size</h3>
            </div>

          </div>
          </div>
        </div>
        </div>
      </div>
    
  )
}

export default Profilereact



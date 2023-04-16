import React, { useState } from 'react'

const EventHandling = () => {

   
   // usestate type krke snippet pe click krege fir jo bbi word  chhaie hoga use likhege direct fir binna kuch kie tab pe click krge aur 0 likh denge 
    const [upVotes, setupVotes] = useState(0);

    const [myColor, setMyColor] = useState('#eee');



    let likes = 0;

    const increaseLikes = () => {
        likes++;
        console.log(likes);
    }
    const increaseUpvotes = () => {
        // upVotes++;      wrong way
        setupVotes(upVotes + 1); // ✔ right way
    }
 

  return (
    <div style={{backgroundColor: myColor , height:'100vh', padding: 50 }} >
        <h1>Event Handling</h1>
        <hr />
  
  <button className='btn btn-primary' onClick={() => {alert('Ding Ding 🧨')}  }>Click EVent Handling</button>
  <br />
  <input type="text" onChange={ (e) => { console.log(e.target.value) }} />
  <br />

<input type="color" onChange={ (e) => { setMyColor(e.target.value) }} />
<br />

  <button className='btn btn-danger mt-4' onClick={increaseLikes} >add a like</button>

  <h1>  ⚡ {likes}</h1>

  <button className='btn btn-danger mt-4' onClick={increaseUpvotes} > Add an upVote</button>

  <h1> 😈😈  {upVotes}  </h1>

  <input type="range" className='form-range' id="customRange1" onChange={(e) => {console.log(e.target.value);} } />


    </div>
  )
}

export default EventHandling




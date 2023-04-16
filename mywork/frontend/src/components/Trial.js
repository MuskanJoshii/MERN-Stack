import React, { useState } from 'react'

const Trial = () => {

	const [mycolor, setMycolor] = useState('#eee')
	const [ccolor, setCcolor] = useState('#eee')
	const [textsize, setTextsize] = useState(40)




  return (
	<div style={{backgroundColor:mycolor}}>
		<div className='row mt-2'>
			<div className='col-md-5 mx-auto'>
				<div className='card border shadow-0 ' style={{borderRadius:"0",}}>
					<div className='card body ps-5 pe-5 pt-2' style={{backgroundColor:ccolor,fontSize:textsize}}>
						<div className='d-flex justify-content-end'>
							<button className='text-muted btn btn-outline-secondary' style={{backgroundColor:"white"}}>Edit profile</button>
						</div>
						<div className='d-flex justify-content-center'>
							<img height={200} width={200} src="/pic.jpg" alt="" style={{borderRadius:"100%"}} />
						</div>
						<div className='d-flex justify-content-center mt-2'>
							<h2 >Sai Ram Maurya</h2>
						</div>
						<div className='d-flex justify-content-center  '>
							<p style={{margin:"0"}}>FULL STACK DEVELOPER</p>
						</div>
						<div className='d-flex justify-content-center'>
							<p style={{margin:"0"}}>rams44258@gmail.com</p>
						</div>
						<div className='d-flex justify-content-center '>
							<p >MALE</p>

						</div>

						<div className='row'>
							<div className='col-md-4 text-center '>
								<h5>Age</h5>
								<p>24years</p>

							</div>
							<div className='col-md-4 text-center '>
								<h5>Weight</h5>
								<p>67</p>

							</div>
							<div className='col-md-4 text-center '>
								<h5>height</h5>
								<p>5'6"</p>

							</div>

						</div>
						<div>
							<div className='d-flex justify-content-center'>
								<p style={{margin:"0"}}>Emergency Contact</p>

							</div>
							<div className='d-flex justify-content-center ps-5 pe-5'>
								<button className='btn btn-success form-control' style={{fontSize:"18px",borderRadius:"0"}}>9807166139</button>
							</div>
						</div>
						<div className='mt-5'>
							<div className='row'>
								<div className='col'>
									<h6>SKILLS</h6>
									</div>
									

								<div className=' col d-flex justify-content-end '>
									<button className='text-muted btn btn-outline-secondary'>EDIT</button>
								</div>
								<span><p>Html,Css,Javascript,Reactjs,Mongodb,Express</p></span>
								
								
							</div>
							<div className='mt-3'>
								<div className='row'>
									<div className='col'>
										<h6>ADDRESS</h6>

									</div>
									<div className=' col d-flex justify-content-end'>
										<button className='text-muted btn btn-outline-secondary'>Edit</button>
									</div>

								</div>
								<div><p style={{margin:"0"}}>SS-229,sector-g</p>
								<p style={{margin:"0"}}>lda-colony,Ashiyana</p>
								<p style={{margin:"0"}}>Lucknow,226012</p>

								</div>

							</div>

							<div className='mt-5'>
								<div>
									<h2>Want To Do Customization???....do it here ⬇   </h2>
									<hr />
								</div>
								<div>
									<div><h3>Background Color</h3></div>
									{/* <input type="color" onChange={(e)=>{setMycolor}} /> */}
									<input type="color"onChange={(e)=>{setMycolor(e.target.value)}} />
								</div>

								<div>
									<div><h3>Card Background Color</h3></div>
									<input type="color"onChange={(e)=>{setCcolor(e.target.value)}} />
								</div>

								<div>
									<div><h3>font size</h3></div>
									<input type="range" className="form-range"onChange={(e) => {setTextsize(parseInt(e.target.value));}} />
								</div>


							</div>
2
						</div>
							

					</div>

				</div>
			</div>

		</div>
	</div>
  )
}

export default Trial
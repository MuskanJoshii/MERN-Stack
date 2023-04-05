import React , {useState} from 'react'


export default function Textfrom(props) {

  const handleUpClick = ()=> {
    // console.log("UpperCse was Clicked :" + text);
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=> {
    // console.log("UpperCse was Clicked :" + text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);

  }

  const handleCopy=() => {
    console.log("I m copy");
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeSpace=() =>{
    console.log('removing fun');
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  // const handlefindChange = (event)=> {
  //   findWord(event.target.value);
  // };

  // const handleReplaceChange=(event)=>{
  //    console.log(replaceWord(event.target.value));
  // };
  // const handleReplaceClick = ()=> {
  //   let newText=text.replaceAll(fWord,rWord);
  //   setText(newText);
  // };


    

  const [text, setText] = useState('');
  const [fWord, findWord] = useState('');
  const [rWord, replaceWord] = useState('');
  

  // text = "new Text"; // wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
    
     <div class="mb-3">
    
    <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
    {/* <textarea className="form-control" value={fWord}  onChange={handlefindChange} id="myBox" rows="8"></textarea>
    <textarea className="form-control" value={rWord}  onChange={handleReplaceClick} id="myBox" rows="8"></textarea> */}
     </div>
     {/* <button className="btn btn-primary mx-2" onClick={handleUpClick} >Covert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick} >Covert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy} >Copt Text</button> */}
     <button className="btn btn-primary mx-2" onClick={removeSpace} >Removespacing</button>
     {/* <button className="btn btn-primary mx-2" onClick={handleReplaceClick} >newbtn</button> */}
    </div>
    <div className="container my-3">
      <h1>Tour text summary</h1>
      <p>{text.split(" ").length } words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text}</p>

    </div>
    </>
  )
}

import React,{useState,useEffect} from 'react';
import './App.css';
  
function App() {
  const [quote,setQuote]= useState("");
  const [author,setAuthor]=useState("");
useEffect(()=>{
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(
    (quote)=>{
      setQuote(quote.content);
      setAuthor(quote.author); 
    }
  )
},[])
let fetchNewQuote = ()=>{
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(
    (quote)=>{
      setQuote(quote.content);
      setAuthor(quote.author);
}
  )
}
  return (
   
    <div className="App">
      <div className='quote'>
             <h2>{quote}</h2>
             <small>-{author}-</small>
    </div>
    <button className='btn' onClick={fetchNewQuote}>Generate new Quote</button>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useState } from 'react';

let userInputs = [];
let id = 0;
function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="responses" element={<Responses />} />
          
        </Routes>

      </Router>
      
    </div>
  );
}

function Forms(){
  const [gpa,setGpa] = useState();
  const [sat,setSat] = useState("optional");
  const [act,setAct] = useState("optional");
  const [about,setAbout]=useState();
  return(
    <div className = "container">
      <Links />
      <form>
        
        <label>
          Enter GPA:
          <input type="number" onChange={(e)=>{setGpa(e.target.value)}}/>
        </label>
        <br />
        <label>
          Enter SAT score:
          <input type="number" onChange={(e)=>{setSat(e.target.value)}}/>
        </label>
        <br />
        <label>
          Enter ACT score:
          <input type="number" onChange={(e)=>{setAct(e.target.value)}}/>
        </label>
        <br />
        <label>
          Summary(ECS, AWARDS, CLUBS):
          <textarea onChange={(e)=>{setAbout(e.target.value)}}></textarea>
        </label>
        <br />
        <button className="btn btn-primary" type="button" onClick={()=>{
          userInputs.push(
            {
              dId: id+1,
              dGpa:gpa,
              dSat:sat,
              dAct:act,
              sAbout:about
            }
          )
          id++;
          console.log(userInputs);
        }}>Submit</button>
      </form>

      GPA:{gpa}<br />
      SAT:{sat}<br />
      ACT:{act}<br />
      ABOUT:{about}<br />
      
  
    </div>
    
  );
}

function Links(){
  return(
  <>
      <InfoBox />
      <Link to="/about">
        <button className = "btn btn-dark">About</button>
      </Link>
      <Link to="/responses">
        <button className = "btn btn-dark">Responses</button>
      </Link>
      <Link to="/">
        <button className = "btn btn-dark">Forms</button>
      </Link>
  </>
  );
}
function Refresh(){
  return(
  <>
      <Link to="/">
        <button className = "btn btn-dark">Forms</button>
      </Link> 
  </>
  );

}
function Picture(){
  return(
    <>
     <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
    </>
  );
}
function InfoBox(){
  return(
  <>
    
    <input type="radio" value="Student"  /> Student
    <input type="radio" value="coolness"  /> Absolutely cool
  </>
  );
}
function Responses(){
  let t = userInputs.map(e => {
    return (
      <div className="container">
      {"UserID: "+e.dId+" GPA: "+e.dGpa+" SAT: "+e.dSat+" ACT: "+e.dAct+" ABOUT: "+e.sAbout}<br />
      <Link to="/">
        <button className="btn btn-danger" type="button" onClick={(e)=>{
          userInputs.splice(e.dId-1,1)
          Refresh()
        }}>Delete</button>
      </Link>
      </div>
      )
  });
  return(
    <div className="container label label-default">
      <Links /><br />
      {t}
      <SearchSat />
      <SearchAct />
      <SearchGpa />
    </div>
  );
}
function About(){
  return(
    <div className="container">
      
      <Links />
      <div className="label label-default">
        This is for admission officers to look at potential college students
        <Picture />
      </div>
    </div>
  );
}

function SearchSat(){
  const [input,setInput]=useState();
  const [p,setP]=useState();
  const t = ()=> userInputs.map(e => {
    if(e.dSat>=input){
      return (
      <>{"UserID: "+e.dId+" GPA: "+e.dGpa+" SAT: "+e.dSat+" ACT: "+e.dAct+" ABOUT: "+e.sAbout}<br /></>
      )
    }
  });

  return(
    <div className="container">
      <form>
        <label>
        Enter Your Wanted Sat
        <input type="number" onChange={(e)=>{
          setInput(e.target.value)
          
          }}/>
        </label>
        <button className="btn btn-primary" type="button" onClick={()=>{
          setP(t())
        }}>Submit</button>
      </form>
      {p}
    </div>
  );
}
function SearchAct(){
  const [input,setInput]=useState();
  const [p,setP]=useState();
  const t = ()=> userInputs.map(e => {
    if(e.dAct>=input){
      return (
      <>{"UserID: "+e.dId+" GPA: "+e.dGpa+" SAT: "+e.dSat+" ACT: "+e.dAct+" ABOUT: "+e.sAbout}<br /></>
      )
    }
  });

  return(
    <div className="container">
      <form>
        <label>
        Enter Your Wanted Act
        <input type="number" onChange={(e)=>{
          setInput(e.target.value)
          
          }}/>
        </label>
        <button className="btn btn-primary" type="button" onClick={()=>{
          setP(t())
        }}>Submit</button>
      </form>
      {p}
    </div>
  );
}
function SearchGpa(){
    const [input,setInput]=useState();
  const [p,setP]=useState();
  const t = ()=> userInputs.map(e => {
    if(e.dGpa>=input){
      return (
      <>{"UserID: "+e.dId+" GPA: "+e.dGpa+" SAT: "+e.dSat+" ACT: "+e.dAct+" ABOUT: "+e.sAbout}<br /></>
      )
    }
  });

  return(
    <div className="container">
      <form>
        <label>
        Enter Your Wanted Gpa
        <input type="number" onChange={(e)=>{
          setInput(e.target.value)
          
          }}/>
        </label>
        <button className="btn btn-primary" type="button" onClick={()=>{
          setP(t())
        }}>Submit</button>
      </form>
      {p}
    </div>
  )
}
export default App;

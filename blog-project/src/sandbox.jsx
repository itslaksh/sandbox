import { useState } from "react";
import { useEffect } from "react";

const Sandbox = () => {
  const title = 'Welcome To my React Page'
  const projects = 6
  const skills = ['React | ', 'JavaScript | ', 'HTML | ', 'CSS | ', 'Node.js ']
  const link = "https://github.com/Insanekun/"

  const DoThis = () => {
    console.log('This is a function that does something');
  }

  // let person = 'Nick'
  // console.log(`My pronouns were ${person}`);

  // const MakeMe = () => {
  //   person = 'her'
  //   console.log(`My pronouns are ${person}`);

  // }

  // useStates:-
  const
    [person, setPerson] = useState('Nick');
  // console.log(`My pronouns were ${person}`);


  const MakeMe = () => {
    setPerson('Her');

  }
  console.log(`My pronouns are ${person}`);

  // useEffect Hook
  useEffect(() => {
    console.log('Component Rendered/useEffect Ran');
  })


  return (
    <div className="sandbox">
      <h1>{title}</h1>
      <p>My Pronouns are: {person} </p>
      <p>Number of Projects: {projects}</p>
      <p>{Math.floor(Math.random() * 10)}</p>

      {/* <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}

      <p>Skills Acquired: {skills} </p>
      <a href={link}>Link to my GitHub Page!</a>

      <button onClick={DoThis} style={{
        marginTop: "10px",
        border: "none",
        backgroundColor: "whitesmoke",
        padding: "5px",
        borderRadius: "5px"
      }}>Hey!</button>

      <button onClick={MakeMe} style={{
        marginTop: "10px",
        border: "none",
        backgroundColor: "whitesmoke",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>I'm Here Click Me!</button>


    </div>
  );
}

export default Sandbox;
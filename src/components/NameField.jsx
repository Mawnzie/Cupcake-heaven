import React from 'react'
import { useState } from 'react';


const NameField = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  return (
     <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
       />
        <button onClick={() => setSubmittedName(name)}>Submit</button>
  {submittedName && <p>Your name is: {submittedName}</p>}
    </div>
  );
};

export default NameField;
{/*
export default function NameField(){
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => alert(`Name: ${name}`)}>Submit</button>
    </div>
  );
};
*/}
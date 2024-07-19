import React, { useState } from 'react'; 

function Practical(props) {
  const [inputValue, setInputValue] = useState('');
  const [submittedData, setSubmittedData] = useState('');

  const handleSubmit = () => {
    setSubmittedData(inputValue);
  };

  const  a = ["neha","bhaskar","aditya","surya","prakash"]

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter a name" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{submittedData}</p>
      <h3>{props.name}</h3>
      <h3>{props.handler}</h3>
      <div>
      {a.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

      </div>
    </div>
  );
}

export default Practical;

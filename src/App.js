import './App.css';
 import axios from 'axios';

import React, { useState } from 'react';

 // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       info1: userid,
  //       info2: "This is a new post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }


  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
 // function createPost() {
  //   


  // const [post, setPost] = React.useState(null);



 


function App() {
  

  const [post, setPost] = React.useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const baseURL="https://determining-comments-buy-robots.trycloudflare.com/api"
  const userid = 1;
  React.useEffect(() => {
    axios.get(`${baseURL}/get-info`).then((response) => {
      setPost(response.data);
    });
  },[messages])

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseURL}/add-info`, {
        info1: userid,
        info2:input
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data)
        setMessages([...messages, input]);

    setInput('');
      });
    
  }
  return (
    <div className="App">
      {/* <Header  /> */}
      <div className="mainHeading">
      <h1>Chat</h1>
      <ul className='list'>
        {messages?.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul >
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
 );
}
export default App;


// import React, { useState } from 'react';

// function FormInput() {
//   // Declare a new state variable, which we'll call "name"
//   const [name, setName] = useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleChange} />
//       </label>
//       <div>Your name is: {name}</div>
//     </form>
//   );
// }

// export default FormInput;

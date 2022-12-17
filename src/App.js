import './App.css';
import axios from 'axios';

import React, { useState } from 'react';
import classnames from 'classnames';

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
  const [variable, setVariable] = useState('');
  const baseURL = "http://127.0.0.1:8000/api"
  const userid = 2;
  React.useEffect(() => {
    getPosts()
  }, [messages])

  async function getPosts() {
    await axios.get(`${baseURL}/get-info`).then((response) => {
      setMessages(response.data);
      console.log(response.data)
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(input)
    await axios
      .post(`${baseURL}/add-info/`, {
        "info1": userid,
        "info2": input.toString()
      })
      .then((response) => {
        console.log("Successful")
        setVariable(response.data)
        setInput('')
      });

  }
  return (
    <div className="App">
      {/* <Header  /> */}
      <div className="mainHeading">
        <h1>Chat</h1>
        <ul className='list'>
          {messages?.map((message, index) => (
            message.info1 === 1 ? <div key={index} className="left">
              {/* <li>{message.info1}</li> */}
              <li >{message.info2}</li>
            </div> : <div key={index} className="right">
              {/* <li>{message.info1}</li> */}
              <li >{message.info2}</li>
            </div>
          ))
          }
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

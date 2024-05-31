//HIGHER ORDER FUNCTION
// const App = () => {
//   let x = 'GreatStack'
//   let array = ['user1', 'user2', 'user3', 'user4', 'user5']
//   return (
//     <div>
//       {x}
//       {array.map((user)=>{
//         return <h2>{user}</h2>
//       })}
//     </div>
//   );
// };



//PROPS
// import { useState } from "react";
// import FirstComponent from "./components/FirstComponent";

// const App = () => {
//   const [x, setX] = useState(0);
//   const btnClick = () => {
//     console.log("clicked");
//     setX(x + 1);
//     console.log(x);
//   };

//   return (
//     <div>
//       <button onClick={() => btnClick()}>Click Me</button>
//       <FirstComponent data={x} fn={setX} />
//     </div>
//   );
// };

//USEREF REVIEW
// import { useRef, useState } from "react";

// const App = () => {
//   const inputRef = useRef(null)
//   const [data, setData]=useState([])

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={()=>{setData([...data, inputRef.current.value])}}>Submit</button>
//       {data.map((item, index)=>{
//         return <h2 key={index}>{item}</h2>
//       })}
//     </div>
//   );
// };

import Todo from "./TodoComponents/Todo";

// TODO LIST
const App = ()=>{
  return(<div>
    <Todo/>
  </div>)
}

export default App;

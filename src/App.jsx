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

import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [x, setX] = useState(0);
  const btnClick = () => {
    console.log("clicked");
    setX(x + 1);
    console.log(x);
  };

  return (
    <div>
      <button onClick={() => btnClick()}>Click Me</button>
      <FirstComponent data={x} fn={setX} />
    </div>
  );
};

export default App;

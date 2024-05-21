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

const App = () => {
  let data = 'boy'
  return (
    <div>
      {data === 'boy' ? <h1>Boy</h1> : <h1>Girl</h1>}
    </div>
  );
};

export default App;

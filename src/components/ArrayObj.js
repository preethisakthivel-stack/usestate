// import React, { useState } from "react";

// export default function ArrayObj() {
//   // Array :-
//   const [arr, setArr] = useState([90, 100]);

//   //   Object :- key value pairs
//   const [obj, setObj] = useState({
//     name: "Preethi",
//     age: 21,
//     college: "KSR",
//   });

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setArr((prev) => [...prev, [89]]);
//           // object:-
//           setObj((prev) => ({
           
//             // ["course"]: "MERN",
//             ["college"]: "PSG",
//           }));
//         }}
//       >
//         Click Here
//       </button>

//       <h1>The Results are :</h1>
//       {arr?.map((a) => (
//         <p>{a}</p>
//       ))}

//       <h2>Person Details:</h2>
//       <p>{obj.name}</p>
//       <p>{obj.age}</p>
//       <p>{obj.college}</p>
//       {obj?.course && <p>{obj.course}</p>}
//     </div>
//   );
// }

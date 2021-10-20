// import React from "react";
// import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { addCount, minusCount, timothy } from "../Glodal/context";
// const Redu = () => {
//   // const [count, setCount] = React.useState(0);
//   const [email, setEmail] = React.useState("");
//   const field1 = useSelector((state) => state.myReducer.timothy);
//   console.log(field1);
//   const dispatch = useDispatch();
//   const file = useSelector((state) => state.myReducer.count);
//   console.log(file);
//   // const addcount = () => {
//   //   setCount(count + 1);
//   // };
//   // const minuscount = () => {
//   //   setCount(count - 1);
//   // };
//   return (
//     <Div>
//       <div>lets build</div>
//       <center>
//         <Valueholder> {file}</Valueholder>
//         <div> {field1} </div>
//         <input
//           placeholder="enter your value"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             dispatch(timothy(email));
//           }}
//         >
//           click
//         </button>
//         <Buttons>
//           <button
//             onClick={() => {
//               dispatch(addCount());
//             }}
//           >
//             +
//           </button>
//           <button
//             onClick={() => {
//               dispatch(minusCount());
//             }}
//           >
//             -
//           </button>
//         </Buttons>
//       </center>
//     </Div>
//   );
// };

// export default Redu;
// const Div = styled.div`
// height

//   display: flex;
//   justify-content: center;

// `;
// const Valueholder = styled.div`
//   border: 1px solid red;
//   border-radius: 50px;
//   height: 50px;
//   width: 50px;
//   display: flex;
//   justify-content: center;
//   font-size: 25px;
//   margin-top: 30px;
// `;
// const Buttons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 90px;
// `;

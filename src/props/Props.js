import React from "react";

// function Props(props) {
//   return (
//     <>
//       <h1>
//         Your name is : {props.userName} and age is : {props.age}
//       </h1>
//     </>
//   );
// }

// class Props extends React.Component {
//   constructor(props) {
//     super();
//     this.name = props.userName;
//     this.age = props.age;
//   }
//   render() {
//     return (
//       <>
//         <h1>
//           Your name is :{this.name} and age is : {this.age}
//         </h1>
//       </>
//     );
//   }
// }

// export default Props;

export function Map({ id, im, name }) {
  return (
    <>
      <h1>
        Your id is : {id} and your name is : {name}
        and key : {im}
      </h1>
    </>
  );
}

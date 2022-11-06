// import { createContext, useState } from "react";
import { ErrorResponse } from "@remix-run/router";
import { createContext } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

// const AuthContext = createContext();

// const AuthContextProvider = (props) => {
//   const {user, setUser} = useState({userId:2})
//   return (
//     <AuthContext.Provider value={props.value}>
//      {props.children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContextProvider

// //create context for our app

// const AuthContext = createContext({
//   // isAuthenticated: false,
//   user: {
//     username: "@kingvhikk",
//     name: "Akpu Victor",
//     email: "akpuvic@gmail.com",
//   },
//   verified:false,
// });
// //define context provider...

//  const AuthProvider = (props) => {

//   return (
//     <AuthContext.Provider
//     value={{
//       // isAuthenticated: false,
//       user: {
//         username: "@kingvhikk",
//           name: "Akpu Victor",
//           email: "akpuvic@gmail.com",
//         },
//         verified:true,
//       }}>
    
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
{/* <AuthProvider>
<div className='max-w-4xl'>
 <h1>User Profile</h1>
 <div>Username:{user.username}</div>
 <div>Name: {user.name}</div>
 <div>E-mail:{ user.email}</div>
 <div>verified :{verified ? "yes": "no"}</div>
</div>
</AuthProvider> */}
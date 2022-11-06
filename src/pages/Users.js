import React, { useContext, createContext, useState } from "react";
import { ErrorResponse } from "@remix-run/router";
import ErrorBoundary from "../components/ErrorBoundary";

//create context for our app

const AuthContext = createContext({
  user: {
    username: "@kingvhikk",
    name: "King Victor",
    email: "akpu@gmail.com",
  },
  verified: false,
});

//define context provider

const AuthProvider = (props) => {
  const [user, setUser] = React.useState({});
  return (
    <AuthContext.Provider
      value={{
        user: {
          username: "@kingvhikk",
          name: "King Victor",
          email: "akpu@gmail.com",
          userbio: "My name is Victor, Im a student of Alt School Africa.",
        },
        verified: false,
        setUser: setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

//define user component

const UserProfile = () => {
  const { user, verified } = useContext(AuthContext);

  return (
    <div>
      <h1>User profile</h1>
      <ErrorBoundary>
        <div>Username: {user.username}</div>
  
      </ErrorBoundary>
      <ErrorBoundary>
        <div>Name:{user.name}</div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div>Email: {user.email}</div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div>verified :{verified ? "yes" : "no"}</div>
      </ErrorBoundary>
    </div>
  );
};

function Users() {
  return (
    <AuthProvider>
      <div className="max-w-4xl">
        <UserProfile />
      </div>
    </AuthProvider>
  );
}

export default Users;

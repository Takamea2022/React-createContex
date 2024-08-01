import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA() {

  const [user, setUser] = useState("EmanCute");

  return(
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>

        {/* This component A is the Provider
            Nested Component need to use Provider
            instead of props.        
        */}
        <UserContext.Provider value={user}>
         <ComponentB user={user}/>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default ComponentA;
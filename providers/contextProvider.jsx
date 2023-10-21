import React, {createContext, useState } from 'react'
    export const UserName = createContext()

export default function ContextProvider({children}) {
    const [data,setdata] = useState([])
  return (
    <UserName.Provider value={{data,setdata}} >
      {  children }
    </UserName.Provider>
  )
}
import { useState } from 'react';
import { UserContext } from './'

// const user = {
//   id: 123,
//   name: 'John Doe',
//   email: 'jhon@gmail.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider
      // value={ { hola: 'Mundo', user } }
      value={ { user, setUser } }
    >
      { children }
    </UserContext.Provider>
  )
}

import React, {useState, createContext} from 'react'

export const UserName = createContext('User');

function UserNameInput() {
    const [input, setInput] = useState('');
  return (
    <UserName.Provider value={input}>
        <h2>{input}</h2>
        <input value={input} onChange={e => {
            setInput(e.target.value);
            }}></input>
    </UserName.Provider>
  )
}

export default UserNameInput;
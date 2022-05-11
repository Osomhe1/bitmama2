import React from 'react'
import { useDispatch } from 'react-redux';

export default function Logout() {
    const handleLogout = (e) =>{
        e.preventDefault();
        const dispatch = useDispatch();
    }
  return (
    <div><h1>Welcome <span className='user__name' >Osomhe</span></h1>
    <button onClick={(e) => handleLogout(e)} className='btn btn-primary'>Logout</button>
    </div>
  )
}

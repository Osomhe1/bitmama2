import React from 'react'
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../featuers/slice';

export default function Logout() {
            const dispatch = useDispatch()
            const user = selectUser

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }
  return (
    <div><h1>Welcome <span className='user__name' >Osomhe</span></h1>
    <button onClick={(e) => handleLogout(e)} className='btn btn-primary'>Logout</button>
    </div>
  )
}

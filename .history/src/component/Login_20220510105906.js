import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../featuers/slice'

export default function Login() {

    const [user_name, setUser_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(login({
            name:user_name,
            email:email,
            password:password,
            loggedIn:true

        }))

    }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='col-sm-12 col-md-6 col-lg-4 m-auto mt-10 bg-secondary login-form'
      >
        <div className='form-group'>
          <label htmlFor='inputUser_nameLabel'>User Name</label>
          <input
            type='name'
            className='form-control'
            id='inputUser_name'
            aria-describedby='emailHelp'
            placeholder='user name'
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
          />
          <label htmlFor='inputUser_nameLabel'>User Name</label>
          <input
            type='email'
            className='form-control'
            id='inputEmail'
            aria-describedby='emailHelp'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='inputPasswordLabel'>Password</label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
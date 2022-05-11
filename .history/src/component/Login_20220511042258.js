import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../featuers/slice'

 function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true

        }))
        

    }

  return (
    <div>
      <form
        className='col-sm-12 col-md-6 col-lg-4 m-auto mt-10 bg-secondary login-form'
      >
        <div className='form-group'>
          <label htmlFor='inputnameLabel'>User Name</label>
          <input
            type='name'
            className='form-control'
            id='inputname'
            aria-describedby='emailHelp'
            placeholder='user name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='inputUser_nameLabel'>Email</label>
          <input
            type='email'
            required
            className='form-control'
            id='inputEmail'
            aria-describedby='emailHelp'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className='form-group'>
          <label htmlFor='inputPasswordLabel'>Password</label>
          <input
          required
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type='submit'
        onClick={handleSubmit}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  )
}


export default Login
import React from 'react'

export default function Login() {

    const []

  return (
    <div>
      <form  className='col-sm-12 col-md-6 col-lg-4 m-auto mt-10 bg-secondary login-form'>
        <div className='form-group'>
          <label for='exampleInputEmail1'>User Name</label>
          <input
            type='na'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='user name'
          />
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='user name'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
          />
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label className='form-check-label' for='exampleCheck1'>
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

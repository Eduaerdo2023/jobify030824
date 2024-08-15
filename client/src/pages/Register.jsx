import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import { FormRow } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>register</h4>
        <FormRow name ='name' type='text' defaultValue='Eduardo' />
        <FormRow name ='lastName' type='text' labelText=' Last Name' defaultValue='Bes' />
        <FormRow name ='location' type='text'  defaultValue='earth' />
        <FormRow name ='email' type='email'  defaultValue='email@email.com' />
        <FormRow name ='password' type='password'  defaultValue='secret123' />

        <button type="submit" className='btn btn-block'>submit</button>
        <p>
          Already a member <Link to='/login' className='member-btn'>Login</Link>
        </p>
        
      </form>

    </Wrapper>
  )
}

export default Register

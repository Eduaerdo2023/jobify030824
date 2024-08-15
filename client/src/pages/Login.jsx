import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow name='email' type='email' defaultValue='email@email.com' />
        <FormRow name='password' type='password' defaultValue='secret123' />
        <button type="submit" className='btn btn-block'>submit</button>
        <button type="button" className='btn btn-block'>explore the app</button>
        <p>
          Not a member yet? <Link to='/register' className='member-btn'>Register</Link>
        </p>

      </form>

    </Wrapper>
  )
}

export default Register

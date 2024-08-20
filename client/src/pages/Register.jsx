import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
 
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/register', data)
    toast.success('Registration succesfull')
    return redirect('/login')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }

}
const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  console.log(isSubmitting);
  
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>register</h4>
        <FormRow name='name' type='text' defaultValue='Eduardo' />
        <FormRow name='lastName' type='text' labelText=' Last Name' defaultValue='Bes' />
        <FormRow name='location' type='text' defaultValue='earth' />
        <FormRow name='email' type='email' defaultValue='email@email.com' />
        <FormRow name='password' type='password' defaultValue='secret123' />

        <button type="submit" className='btn btn-block' disabled={isSubmitting}>{isSubmitting?'submitting...':'submit'}</button>
        <p>
          Already a member <Link to='/login' className='member-btn'>Login</Link>
        </p>

      </Form>

    </Wrapper>
  )
}

export default Register

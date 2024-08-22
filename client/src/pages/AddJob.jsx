import { Form, redirect, useNavigation, useOutletContext } from "react-router-dom"
import { FormRow, FormRowSelect } from "../components"
import { JOB_STATUS, JOB_TYPE } from "../../../utils/Constants"
import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"
import Wrapper from "../assets/wrappers/DashboardFormPage"


export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/jobs', data)
    toast.success('Job added successfully')
    return redirect('all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AddJob = () => {
  const { user } = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper  className="form">
      <Form method='post'>
        <h4 className="form-title">add job page</h4>
        <div className="form-center">
          <FormRow name='position' type='text' />
          <FormRow name='company' type='text' />
          <FormRow name='jobLocation' type='text' labelText='job location' defaultValue={user.location} />
         
          <FormRowSelect 
          name = 'jobStatus'
          labelText='Job Status'
          list = {Object.values(JOB_STATUS)}
          defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelect 
          name = 'jobType'
          labelText='job type'
          list = {Object.values(JOB_TYPE)}
          defaultValue={JOB_TYPE.FULL_TIME}
          />
          
          <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'submit'}</button>
        </div>
      </Form>
    </Wrapper>
  )



}

export default AddJob

import { Form, useLoaderData, useNavigation, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/DashboardFormPage"
import { FormRow, FormRowSelect } from "../components"
import { JOB_STATUS, JOB_TYPE } from "../../../utils/Constants"
import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"



export const loader = async ()=> {
  try {
    const { data } = await customFetch.get('/jobs')
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

export const action = () => {
  return null
}


const EditJob = () => {
  return (
    <div>
      <h1>edit job</h1>
    </div>
  )
}

export default EditJob

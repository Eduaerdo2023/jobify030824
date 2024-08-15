import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AllJobs, AddJob, Stats,  Profile, DashboardLayout, HomeLayout, Landing, Login, Register, Error, Admin } from "./pages"

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme')
  return isDarkTheme
}
checkDefaultTheme()


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: 'add-job',
        element: <AddJob />
      },
      {
        path: 'all-jobs',
        element: <AllJobs />
      },
      {
        path: 'stats',
        element: <Stats />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'admin',
        element: <Admin />
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App


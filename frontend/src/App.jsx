import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import { UserContextProvider } from "./context/UserContext"

function App() {


  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App

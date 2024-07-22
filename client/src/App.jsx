import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";


function App() {

    const pageRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>

          <Route index element={<HomePage/>}/>


        </Route>
    ))

    return (
        <RouterProvider router={pageRouter}></RouterProvider>
    )
}

export default App

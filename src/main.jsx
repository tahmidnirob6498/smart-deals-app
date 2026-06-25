
import { createBrowserRouter, RouterProvider } from 'react-router'
import ReactDOM from "react-dom/client";
import './index.css'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Allproducts from './pages/Allproducts'
import AuthProvider from './firebase/AuthProvider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './component/PrivateRoute';
import ProductDetails from './pages/ProductDetails';
import MyBids from './pages/MyBids.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/allProducts',
        element:<PrivateRoute>
          <Allproducts></Allproducts>
        </PrivateRoute>},
        {
          path:'/products/:id',
          loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
          Component:ProductDetails

        },
      {
        path:'/signIn',
        Component:SignIn
      },
      {
        path:'/signUp',
        Component:SignUp
      },
      {
        path:'/myBids',
        element:<PrivateRoute>
          <MyBids></MyBids>
        </PrivateRoute>
      }
    ]

  }
])


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
 <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
);




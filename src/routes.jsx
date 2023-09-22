import LoginNumber from "./Components/LoginNumber/LoginNumber"
import LoginUserName from "./Components/LoginUserName/LoginUserName"
import ProductComment from "./Components/ProductComment/ProductComment"
import ProductSupport from "./Components/ProductSupport/ProductSupport"
import Index from "./Pages/Index/Index"
import Login from "./Pages/Login/Login"
import UserPanel from "./Pages/UserPanel/UserPanel"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import Product from "./Pages/Product/Product"
import Profile from "./ComponentsPanel/Profile/Profile"
import Nothing from "./ComponentsPanel/Nothing/Nothing"


const routes = [
    { path: "/", element: <Index /> },
    {
        path: "/product-info/:productID", element: <Product />, children: [
            { path: "product-details", element: <ProductDetails /> },
            { path: "product-support", element: <ProductSupport /> },
            { path: "product-comment", element: <ProductComment /> },
        ]
    },
    {
        path: "/panel", element: <UserPanel />, children: [
            { path: "profile", element: <Profile /> },
            { path: "nothing", element: <Nothing /> },
        ]
    },
    {
        path: "/login", element: <Login />, children: [
            { path: "login-number", element: <LoginNumber /> },
            { path: "login-username", element: <LoginUserName /> },
        ]
    },
]
export default routes
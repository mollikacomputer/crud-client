import AddUser from "../AddUser";
import Home from "../Home";
import UpdateUser from "../UpdateUser";

export const publicRoute = [
    {path:'/adduser', name: AddUser, Component: AddUser},
    {path:'/updateuser', name: UpdateUser, Component: UpdateUser},
    {path:'/', name: Home, Component: Home}
]
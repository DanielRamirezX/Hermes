import Home from '../pages/Home';
import Customers from '../pages/Customers';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Error404 from "../pages/Error404";

const routes = {
    '/': Home,
    '/clientes' : Customers,
};

const router = async () => {
    const home = null || document.getElementById("Home");

    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    home.innerHTML = await render();
};

export default router;
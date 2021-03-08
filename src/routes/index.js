import Home from '../pages/Home';
import Customers from '../pages/Customers';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Error404 from "../pages/Error404";
import About from '../pages/About';

const routes = {
    '/': Home,
    '/clientes' : Customers,
    '/about': About,
};

const router = async () => {
    const home = null || document.getElementById("Home");

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    home.innerHTML = await render();
};

export default router;
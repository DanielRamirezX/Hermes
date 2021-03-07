const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validRoute = route === '/' ? route : `/clientes`;
        return validRoute;
    }

    return `/${route}`;
};

export default resolveRoutes;
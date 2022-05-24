const productsIndexRouter = require("./productsIndex.router");
const productsRouterAPI = require("./productsAPI.router");
const usersIndexRouter = require("./usersIndex.router");
const usersRouterAPI = require("./usersAPI.router");
const loginRouter = require("./login.router");
const registerRouter = require("./register.router.js");
const myProfileRouter = require("./my-profile.router");

function routerAPI(app){
    app.use('/products', productsIndexRouter);
    app.use('/api/products', productsRouterAPI);
    app.use('/users', usersIndexRouter);
    app.use('/api/users', usersRouterAPI);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/my-profile', myProfileRouter);
}

module.exports = routerAPI;
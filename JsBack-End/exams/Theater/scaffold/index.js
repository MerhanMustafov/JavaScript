const express = require("express");
const { PORT } = require("./config");
const databaseConfig = require("./config/database");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");

// const userService = require('./services/user') //test login/register/
// const authMiddlewares = require('./middlewares/auth')

start();
async function start() {
	const app = express();

	console.log("req >>>>");
	await databaseConfig(app);
	expressConfig(app);
	routesConfig(app);

	// app.get("/", (req, res) => {
	// 	res.send("WORKING");
	// });

	app.listen(PORT, () => {
		// testAuth() //test login/register/
		// testAuth()
		console.log(`App started at http://localhost:${PORT}`);
	});
}

// async function testAuth(){
//     const reqMock = {}
//     const resMock = {
//         cookie(){
//             console.log('Set Cookie', arguments)
//         }
//     }
//     const nextMock = () => {}
//     try{
//         const auth = authMiddlewares()
//         auth(reqMock, resMock, nextMock)
//         await reqMock.auth.register('Peter', '1234')
//     }catch(err){
//         console.log(err.message)
//     }

// }

//test login/register/
// async function testAuth(){
//     try{
//         const result = await userService.createUser('sche', '123');
//         console.log(result)

//         const user = await userService.getUserByUserName('peter');
//         console.log(user)
//     }catch(err){
//         console.log('ERROR: ', err.message)
//     }

// }

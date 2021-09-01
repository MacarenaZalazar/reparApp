//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const connectDB = require('./src/db.js');
const { HOST_BACK } = process.env;



// Syncing all the models at once.
/* conn.sync({ force: true }).then(() => {
  server.listen(HOST_BACK, () => {
    console.log(`listening at ${HOST_BACK}`); // eslint-disable-line no-console
  });
}); */

server.listen( HOST_BACK, () => {
    connectDB();
    console.log(`Server on port ${HOST_BACK}`);
})
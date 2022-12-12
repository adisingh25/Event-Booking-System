
const mongoose = require('mongoose');

 // const connectWithDb = () => {
 mongoose.connect(process.env.MONGODB_URL)
 		.then(console.log(`DB CONNECTED SUCCESSFULLY`))
 		.catch((error) => {
 			console.log(`DB CONNECTION ERROR`);
 			console.log(error);
 			process.exit(1);
 		});
 // };



const app = require('./app/app.js');

const port =process.env.PORT || 9000; 

app.listen(port,()=>{
    console.log('Server is running on port: '+port);
});
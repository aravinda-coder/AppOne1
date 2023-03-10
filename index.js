//Dependencies
const express = require('express');//access express
const app = express(); // create object of express
app.use(express.json());//specifiy type of object
//Handling Get request for / URI
app.get('/', (req, res) => {
res.send('Express App Running');
});

/*app.get('/time', (req, res) => {
    const time = new Date();
    res.send("time is "+time);
    });

    app.post('/testPostRequest', (req, res) => {
       
        res.send("server can handle psot req ");
        });*/

        
    app.post('/recordOneRequest', (req, res) => {

        const sensorReading = req.query.temp ;
       
        res.send("Query value is " + sensorReading);
        });

        app.post('/JSON', (req, res) => {

            const temp = req.body.temp ;
            const light = req.body.light;
           
            res.send("Query temp is " + temp );
            });

//Deploying the listener
const port = process.env.port || 8080;
app.listen(port, () => console.log(`Express server listening on port
${port}`));

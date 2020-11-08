const express = require('express');
const app = express();
port = process.env.PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./ServiceManual.v1.json');

// TEST HERE



console.log("TEST");
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
console.log("TEST");



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
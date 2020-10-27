const express = require('express');
const app = express();
port = process.env.PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./ServiceManual.v1.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
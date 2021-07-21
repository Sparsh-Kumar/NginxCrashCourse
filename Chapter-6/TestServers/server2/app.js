



const express = require ('express');
const path = require ('path');
const app = express ();
const port = 9999;

app.get ('/', async (req, res) => {

    try {
        return res.status (200).send ({
            status: 'success',
            message: `hit the port ${port} of localhost`
        })
    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
    
})

app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})

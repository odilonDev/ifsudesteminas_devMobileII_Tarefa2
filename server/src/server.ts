import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/*
app.get('/coaches', (request, response) => {
    console.log(request.query);
    const coaches = [
        {name: 'Odilon', age: 49},
        {name: 'Bruce Lee', age: 30},
    ];

    return response.json(coaches);
});

app.delete('/coaches/:id', (request, response) => {
    console.log(request.params);
    const coaches = [
        {name: 'Odilon', age: 49},
        {name: 'Bruce Lee', age: 30},
    ];

    return response.json(coaches);
});

app.post('/coaches', (request, response) => {
    console.log(request.body);
    const coaches = [
        {name: 'Odilon', age: 49},
        {name: 'Bruce Lee', age: 30},
    ];

    return response.json(coaches);
});
*/

app.listen(3333);
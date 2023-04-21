import express, { Express, Request, Response } from 'express';
import routersV1 from './routes/Api/V1/index'
import cors from 'cors';

const app: Express = express();

app.use(express.json());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
    res.send('hello world, testing');
});

app.use('/api/V1', routersV1);
export default app;
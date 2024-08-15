import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// To serve as DB
let data: { 
    id: number; 
    name: string }[] = [];

// Create - POST
app.post ('/api/data', (req: Request, res: Response, next: NextFunction) => {
    try{
        const newEntry = req.body;
        newEntry.id = data.length + 1;
        data.push(newEntry);
        res.status(201).json(newEntry);
    } catch (err) {
        next(err);
    }
});

// Read - GET
app.get('/api/data', (req: Request, res: Response, next: NextFunction) => {
    try{
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// Update - PATCH
app.patch('/api/data/:id',(req: Request, res: Response, next: NextFunction) => {
    try{
        const entryId = parseInt(req.params.id, 10)
        const updatedEntry = req.body;
        const index = data.findIndex(entry => entry.id == entryId);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedEntry };
        res.json(data[index]);
    } else {
        res.status(404).json({ error: 'ID is not existing.' });
    }
    } catch(err) {
        next(err);
    }
});

// Delete - DELETE
app.delete('/api/data/:id', (req: Request, res: Response, next: NextFunction) => {
    try{
        const entryId = parseInt(req.params.id, 10);
        const index = data.findIndex(entry => entry.id === entryId);
    if (index !== -1) {
        const deletedEntry = data.splice(index, 1)[0];
        res.json(deletedEntry);
    } else {
        res.status(404).json({ error: 'ID is not existing.' });
    }
    } catch (err){
        next(err);
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

export default app; // Export
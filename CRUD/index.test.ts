import request from 'supertest';
import app from './index.ts';

describe('CRUD', () => {
    let newEntryId: number;

    it('Create a new entry', async () => {
        const newEntry = { "name": "New Item" };
        const response = await request(app)
            .post('/api/data')
            .send(newEntry);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newEntry);
        newEntryId = response.body.id;
    });

    it('Get all entry', async () => {
        const response = await request(app).get('/api/data');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('Update existing entry', async () => {
        const updatedEntry = { name: 'Updated Item' };
        const response = await request(app)
            .patch(`/api/data/${newEntryId}`)
            .send(updatedEntry);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(updatedEntry);
    });

    it('Delete existing entry', async () => {
        const response = await request(app).delete(`/api/data/${newEntryId}`);

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(newEntryId);
    });

    it('Return 404 on non-existing id on update', async () => {
        const updatedEntry = { name: 'Updated Item' };
        const response = await request(app)
            .patch('/api/data/999')
            .send(updatedEntry);

        expect(response.status).toBe(404);
    });

    it('Return 404 on non-existing id on delete', async () => {
        const response = await request(app).delete('/api/data/999');

        expect(response.status).toBe(404);
    });
});
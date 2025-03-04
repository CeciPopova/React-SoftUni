const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const res = await fetch(baseUrl);
        const result = await res.json();
        const users = Object.values(result);
        return users;
    },
    async create(userData) {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        return result;
    }
}
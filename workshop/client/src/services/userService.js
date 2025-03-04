const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const res = await fetch(baseUrl);
        const result = await res.json();
        const users = Object.values(result);
        return users;

    }
}
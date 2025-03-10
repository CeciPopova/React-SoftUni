const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const res = await fetch(baseUrl);
        const result = await res.json();
        const users = Object.values(result);
        return users;
    },

    async getOne(userId) {
        const responce = await fetch(`${baseUrl}/${userId}`);
        const user = await responce.json();

        return user;
    },

    async create(userData) {
        const { country, city, street, streetNumber, ...postData } = userData;

        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        return result;
    },

    async delete(userId) {
        const res = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE',
        });
        const result = await res.json();
        return result;
    },

    async update(userId, userData) {
        const { country, city, street, streetNumber, ...postData } = userData;
        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();

        postData._id = userId;

        const res = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();
        return result;
    }
}


import axios from 'axios';

export async function login(email = 'test00@gmail.com', password = '1234') {
    const { data: result } = await axios.post('/api/auth', {
        principal: email,
        credentials: password,
    });
    return result.response;
}

export function setToken(token) {
    window.localStorage.setItem('token', JSON.stringify(token));
}

export function getToken() {
    return JSON.parse(window.localStorage.getItem('token'));
}

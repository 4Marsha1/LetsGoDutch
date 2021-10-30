import axios from 'axios';
class AuthResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'http://localhost:8000';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    loadUser(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "id": 24,
                        "name": "Abhishek Bharadwaz",
                        "email": "abhishekbharadwaz22@gmail.com",
                        "profile": 'https://picsum.photos/200',
                        "groups": [
                            {
                                'group_name': 'Farewell',
                                'group_title': '2021 Seniors Farewell',
                                'group_profile': 'https://picsum.photos/200',
                                'friends': [
                                    { name: 'Abhishek', id: 1 },
                                    { name: 'Bha', id: 2 },
                                    { name: 'Rad', id: 3 },
                                    { name: 'Waz', id: 4 }
                                ],
                                'expenses': {
                                    'food': 400,
                                    'travel': 500,
                                    'other': 900,
                                }
                            },
                            {
                                'group_name': 'Farewell 2019',
                                'group_title': '2019 Seniors Farewell',
                                'group_profile': 'https://picsum.photos/200',
                                'friends': [
                                    { name: 'Abhishek', id: 1 },
                                    { name: 'Bha', id: 2 },
                                    { name: 'Rad', id: 3 },
                                    { name: 'Waz', id: 4 }
                                ],
                                'expenses': {
                                    'food': 700,
                                    'travel': 1000,
                                    'other': 400,
                                }
                            }
                        ]
                    }
                });
            });
        }

        return axios.get(this.host + '...', config);
    }

    loginUser(email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'email': email,
            'password': password
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "user": {
                            "id": 29,
                            "name": "Abhishek Bharadwaz",
                            "email": "abhishekbharadwaz22@gmail.com",
                            "profile": 'https://picsum.photos/200',
                            "groups": [
                                {
                                    'group_name': 'Farewell',
                                    'group_title': '2021 Seniors Farewell',
                                    'group_profile': 'https://picsum.photos/200',
                                    'friends': [
                                        { name: 'Abhishek', id: 1 },
                                        { name: 'Bha', id: 2 },
                                        { name: 'Rad', id: 3 },
                                        { name: 'Waz', id: 4 }
                                    ],
                                    'expenses': {
                                        'food': 400,
                                        'travel': 500,
                                        'other': 900,
                                    }
                                },
                                {
                                    'group_name': 'Farewell 2019',
                                    'group_title': '2019 Seniors Farewell',
                                    'group_profile': 'https://picsum.photos/200',
                                    'friends': [
                                        { name: 'Abhishek', id: 1 },
                                        { name: 'Bha', id: 2 },
                                        { name: 'Rad', id: 3 },
                                        { name: 'Waz', id: 4 }
                                    ],
                                    'expenses': {
                                        'food': 700,
                                        'travel': 1000,
                                        'other': 400,
                                    }
                                }
                            ]
                        },
                        "token": "12345"
                    }
                });
            });
        }

        return axios.post(this.host + '...', data, config);
    }

    signupUser(profile, name, email, password) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'profile': profile,
            'name': name,
            'email': email,
            'password': password,
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    'data': {
                        "user": {
                            "id": 29,
                            "name": "Abhishek Bharadwaz",
                            "email": "abhishekbharadwaz22@gmail.com",
                            "profile": 'https://picsum.photos/200',
                            "groups": [
                                {
                                    'group_name': 'Farewell',
                                    'group_title': '2021 Seniors Farewell',
                                    'group_profile': 'https://picsum.photos/200',
                                    'friends': [
                                        { name: 'Abhishek', id: 1 },
                                        { name: 'Bha', id: 2 },
                                        { name: 'Rad', id: 3 },
                                        { name: 'Waz', id: 4 }
                                    ],
                                    'expenses': {
                                        'food': 400,
                                        'travel': 500,
                                        'other': 900,
                                    }
                                },
                                {
                                    'group_name': 'Farewell 2019',
                                    'group_title': '2019 Seniors Farewell',
                                    'group_profile': 'https://picsum.photos/200',
                                    'friends': [
                                        { name: 'Abhishek', id: 1 },
                                        { name: 'Bha', id: 2 },
                                        { name: 'Rad', id: 3 },
                                        { name: 'Waz', id: 4 }
                                    ],
                                    'expenses': {
                                        'food': 700,
                                        'travel': 1000,
                                        'other': 400,
                                    }
                                }
                            ]
                        },
                        "token": "12345"
                    }
                });
            });
        }

        return axios.post(this.host + '...', data, config);
    }

    logoutUser(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({});
            });
        }

        return axios.post(this.host + '...', {}, config);
    }
}

export default AuthResource;

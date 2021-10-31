import axios from 'axios';
class AuthResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'https://let-go-dutch.herokuapp.com';
        }
        // this.mock = (process.env.NODE_ENV !== 'production');
        this.mock = false;
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
                    }
                });
            });
        }

        return axios.get(this.host + '/users/data', config);
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
                        },
                        "token": "12345"
                    }
                });
            });
        }

        return axios.post(this.host + '/users/login', data, config);
    }

    signupUser(name, email, password,phone_no,profile_pic) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'profile': profile_pic,
            'name': name,
            'email': email,
            'password': password,
            'phone_no':phone_no
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
                        },
                        "token": "12345"
                    }
                });
            });
        }
        
        return axios.post(this.host + '/users/signup', data, config);
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

        return axios.post(this.host + '/users/logout', {}, config);
    }
}

export default AuthResource;

import axios from 'axios';
class CreateGroupResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'http://localhost:8000';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    createGroup(details, token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        const data = {
            'id': details.id,
            'group_name': details.group_name,
            'group_title': details.group_title,
            'friends': details.friends,
            'expenses': details.expenses
        }

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        'id': 1,
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
                    }
                });
            });
        }
        return axios
            .post(this.host + '/api/42A9126A50DC3B26/post/create-api/', data, config);
    }
}

export default CreateGroupResource;

import axios from 'axios';
class CreateGroupResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'https://let-go-dutch.herokuapp.com';
        }
        // this.mock = (process.env.NODE_ENV !== 'production');
        this.mock = false;
    }

    createGroup(details, token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        const data = {
            'name': details.group_name,
            'description': details.group_title,
            'members': details.friends,
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
        return axios.post(this.host + '/group/createGroup', data, config);
    }
}

export default CreateGroupResource;

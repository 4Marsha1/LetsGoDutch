import axios from "axios";
class GroupResource {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.host = "...";
        } else {
            this.host = "https://let-go-dutch.herokuapp.com";
        }
        // this.mock = process.env.NODE_ENV !== "production";
        this.mock =false;
    }

    getGroups(token) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        };

        if (this.mock) {
            return new Promise((resolve, reject) => {
                resolve({
                    data: [
                        {
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
                        },
                        {
                            'id': 2,
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
                });
            });
        }
        return axios.get(this.host + '/group/getAll', config)
    }
}

export default GroupResource;

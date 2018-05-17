const axios = require('axios');
const functions = {
    add: (num1,num2) => num1+num2,
    // add: function(num1,num2){
    //     return num1+num2
    // }
    isNull: () => null,
    checkValue: value =>value,
    createUser: () => {
        const user = {username: 'Prateek'};
        user['lastname'] = 'Madaan';
        return user;
    },
    fetchUser: () => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => res.data)
        .catch(err => 'error');
    }
};
module.exports = functions;
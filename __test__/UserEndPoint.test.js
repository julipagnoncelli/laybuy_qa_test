const axios = require('axios')

describe('Test User API', () => {
    it('Check Status Code is Successful (200)', async () => { 
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            expect(response.status).toBe(200)  
        } catch (exception) {
            throw Error(exception)
        }
    }),
    it('Validate 10 records are returned', async () => { 
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            expect(response.data.length).toBe(10)  
        } catch (exception) {
            throw Error(exception)
        }
    }),
    it('Validate you can retrieve data for a single user', async () => { 
        try {
            // https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
            var objectConstructor = ({}).constructor; 
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            expect(response.data.constructor).toBe(objectConstructor)
            expect(response.data.id).toBe(1)
        } catch (exception) {
            throw Error(exception)
        }
    }),
    it('Assert that the user “Mrs. Dennis Schulist” is contained in the list', async () => { 
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const result = response.data.filter((item) => item.name == 'Mrs. Dennis Schulist');
            expect(result.length).toBe(1)
            expect(result[0].name).toBe('Mrs. Dennis Schulist')  
        } catch (exception) {
            throw Error(exception)
        }
    })
})



    
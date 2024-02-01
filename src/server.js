import { createServer, Model, Response } from 'miragejs'

createServer({
    models: {
        users: Model,
        investments: Model,
    },

    seeds(server) {
        server.create('user', {
            id: '444',
            email: 'foo@foo.fo',
            firstName: '',
            lastName: '',
            age: '5',
        })

        server.create('investment', {
            id: '1',
            type: 'Gold',
            status: 'active',
            date: '02/02/2023',
            name: 'Safe Investment 2023',
            value: '250',
        })
        server.create('investment', {
            id: '2',
            type: 'Crypto',
            status: 'active',
            date: '03/02/2023',
            name: 'Gamble',
            value: '100',
        })
        server.create('investment', {
            id: '3',
            type: 'Gold',
            status: 'active',
            date: '03/02/2023',
            name: 'Child College fund',
            value: '50',
        })
        server.create('investment', {
            id: '4',
            type: 'Crypto',
            status: 'active',
            date: '03/02/2023',
            name: 'I feel lucky',
            value: '10',
        })
        server.create('investment', {
            id: '5',
            type: 'Crypto',
            status: 'active',
            date: '03/02/2023',
            name: 'I feel lucky',
            value: '10',
        })
        server.create('investment', {
            id: '6',
            type: 'Crypto',
            status: 'active',
            date: '03/02/2023',
            name: 'Does it even matter at the endddddddddddddddd',
            value: '40',
        })
    },

    routes() {
        this.namespace = 'api'
        this.logging = false
        this.timing = 1000
        this.passthrough('https://firestore.googleapis.com/**')
        
        this.get('/investments', (schema, request) => {
            return schema.investments.all()
        })

        this.post('/update-user', (schema, request) => {
            const { firstName, lastName, age, email } = JSON.parse(
                request.requestBody
            )

            const foundUser = schema.users.findBy({ email })
            if (!foundUser) {
                return new Response(
                    401,
                    {},
                    { message: 'No user with such email found!' }
                )
            }

            return {
                user: foundUser,
                message: 'Account Updated',
            }
        })
    },
})

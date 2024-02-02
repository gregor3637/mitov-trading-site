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
            lastName: 'John',
            age: '5',
        })

        server.create('investment', {
            id: '1',
            type: 'Stocks',
            status: 'active',
            date: '02/02/2023',
            name: 'Retirement illusion',
            value: '25000',
        })
        server.create('investment', {
            id: '2',
            type: 'Crypto',
            status: 'active',
            date: '03/02/2023',
            name: 'Honeymoon deposit',
            value: '2500',
        })
        server.create('investment', {
            id: '3',
            type: 'Gold',
            status: 'closed',
            date: '03/02/2023',
            name: 'Child College fund',
            value: '500',
        })
        server.create('investment', {
            id: '4',
            type: 'Crypto',
            status: 'active',
            date: '01/02/2013',
            name: 'OG Diamon Hands',
            value: '61234',
        })
        server.create('investment', {
            id: '5',
            type: 'Property',
            status: 'active',
            date: '03/02/2023',
            name: 'Bubble of all bubbles',
            value: '300000',
        })
        server.create('investment', {
            id: '6',
            type: 'Cash',
            status: 'active',
            date: '03/02/2023',
            name: 'Printer goes Brrr',
            value: '40000',
        })
        server.create('investment', {
            id: '6',
            type: 'Stocks',
            status: 'active',
            date: '03/02/2023',
            name: 'mr. Powell gamble',
            value: '60000',
        })
        // server.create('investment', {
        //     id: '7',
        //     type: 'Cash',
        //     status: 'active',
        //     date: '03/02/2023',
        //     name: 'Emergency',
        //     value: '1100',
        // })

        // server.create('investment', {
        //     id: '8',
        //     type: 'Crypto',
        //     status: 'active',
        //     date: '03/02/2023',
        //     name: 'I feel lucky',
        //     value: '10',
        // })
        // server.create('investment', {
        //     id: '9',
        //     type: 'Property',
        //     status: 'active',
        //     date: '03/02/2023',
        //     name: 'I feel lucky',
        //     value: '50',
        // })
        // server.create('investment', {
        //     id: '10',
        //     type: 'Stocks',
        //     status: 'closed',
        //     date: '03/02/2023',
        //     name: 'Casino money',
        //     value: '250',
        // })
    },

    routes() {
        this.namespace = 'api'
        this.logging = false
        this.timing = 1000
        this.passthrough('https://firestore.googleapis.com/**')

        this.post('/user', (schema, request) => {
            const { email } = JSON.parse(request.requestBody)
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
                message: 'Account Found',
                ok: true,
            }
        })

        this.patch('/update-user', (schema, request) => {
            const { firstName, lastName, age, email } = JSON.parse(
                request.requestBody
            )

            const foundUser = schema.users.findBy({ email }).update({ firstName, lastName, age })
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
                ok: true,
            }
        })

        this.get('/investments', (schema, request) => {
            return schema.investments.all()
        })

        this.post('/new-investment', (schema, request) => {
            const req = JSON.parse(request.requestBody)
            const newInvestment = { status: 'active', ...req }

            const items = schema.investments.create(newInvestment)

            return {
                message: 'Investment Successfully Opened',
                items: items,
                ok: true,
            }
        })

        this.patch('/close-investments', function (schema, request) {
            const req = JSON.parse(request.requestBody)
            const item = schema.investments
                .find(req.id)
                .update({ status: 'closed' })
            return {
                message: 'Investment Successfully Closed',
                item: item,
                ok: true,
            }
        })
    },
})

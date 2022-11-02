const UserRepository = require('./user-repository');
const { MongoClient } =  require('mongodb');


describe('UserRepository', () => {

    let userRepository;
    let collection;
    let client;

    beforeAll(async () => {
        const uri = "mongodb://root:root@192.168.99.100:27017?retryWrites=true&writeConcern=majority"
        client = new MongoClient(uri)
        await client.connect();
        collection = client.db('users_db').collection('users');
        userRepository = new UserRepository(collection);
    })



    afterAll(async () => {
        await client.close();
    })

   
    describe('findOneByEmail', () =>{

        test('Deve retoruna o usuario jonn@doe.com', async () => {

            const result = await collection.insertOne({
                name: 'Jonh Doe',
                email:'jonn@doe.com'
            });

            const user = await userRepository.findOneByEmail('jonn@doe.com');

            expect(user).toStrictEqual({
                _id: result.insertedId,
                name: 'JonhDoe',
                email: 'jonn@doe.com'
                })
        })
        test.todo('Deve lança uma exceção para um  usuario nao existente')
    })

    describe('insert', () =>{

        test.todo('Inserir um novo usuario')
    })

    describe('update', () =>{

        test.todo('Deve Atualizar o  usuario existente')
        test.todo('Deve lança uma exceção para um  usuario nao existente')
    })

    describe('delete', () =>{

        test.todo('Deve remove o usuario ')
        test.todo('Deve lança uma exceção para um  usuario nao existente')
    })

    describe('findAll', () =>{

        test.todo('Deve retoruna uma lista vazia de usuario')
        test.todo('Deve retorna um lista usuario ')
    })
})
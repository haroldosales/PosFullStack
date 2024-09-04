const UserApi = require('./user-api')  

describe("UserApi", () => {

    describe("findAll", () => {
        test("deve retorna lista de usuario", () =>{

            const userApi = new UserApi()

            return userApi.findAll().then(users =>{
                expect(users.length).toBeGreaterThan(0)
              })

            
        })
    })

    describe("findOne", () => {
        test("Deve retorna um usuario existente", () => {
            const userApi = new UserApi()

            return userApi.findOne(1).then(user =>{
                expect(user.id).toBe(1)
            
              })
        })

        test("Deve lança uma execção para usuario inexistente", () => {
            const userApi = new UserApi()

            return userApi.findOne(1000000).catch(exception =>{
                expect(exception.message).toBe('User 1000000 was not found')
              })
        })
    })


})
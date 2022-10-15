const UserApi = require('./user-api')

describe("UserApi", () => {

  describe("findAll", () => {
    test("Deve Retornar lista de usuario", () => {

      const userApi = new UserApi()

      return userApi.findAll().then(users => {
        expect(users.length).toBeGreaterThan(0)
      })
    });
  })

  describe("findOne", () => {
    test("Deve retorna um usuario existente", () => {
      const userApi = new UserApi()

      return userApi.findOne(1).then(user => {
        expect(user.id).toBe(1)

      });
      test("Deve Lançar uma exerceção usuario nao existe", () => {
        const userApi = new UserApi()

        return userApi.findOne(100000).cat(exception => {
          expect(exception.message).toBe('User id was not found')
        })
      });
    })
  })
})
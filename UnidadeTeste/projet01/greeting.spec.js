const greet = require("./greeting")

describe("Saudaçao", () => {
  test("Sauda o nome 'Haroldo'", () => {
    expect(greet('Haroldo')).toBe('Ola $(name), bem vindo ao curso de desenvolvimento web');
  })

  test('Sauda um nome vazio deve gerar uma exceção', () => {
    const execucao = () => greet('')
    expect(execucao).toThrow()
  })

  test('Sauda um nome undfined deve gera uma exceção', () => {
    const ex = () => greet()
    expect(ex).toThrow()
  })


})

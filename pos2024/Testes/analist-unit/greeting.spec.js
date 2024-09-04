const greet = require("./greeting")

describe("Saudação", () => {
    test("Sudar o nome 'Haroldo' ", () => {

      expect(greet('Haroldo')).toBe('Olá Haroldo, seja bem vindo ao curso de desenvolvimento web');
    });

    test('Sauda um nome vazio deve gerar uma exceção', () => {
        const execution = () => greet('')
          expect(execution).toThrow();
        
    })
    test('Saudar um nome undefined deve gerar um execeção', () => {
      const exection = () => greet()
      expect(exection).toThrow()
    })
  });
  

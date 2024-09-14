const twoSum = require('./TwoSum');            

describe("Two Sum Problem", () => {
    test("0, [] deve gerar execeçao", () => {
     const execution = () => twoSum(0,[])
     expect(execution).toThrow('Array deve conter pelo menos dois numeros')
    });

    test("0, [0] deve gerar exerceção", () => {
        const execution = () => twoSum(0,[0])
        expect(execution).toThrow('Array deve conter pelo menos dois numeros')
    })

    test("0, [0,0] deve retorna [0,0]", () => {
        expect(twoSum(0,[0, 0])).toStrictEqual([0,0])
    });

    test.only("1, [0,1] deve retorna [0,1" ,() => {
        expect(twoSum(1, [0, 1])).toStrictEqual([0,1])
    })
})
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    { id: 1, descricao: "blusa", marca: "Nike", preco: 49.0 },
    { id: 2, descricao: "calça", marca: "leis ", preco: 89.0 },
    { id: 3, descricao: "short", marca: "Nike", preco: 99.0 },
    { id: 4, descricao: "tenis", marca: "Nike", preco: 490.0 },
    { id: 5, descricao: "meia", marca: "Nike desh", preco: 40.0 },
    { id: 6, descricao: "regada V", marca: "Nike sa", preco: 49.0 },
    { id: 7, descricao: "calçca jeans", marca: "Nike", preco: 99.0 },
    { id: 8, descricao: "pijma", marca: "tes", preco: 29.0 },
    { id: 9, descricao: "cueca", marca: "Hgm", preco: 59.0 },
    { id: 10, descricao: "Camisa", marca: "Ral", preco: 29.0 },
  
  ]);
};

const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const resultFunction = productDetails('banana', 'doce de leite');
  
  console.log(resultFunction[1].details.productId);
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // teste se productDetails é uma função.
    expect(typeof(productDetails)).toEqual('function');
  });
  it('Verifica se o retorno da função é um array', () => {
    // Teste se o retorno da função é um array.
    expect(Array.isArray(resultFunction)).toBeTruthy();
  });
  it('Verifica se o array contém dois itens', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(resultFunction).toHaveLength(2);
  });
  it('Verifica se os itens do array são objetos', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof(resultFunction[1])).toBe('object');
    expect(typeof(resultFunction[0])).toBe('object');
  });
  it('Verifica se quando passado parâmetros diferentes, os dois objetos também são diferentes', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(resultFunction[0]).not.toEqual(resultFunction[1]);
  });
  it('Verifica se os dois productIds terminam com 123', () => {
    // Teste se os dois productIds terminam com 123.
    const productId = resultFunction[0].details.productId;
    const productId2 = resultFunction[1].details.productId;
    const finalId = productId.slice(productId.length - 3);
    const finalId2 = productId2.slice(productId2.length - 3);
    const totalId = `${finalId}${finalId2}`
    expect(totalId).toBe('123123');
  });
});

const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']
    
    meuRestaurante.pay() // Retorno: 4.29
    
    IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
    */
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  // it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    //   fail('Teste vazio!');
    // });
  
  it("Verifica se a função 'createMenu()' retorna um objeto com chave 'fetchMenu' e valor de function", () => {

    const objetoRetornadoVazio = createMenu();
    expect(objetoRetornadoVazio).toHaveProperty('fetchMenu');
  });
  
  it("Verificar se 'objetoRetornado.fetchMenu()' retorna um objeto com chaves 'food' e 'drink'. Considerando que a função createMenu() foi chamada com o objeto: { food: {}, drink: {} } ", () => {
    
    const objetoRetornado = createMenu({food: {}, drink: {}});
    expect(Object.keys(objetoRetornado.fetchMenu())).toHaveLength(2);
    expect(Object.keys(objetoRetornado.fetchMenu())).toContain('food');
    expect(Object.keys(objetoRetornado.fetchMenu())).toContain('drink');
  });
  
  it("Verificar se o menu passado para a função 'createMenu()' é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()' ", () => {

    const objetoRetornadoComItens = createMenu({food: {coxinha: 3.90, sanduiche: 9.90}, drink: {agua: 3.90, cerveja: 6.90}});
    expect(objetoRetornadoComItens.fetchMenu()).toMatchObject({food: {coxinha: 3.90, sanduiche: 9.90}, drink: {agua: 3.90, cerveja: 6.90}});
  });

  it("Verifica se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.", () => {

    const objetoRetornado = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })
    expect(objetoRetornado.consumption).toEqual([]);
  });

  it(`Verifica se, ao chamar uma função associada à chave 'order' no objeto retornado, passando uma string como parâmetro
  - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
  - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array`, () => {
    // 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro
    // - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
    // - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
    // Ex: obj.order('coxinha') --> ['coxinha']
    // Ex: obj.order('picanha') --> Exibe "Item indisponível"
    const objetoRetornado = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })
    objetoRetornado.order('coxinha');

    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    expect(objetoRetornado.order('dinheiro')).toBe('Item indisponível');
  });


  it('Verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const objetoRetornado = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })
    objetoRetornado.order('agua');
    objetoRetornado.order('cerveja');
    objetoRetornado.order('sanduiche');
    expect(objetoRetornado.consumption).toEqual(['agua', 'cerveja', 'sanduiche']);
  });

  it('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    
    const objetoRetornado = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })
    objetoRetornado.order('agua');
    objetoRetornado.order('agua');
    expect(objetoRetornado.consumption).toEqual(['agua', 'agua']);
  });

  it('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.', () => {
    const objetoRetornado = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })
    objetoRetornado.order('agua');
    objetoRetornado.order('agua');

    expect(objetoRetornado.pay()).toEqual(8.58);
  });
});

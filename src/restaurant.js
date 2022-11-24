/* eslint-disable max-len */

const createMenu = (objetoFoodDrink) => {
  const objeto = {
    fetchMenu: () => objetoFoodDrink,
    consumption: [],
    order: (string) => {
      const { food, drinks } = objeto.fetchMenu();
      if (Object.keys(food).includes(string) || Object.keys(drinks).includes(string)) {
        objeto.consumption.push(string);
      } else {
        return 'Item indisponível';
      }
    },
    pay: () => {
      const { food, drinks } = objeto.fetchMenu();
      let conta = 0;
      const allFood = {};
      Object.assign(allFood, food, drinks);
      for (const iterator of objeto.consumption) {
        if (Object.keys(allFood).includes(iterator)) {
          conta += allFood[iterator]; 
        }
      }
      conta *= 1.1;
      return conta;
    },
  };
  return objeto;
};
const teste = createMenu({
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drinks: { agua: 3.90, cerveja: 6.90 },
});
teste.order('agua');
teste.order('agua');
// console.log(teste.order('coxinha'));
// console.log(teste.consumption);
console.log(teste.pay());

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;

/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

let numbers = [5, 10, 15, 20, 25];
numbers.forEach(function (number, index, array) {
  console.log("num", number);
  //   array[index] = 20;
});

console.log(numbers);

//
/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */
const dobleNums = numbers.map(function (number) {
  console.log(number);

  return number * 2;
});
console.log(dobleNums);

let players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 280, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map((player) => player.name);
console.log(playerNames);

const playersIds = players.map((player) => player.id);

console.log(playersIds);

const res = players.map(({ name, online }) => ({
  name,
  online,
}));
console.log(res);
let updatePlayers = players.map((player) => ({
  ...player,
  points: player.points * 1.1,
}));
console.table(updatePlayers);
console.log(updatePlayers);
//

// увиличивает кол-во часов
const playerIdToUpdate = "player-3";

updatePlayers = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 10000 }
    : player
);
console.table(updatePlayers);

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

const filteredNumer = numbers.filter((number) => number < 10 || number > 20);
console.log(filteredNumer);

const onlinePlayers = players.filter((player) => player.online);
console.table(onlinePlayers);
const offlinePlayers = players.filter((player) => !player.online);
console.table(offlinePlayers);

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
console.table(hardcorePlayers);

const number = numbers.find((number) => number > 10);
console.log(number);
const playerToFind = "player-3";

const playerWitnFind = players.find((player) => player.id === playerToFind);
console.log(playerWitnFind);

const playerNameToFind = "Poly";
const playerWithName = players.find(({ name }) => name === playerNameToFind);
console.log(playerWithName);
const findPlayerById = (allPlayer, playerId) =>
  allPlayer.find(({ id }) => id === playerId);
console.log(findPlayerById(players, "player-1"));
console.log(findPlayerById(players, "player-3"));
console.log(findPlayerById(players, "player-4"));

const isAllOnline = players.every((player) => player.online);
console.log(isAllOnline);

const isAnyOne = players.some((player) => player.online);
console.log(isAnyOne);
const anyHardcorePlayer = players.some((player) => player.timePlayed > 400);
console.log(anyHardcorePlayer);

let total = numbers.reduce((acc, number) => {
  console.log("num", number);
  console.log("acc", acc);
  return acc + number;
}, 0);
console.log(total);
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  1000
);
console.log(totalSalary);
console.log(Object.values(salary));
const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
console.log(totalTimePlayed);
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];
const totalAmount = cart.reduce(
  (totalAmn, { price, quantity }) => totalAmn + price * quantity,
  0
);
console.log(totalAmount);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce(
  (tags, tweet) => [...tags, ...tweet.tags],
  //   tags.push(...tweet.tags);
  //   return [...tags, ...tweet.tags];
  []
);
console.log(allTags);

const tagsStats = allTags.reduce(
  (acc, tag) => ({
    //   if (acc[tag]) {
    //     // acc[tag] += 1;
    //     return { ...acc, [tag]: acc[tag] + 1 };
    //   }
    //   //   acc[tag] = 1;
    //   return { ...acc, [tag]: (acc[tag] = 1) };

    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
console.log(tagsStats);
const user = {
  name: "Mango",
  name: "Poly",
};
const key = "name";
console.log(user[key]);
// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
const letters = ["b", "B", "a", "A"];
numbers.sort();
console.log(numbers);

letters.sort();
console.log(letters);
numbers = [1, 9, 6, 2, 3];

numbers.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
console.log(numbers);

const copy = [...numbers];
console.log(copy === numbers);
const sortedNumbers = [...numbers].sort((a, b) => b - a);
const asksortedNumbers = [...numbers].sort((a, b) => a - b);

console.log(sortedNumbers);
console.log(asksortedNumbers);
/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */
/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */
//
//
const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers);

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];
  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.table(byName);

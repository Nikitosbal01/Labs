function fn() {
  const user1 = {name: "Nikita"};
  let user2 = {name: "Misha"};

  user1.name = "Artem";
  user2.name = "Dima";

  // user1 = { name: 'Volodia' }; Тут буде помилка, бо user1 оголошено через const, а user2 через let, тому його можна змінювати.
  user2 = {name: "Lev"};

  return {user1, user2};
}

console.log(fn());
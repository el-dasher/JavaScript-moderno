"use strict";

window.addEventListener("load", () => {
  doSpread();
  infiniteSum();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === "Mr"
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === "Ms"
  );

  const marriedPeople = [
    ...marriedMen,
    ...marriedWomen,
    { msg: "Lorem ipsum dolor sit amet..." },
  ];

  return marriedPeople;
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const first = people.results[0];

  // Repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // Destructuring
  const { username, password } = first.login;

  return {
    username: username,
    password: password,
  };
}

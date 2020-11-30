"use strict";

window.addEventListener("load", () => {
  doNameEmailMap();
  doOlderFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doNameEmailMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  return nameEmailArray;
}

function doOlderFilter() {
  const isOlderThan40yOr40y = people.results.filter((person) => {
    return person.dob.age >= 40;
  });

  return isOlderThan40yOr40y;
}

function doForEach() {
  const mappedPeople = doNameEmailMap();

  mappedPeople.forEach((person) => {
    person.NameSize = toString(
      person.title + person.first + person.last
    ).length;
  });

  return mappedPeople;
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  return totalAges;

  // let sum = 0
  // for (let i = 0; i < people.results.length; i++) {
  //     let current = people.results[i];
  //     sum += current.dob;
  // }

  // console.log(sum);
}

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === "Minas Gerais";
  });

  return found;
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === "Amazonas";
  });

  return found;
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === "BR";
  });

  return every;
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => {
      return person.name.startsWith("A");
    })
    .sort((x, y) => {
      // return x.name.localeCompare(y.name);
      return x.name.length - y.name.length;
    });

  return mappedNames;
}

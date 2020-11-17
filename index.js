function wakeDog(dogName, dogBreed) {
  let c = `Wake ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}
function leashDog(dogName, dogBreed) {
  let c = `Leash ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}
function walkToPark(dogName, dogBreed) {
  let c = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}
function throwFrisbee(dogName, dogBreed) {
  let c = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}
function walkHome(dogName, dogBreed) {
  let c = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}
function unleashDog(dogName, dogBreed) {
  let c = `Unleash ${dogName} the ${dogBreed}`;
  console.log(c);
  return c;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(dogName, dogBreed) {
  let newArray = [];
  for (let i = 0; i < routine.length; i++) {
    const element = routine[i];
    newArray.push(element(dogName, dogBreed));
  }
  return newArray;
}

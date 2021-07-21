// const first = () => {
//   console.log('Hey there');
//   second();
//   console.log('The end');
// };
// const second = () => {
//   setTimeout(() => {
//     console.log('second');
//   }, 1000);
// };

// first();

/////////////////////////////////////////

// setTimeout(function() {
//   console.log('Hey, why am I last?');
// }, 0);
// function sayHi() {
//   console.log('Hello');
// }
// function sayBye() {
//   console.log('Goodbye');
// }
// sayHi();
// sayBye();

//////////////////////////////////////

//// Simulating data load from a server using callback hell.

// function getRecipe() {
//   setTimeout(() => {
//     const recipeIds = [12, 13, 14, 15, 16, 17];
//     console.log(recipeIds);
//     setTimeout(
//       recipeId => {
//         // logic to get recipe by recipeId
//         recipe = {
//           item: 'cake',
//           publisher: 'Ashutosh',
//           descpription: "Let's bake a nice cake"
//         };
//         console.log(
//           `The recipe with id ${recipeId} is ${recipe.item} publshed by ${
//             recipe.publisher
//           }`
//         );
//       },
//       1000,
//       recipeIds[1]
//     );
//   }, 1000);
// }

// getRecipe();

////////////////////////////////////////

// Escaping callback hell using Promise

// Creating the promises.
const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    const recipeIds = [12, 13, 14, 15, 16, 17];
    resolve(recipeIds);
    // reject(new Error('Promise rejected'));
  }, 2000);
});

const getRecipe = recipeId => {
  return new Promise((resolve, reject) => {
    setTimeout(
      recipeId => {
        recipe = {
          item: 'cake',
          publisher: 'Ashutosh',
          descpription: "Let's bake a nice cake"
        };
        resolve(
          `The recipe with id ${recipeId} is ${recipe.item} publshed by ${
            recipe.publisher
          }`
        );
      },
      1000,
      recipeId
    );
  });
};

//consuming the promises
// getIds
//   .then(ids => {
//     console.log(ids);
//     return getRecipe(ids[0]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .then.catch(err => {
//     console.log(err.message);
//   });

//// Using Async await to consume the promises.

async function getRecipeAsync() {
  const Ids = await getIds;
  console.log(Ids);
  const recipe = await getRecipe(Ids[0]);
  console.log(recipe);
}
getRecipeAsync();

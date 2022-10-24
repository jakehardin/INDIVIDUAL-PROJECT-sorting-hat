const pets = [
{
  id: 30,
name: "Dave",
color: "Red",
specialSkill: "Use to think conspiracy theories were fun.",
type: "dino",
imageUrl: "https://www.lintelligencer.com/wp-content/uploads/2020/07/Study-Famous-Jurassic-Park-dinosaur-the-Dilophosaurus-was-bigger-and-more-powerful-than-the-1993-film-shows.jpg"
}
];

const app = document.querySelector("#app");


const renderToDom = (divId, htmlToRender) => {
const selectedDiv = document.querySelector(divId);
selectedDiv.innerHTML = htmlToRender;
};

const petsOnDom = (array) => {
let domString = "";
for (const animal of array) {
domString += `<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="card-header">${animal.name}</div>
      <p class="card-text">${animal.color}</p>
      <button class="btn btn-danger" id="delete--${animal.id}">Delete</button>
    </div>
  </div>
</div>
</div>`;
}

renderToDom("#app", domString);
}


const filter = (array, petTypeString) => {
const petTypeArray = [];

for (const animal of array) {
if (animal.type === petTypeString) {
petTypeArray.push(animal);
}
}

return petTypeArray;
}

const allPetsButton = document.querySelector("#all-button");

const dogsButton = document.querySelector("#dog-button");

const catsButton = document.querySelector("#cat-button");

const dinosButton = document.querySelector("#dino-button");

allPetsButton.addEventListener('click', () => {
petsOnDom(pets);
});

dogsButton.addEventListener('click', () => {
const petsAreDogs = filter(pets, 'dog');
petsOnDom(petsAreDogs);
});

catsButton.addEventListener('click', () => {
const petsAreCats = filter(pets, 'cat');
petsOnDom(petsAreCats);
});

dinosButton.addEventListener('click', () => {
const petsAreDinos = filter(pets, 'dino');
petsOnDom(petsAreDinos);
});

const form = document.querySelector('form');

const createPet = (e) => {
e.preventDefault(); // EVERY TIME YOU CREATE A FORM

const newPetObj = {
id: pets.length + 1,
name: document.querySelector("#name").value,
}

pets.push(newPetObj);
petsOnDom(pets);
form.reset();
}

form.addEventListener('submit', createPet);







app.addEventListener('click', (e) => {
// 3. check e.target.id includes "delete"
if (e.target.id.includes("delete")) {
const [, id] = e.target.id.split("--");

// 4. add logic to remove from array
const index = pets.findIndex(e => e.id === Number(id));
pets.splice(index, 1);

// 5. Repaint the DOM wiconst app = document.querySelector("#app");th the updated array
petsOnDom(pets);
}
});

const startApp = () => {
petsOnDom(pets);
events(); // ALWAYS LAST
}

startApp();

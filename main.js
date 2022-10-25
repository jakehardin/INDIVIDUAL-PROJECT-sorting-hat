const pets = [
{
  id: 30,
name: "Harry Potter",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Griffyndor",
imageUrl: "https://pndblog.typepad.com/.a/6a00e0099631d0883301b7c905fa29970b-800wi"
},

{
  id: 30,
name: "Hermoine Granger",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Griffyndor",
imageUrl: "http://images4.fanpop.com/image/photos/20000000/Hermione-Granger-hermione-granger-20053436-936-1197.jpg"
},

{
  id: 30,
name: "Ron Weasley",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Griffyndor",
imageUrl: "https://pm1.narvii.com/6912/a1ec19d6f11bf0557674c1d84c4c81510b640e9br1-315-399v2_hq.jpg"
},

{
  id: 30,
name: "Draco Malfoy",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Slytherin",
imageUrl: "http://media3.popsugar-assets.com/files/2014/08/12/890/n/1922283/60159972105ee0e2_-Harry-Potter-the-Philosophers-Stone-dramione-bRmhEa.xxxlarge_2x/i/Draco-Malfoy-played-Tom-Felton.jpg"
},

{
  id: 30,
name: "Jesse Pinkman",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Hufflepuff",
imageUrl: "https://vignette.wikia.nocookie.net/wfl/images/5/55/Jesse_Pinkman.jpg/revision/latest?cb=20190308081818"
},

{
  id: 30,
name: "Walter White",
color: "Griffyndor",
specialSkill: "Use to think conspiracy theories were fun.",
type: "Ravenclaw",
imageUrl: "https://yt3.ggpht.com/a/AATXAJzaZnwwtOHktX2TAdmzGxKd7HP9GbiPcUWZ7A=s900-c-k-c0xffffffff-no-rj-mo"
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
    <img src="${animal.imageUrl}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="card-header">${animal.name}</div>
      <p class="card-text">${animal.type}</p>
      <button class="btn btn-danger" id="delete--${animal.id}">Expel</button>
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

const dogsButton = document.querySelector("#grif-button");

const slythButton = document.querySelector("#slyth-button");

const catsButton = document.querySelector("#cat-button");

const dinosButton = document.querySelector("#dino-button");

allPetsButton.addEventListener('click', () => {
petsOnDom(pets);
});

dogsButton.addEventListener('click', () => {
const petsAreDogs = filter(pets, 'Griffyndor');
petsOnDom(petsAreDogs);
});

slythButton.addEventListener('click', () => {
const petsAreSlyth = filter(pets, 'Slytherin');
petsOnDom(petsAreSlyth);
});

catsButton.addEventListener('click', () => {
const petsAreCats = filter(pets, 'Hufflepuff');
petsOnDom(petsAreCats);
});

dinosButton.addEventListener('click', () => {
const petsAreDinos = filter(pets, 'Ravenclaw');
petsOnDom(petsAreDinos);
});

const form = document.querySelector('form');

const createPet = (e) => {
e.preventDefault(); // EVERY TIME YOU CREATE A FORM

const newPetObj = {
id: pets.length + 1,
name: document.querySelector("#name").value
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

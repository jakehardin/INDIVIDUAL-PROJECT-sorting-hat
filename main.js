const students = [];
const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
const expelledStudents = [];

const sortButton = document.querySelector('#sort-me');
const form = document.querySelector('#formContainer');
const submitButton = document.querySelector('#submit');
const app = document.querySelector('#app');

const renderToDom = (divId, htmlToRender) => {
const selectedDiv = document.querySelector(divId);
selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
let domString = "";
for (const member of array) {
domString += `<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${member.imageUrl}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
    <div class="card-header">${member.name}</div>
      <p class="card-text">${member.house}</p>
      <button class="btn btn-danger" id="delete--${member.id}">Expel</button>
    </div>
  </div>
</div>
</div>`;
}
renderToDom("#studentContainer", domString);
}

const voldysArmy = (array) => {
  let domString = "";
  for (const member of array) {
  domString += `<div class="card" style="width: 18rem;">
  <img src="http://images5.fanpop.com/image/polls/871000/871394_1320484350081_full.jpg" class="card-img-top" alt="Death eater symbol">
  <div class="card-body">
    <p class="card-text">${member.name} has joined VOLDEMORT'S army!</p>
  </div>
</div>`;
  }

renderToDom("#expelledContainer", domString);
}

const createStudent = (e) => {
  e.preventDefault();
     const newStudent = {
      id: students.length + 1,
      name: document.querySelector('#studentName').value,
      house: houses[Math.floor(Math.random() * houses.length)]
    };
  
    students.push(newStudent);
    document.querySelector('#submitStudent').reset();
    renderToDom('#formContainer', "");
    cardsOnDom(students);
  }

  sortButton.addEventListener('click', () => {
    let domString = `<form id="submitStudent"><div class="form-floating mb-3 col-sm-5">
    <input type="text" class="form-control" id="studentName" placeholder="student name">
    <label for="floatingInput">Name</label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit">Submit</button></form>`;
    renderToDom('#formContainer', domString);
  })

  
  form.addEventListener('submit', createStudent);

  app.addEventListener('click', (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
  
      
      const index = students.findIndex(e => e.id === Number(id));
      
      const banish = students.splice(index, 1);
      
      expelledStudents.push(banish[0]);
      console.log(expelledStudents);
      voldysArmy(expelledStudents)
     
  
      
      renderToDom('#expelledContainer', voldysArmy());
    }
  });

  const filter = (array, studentHouseString) => {
    const studentHouseArray = [];
    
    for (const member of array) {
    if (member.house === studentHouseString) {
    studentHouseArray.push(member);
    }
    }
    
    return studentHouseArray;
    }

  const grifButton = document.querySelector("#grifButton");

  const slythButton = document.querySelector("#slythButton");
  
  const huffButton = document.querySelector("#huffButton");
  
  const ravButton = document.querySelector("#ravButton");
  
  grifButton.addEventListener('click', () => {
  const studentsAreGrif = filter(students, 'Gryffindor');
  cardsOnDom(studentsAreGrif);
  });
  
  slythButton.addEventListener('click', () => {
  const studentsAreSlyth = filter(students, 'Slytherin');
  cardsOnDom(studentsAreSlyth);
  });
  
  huffButton.addEventListener('click', () => {
  const studentsAreHuff = filter(students, 'Hufflepuff');
  cardsOnDom(studentsAreHuff);
  });
  
  ravButton.addEventListener('click', () => {
  const studentsAreRav = filter(students, 'Ravenclaw');
  cardsOnDom(studentsAreRav);
  });

  const startApp = () => {
    cardsOnDom(students);
    voldysArmy();
  }
  startApp();

let sum = 0;
let cnt = 0;
let stdArr = [];

function CheckValidElement() {
  let isValid = true;
  let name = document.getElementById("Name");
  let grade = document.getElementById("grade");
  let photo = document.getElementById("Photo");

  if (!/^[a-zA-Z]+$/.test(name.value) || name.value.length < 3) {
    isValid = false;
    alert("Short Name or not Valid");
  } else if (
    !/^[0-9]+$/.test(grade.value) ||
    grade.value > 100 ||
    grade.value < 0
  ) {
    isValid = false;
    alert("Invalid grade");
  } else if (name.value != "" && grade.value != "" && isValid) {
    {
      let D = new Date();
      let time =
        D.getHours() +
        ":" +
        D.getMinutes() +
        " " +
        D.getDay() +
        "/" +
        D.getMonth() +
        "/" +
        D.getFullYear();
      addToTable(name.value, Number.parseInt(grade.value), time, photo.value);
      var obj = {
        student_name: name.value,
        student_grade: Number.parseInt(grade.value),
        Student_time: time,
        student_Photo: photo.value,
      };
      saveToStorage(obj);
      name.value = "";
      grade.value = "";
      photo.value = "";
    }
  }
}
function addToTable(stdName, stdGrade, time, photo) {
  let Tbodyy = document.getElementById("Tbodyy");
  let cntSpan = document.getElementById("cnt");
  let avgSpan = document.getElementById("avg");

  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let gradeTd = document.createElement("td");
  let timeTD = document.createElement("td");
  let photoTD = document.createElement("td");

  let nameLabel = document.createElement("label");
  let gradeLabel = document.createElement("label");
  let timeLabel = document.createElement("label");
  let photoLabel = document.createElement("img");

  cnt++;
  sum += stdGrade;
  nameLabel.textContent = stdName;
  gradeLabel.textContent = stdGrade;
  timeLabel.textContent = time;
  photoLabel.src = photo;

  cntSpan.textContent = cnt;
  avgSpan.textContent = Math.floor(sum / cnt);

  nameTd.appendChild(nameLabel);
  gradeTd.appendChild(gradeLabel);
  timeTD.appendChild(timeLabel);
  photoTD.appendChild(photoLabel);

  nameTd.classList.add("stdDiv1");
  gradeTd.classList.add("stdDiv1");
  timeTD.classList.add("stdDiv1");
  photoTD.classList.add("stdDiv1");

  nameTd.classList.add("tdDivider");
  gradeTd.classList.add("tdDivider");
  timeTD.classList.add("tdDivider");
  photoTD.classList.add("tdDivider");

  tr.appendChild(nameTd);
  tr.appendChild(gradeTd);
  tr.appendChild(timeTD);
  tr.appendChild(photoTD);

  Tbodyy.appendChild(tr);
}

function saveToStorage(obj) {
  stdArr.push(obj);
  localStorage.setItem("Student_Grades", JSON.stringify(stdArr));
}

function getLocalStorage() {
  if (localStorage.getItem("Student_Grades")) {
    stdArr = JSON.parse(localStorage.getItem("Student_Grades"));
    for (let i of stdArr) {
      addToTable(
        i.student_name,
        i.student_grade,
        i.Student_time,
        i.student_Photo
      );
    }
  }
}
getLocalStorage();
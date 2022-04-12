const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const gender = document.querySelector("#gender");




submit.addEventListener("click", (event) => {
  document.querySelector(".fname").innerText = fname.value;
  document.querySelector(".lname").innerText = lname.value;
  document.querySelector(".email").innerText = email.value;
  document.querySelector(".password").innerText = password.value;
  document.querySelector(".date").innerText = date.value;
  document.querySelector(".month").innerText = month.value;
  document.querySelector(".year").innerText = year.value;
  document.querySelector(".gender").innerText = gender.value;
  document.querySelector(".pronoun").innerText = pronoun.value;


  event.preventDefault();
});

/*-----
const fname = document.querySelector("#fname");
const submit = document.querySelector("#submit");


submit.addEventListener("click", (event) => {
  document.querySelector(".fname").innerText = fname.value;
  document.querySelector(".lname").innerText = lname.value;
  document.querySelector(".email").innerText = email.value;
  document.querySelector(".password").innerText = password.value;

  event.preventDefault();
});

----*/

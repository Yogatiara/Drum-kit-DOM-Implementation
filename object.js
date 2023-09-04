const users1 = {
  name: "Yoga",
  age: 20,
  programinglanguage: ["Golang", "Javascript", "Java"]
}

const users2 = {
  name: "Ale",
  age: 24,
  programingLanguage: ["Python", "Java", "php", "C++", "C#",]
}

const users3 = {
  name: "Rajab",
  age: 19,
  programinglanguage: ["Ruby", "Mathlab", "Kotlin"]
}

// constructor function
function UserFSW(name, age, programingLanguage) {
  this.name = name,
    this.age = age,
    this.programingLanguage = programingLanguage
}

// inisialisasi  object
const student1 = new UserFSW("Hafish", 20, ["Python", "Java"])
const student2 = new UserFSW("Andrian", 17, ["Koltlin", "PHP"])

console.log(student2)
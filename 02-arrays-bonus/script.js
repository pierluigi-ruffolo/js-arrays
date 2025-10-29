const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
/*  CON METODO ARRAY */
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);
/*  CON CICLO */
const reverse = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reverse.push(teachers[i]);
}
console.log(reverse);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
/* CON METODO ARRAY */
const names = teachers.filter((teacher) => teacher.length >= 5);
console.log(names);
/* CON CICLO */
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
/* CON METODO ARRAY */
teachers.splice(5, 1);
console.log(teachers);
/* CON CICLO */
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Ed") {
    teachers.splice(i, 1);
  }
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
/* CON METODO ARRAY */
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);
/* CON CICLO */
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === "Fabio") {
    const fabio = true;
    console.log(fabio);
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
/* CON METODO ARRAY */
const teachersString = teachers.join(",");
console.log(teachersString);
let message = "";
for (let i = 0; i < teachers.length; i++) {
  message = `${teachers},`;
}
console.log(message);

"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Kashif Mumtaz Ansari";
// option 1 show in lowercase:
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// option 2 show in uppercase:
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// option 3 show in titlecase:
function titlecase(personName) {
    let name;
    name = personName.toLowerCase().split(" ");
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log(`Titlecase: ${titlecase("Kashif Mumtaz Ansari")}`);

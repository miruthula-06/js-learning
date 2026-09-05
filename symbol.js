let id1 = Symbol("id");
let id2 = Symbol("id");
let student = {
    name: "Miruthula",
    [id1]: 101,
    [id2]: 202
};
console.log(student[id1]);
console.log(student[id2]);
const data = require("./students.json");

//access json file
console.log(data.students[0]);

//modify data
data.students[1].firstName = "khadiza";
console.log(data.students[1].firstName);

//delete data
delete data.students[0];
console.log(data);

// for loop
for (x in data) {
    console.log(x);
    console.log(data[x]);
}

//convert JS object to JSON format-- JSON.stringify(js_object)
const jsData = {
    name: "johirul",
    age: 24
}
console.log(JSON.stringify(jsData));

//convert JSON format to JS object-- JSON.parse(json_data)
console.log(JSON.parse('{"name": "johirul","age": 24}'));
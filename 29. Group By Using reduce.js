const users = [
    { name: "A", age: 20 },
    { name: "B", age: 20 },
    { name: "C", age: 25 },
    { name: "D", age: 25 }
];

const groupByAge = users.reduce((group, user) => {
    if(!group[user.age]){
        group[user.age] = []
    }
    group[user.age].push(user)
    return group
},{})

console.log(groupByAge)
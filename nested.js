const school = {
    name: "BAF",
    place: "Dhaka",
    class:[9,10],
    unique:{
        color: "Sky-blue",
        result:{
            gpa: 5,
            merit:"Top",
        }
    }
}



console.log(school.unique.result.gpa);
//
school.unique.result.merit="Most Top";
console.log(school.unique.result.merit);
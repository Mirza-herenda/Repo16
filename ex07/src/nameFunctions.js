
const firstName=(firstName) =>
{

    return firstName.toUpperCase();
}

const lastName=(lastName) =>
{
    return lastName.toLowerCase();
}


console.log(firstName("mirza"));
console.log(lastName("MIRZA"));
exports.firstName = firstName;
exports.lastName = lastName;
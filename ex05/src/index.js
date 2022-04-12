class Microsoft 
{
    constructor(name)
    {
        this.name=name;
    }

    get name()
    {
        return this._name;
    }
    set name(newName)
    {
        this._name=newName;
    }
    
    occupation(name)
    {
        var name=`${this.name}`;
        return name + ` is a philantropist!`; 
        }

}

class Facebook extends Microsoft
{
constructor(name,age)
{
    super();
    this.name=name;
    this.age=age;
    
}
studentAge()
    {
       var name=`${this.name}`;
       var age =`${this.age}`;
       return name  +  " is " + age; 
    }


}
let henry = new Facebook("William Henry Gates III")
console.log(henry.occupation())
let elliot = new Facebook('Mark Elliot Zuckerberg', 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}


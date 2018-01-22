 var Person = function(name){
    this.personName = name;
 };

 Person.prototype.sayName=function(){
     console.log('hi my name is: '+this.personName);
 };
Person.prototype.shoutName=function(){
    console.log('Hi my name is: '+this.personName+'!');
};

 var ahmed = new Person("ahmed's name");
 var mina = new Person("mina's name");

 ahmed.sayName();
 mina.shoutName();


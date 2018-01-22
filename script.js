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

 //inheritance
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

var Friend = function(name){
    Friend.super_.call(this,name);
}

inherits(Friend,Person);

var dina = new Friend("Dina's Name");
dina.sayName();
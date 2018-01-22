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

var Musician = function(name,instrument){
    Musician.super_.call(this,name);
    this.musicianInstrument = instrument;
}

inherits(Musician,Person);

Musician.prototype.getInstruments=function(){
    console.log(this.musicianInstrument);
};

var dina = new Musician("Dina's Name","will play music by folk");
dina.sayName();
dina.getInstruments();
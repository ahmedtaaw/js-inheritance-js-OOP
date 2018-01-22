var Person = {
    personName:"ahmed",
    create:function(values){
        var instance=Object.create(this);
        //instance.createName=name;
        //loop over items
        Object.keys(values).forEach(function(key){
            instance[key]=values[key];
        });
        return instance;
    },
    sayName: function(){
        console.log(this.personName);
    },
    sayJob:function(){
        console.log(this.personJob);
    }
}

var mina = Person.create({
    personName:"Mina",
    playInstrument:function(){
        console.log('plays'+this.instrument);
    }
});

var minachild=mina.create({name:"Mina", instrument:"Guitar"});
minachild.playInstrument();
minachild.sayName();
minachild.sayJob();


/*var Musician =Object.create(Person);

Musician.getInstruments=function(){
    console.log("plays..."+this.personInstrument);
}

var mina= Object.create(Musician);
mina.personName= "Mina";
mina.personInstrument= "Drums";*/

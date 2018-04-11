//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });
  */
/*
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });
  */

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ace24e96ab1c7243359c217")}).then((result)=>{
    console.log(result);
  });

  /*
  db.collection('Users').deleteMany({name: 'matt'}).then((result)=>{
    console.log(result);
  })*/
//deleteMany
//deleteOne
//findOneAndDelete

//  db.close();
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to MongoDB server');
   }
   console.log('Connect to MongoDB server');

   // db.collection('Todos').insertOne({
   //    text: 'Something to do',
   //    completed: false
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert todo, err');
   //    }
   //
   //    console.log(JSON.stringify(result.ops, undefined, 2));
   // });

   // db.collection('Users').insertOne({
   //    name: 'Luiza',
   //    age: 22,
   //    location: 'Manaus, Brazil'
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert user');
   //    }
   //
   //    console.log(result.ops[0]._id.getTimestamp());
   // });

   db.close();
});

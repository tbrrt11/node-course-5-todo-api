// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to MongoDB server');
   }
   console.log('Connect to MongoDB server');

   //deleteMany
   // db.collection('Todos').deleteMany({text: 'Kill monsters'}).then((result) => {
   //    console.log(result.result);
   // });

   //deleteOne
   // db.collection('Todos').deleteOne({text: 'Kill monsters'}).then((result) => {
   //    console.log(result);
   // });

   //findOneAndDelete
   // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   //    console.log(result);
   // });

   db.collection('Users').deleteMany({name: 'Luiza'}).then((result) => {
      console.log(result);
   });

   db.collection('Users').findOneAndDelete({_id: 2424}).then((result) => {
      console.log(result);
   });

   // db.close();
});

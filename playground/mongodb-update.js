// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to MongoDB server');
   }
   console.log('Connect to MongoDB server');

   // db.collection('Todos').findOneAndUpdate({
   //    _id: new ObjectID('5b78a06780b81046f24d0e94')
   // }, {
   //    $set: {
   //       completed: true
   //    }
   // }, {
   //    returnOriginal: false
   // });

   db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b76cba655af1d4068e2041f')
   }, {
      $set: {
         name: 'Hugo'
      },
      $inc: {
         age: -5
      }
   }, {
      returnOriginal: false
   }).then((result) => {
      console.log(result);
   });

   //db.close();
});

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true,  useUnifiedTopology: true}, (error, client) => {
    if (error) {
         return console.log('unable to connect to database')
    } 

    const db = client.db(databaseName)


//    db.collection('users').deleteMany({
//        age: 25
//    }).then( (result) =>{
//        console.log(result)
//    }).catch( (error) => {
//        console.log(error)
//    })
//    db.collection('users').updateOne({
//         _id: new ObjectID("5f68197022d1b855385820a5")
//     }, {
//        $inc: {
//             age: 1
//        }
//     }).then( (result) => {
//         console.log(result)
//     }).catch( (error) => {
//         console.log(error)
//     })
    db.collection('tasks').deleteOne({
     _id: new ObjectID("5f681b67425a793c70566b52")
    }).then( (result) => {
        console.log(result)
    }).catch( (error) => {
        console.log(errp)
    })
 })















    // db.collection('users').insertOne({
      
    //     name: 'Finn',
    //    age: '25' 
    // }, (error,result) => {
    //     if (error) {
    //         return console.log('Unable to return user')
    //     }

    //     console.log(result.ops)

// db.collection('users').findOne({_id: new ObjectID("5f68197022d1b855385820a6")}, (error, user) => {
    //     if (error) {
    //        return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

//     db.collection('users').find({ age: '25' }).toArray((error, users) => {
//         console.log(users)
//     })
//     db.collection('users').find({ age: '25' }).count((error, users) => {
//         console.log(users)
//     })

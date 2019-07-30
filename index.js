const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp();

// var firestore = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.webhook = functions.https.onRequest((request, response) => {
    var number01 = request.body.queryResult.parameters.number;
    var number02 = request.body.queryResult.parameters.number1;
    var totalAdd = number01 + number02
    var totalLess = number01 - number02
    var totalMultiply = number01 * number02
    var totalDivide = number01 / number02

    
    switch (request.body.queryResult.action) {
        case "additions":
            response.send({
                fulfillmentText:`addition of ${number01} and ${number02} is ${totalAdd} `
            });

            case "Subtraction":
                response.send({
                    fulfillmentText:`Subtraction of ${number01} and ${number02} is ${totalLess} `
                });

                case "multiplication":
                    response.send({
                        fulfillmentText:`Multiplication of ${number01} into ${number02} is ${totalMultiply} `
                    });

                    case "division":
                        response.send({
                            fulfillmentText:`division of ${number01} into ${number02} is ${totalDivide} `
                        });

    }

    
});

//     let params = request.body.queryResult.parameters;
//     switch (request.body.queryResult.action) {
//         case "BookHotel":

//             firestore.collection('orders').add(params)
//                 .then(() => {
//                     return response.send({
//                         fulfillmentText:
//                             `${params.name} your hotel booking request for ${params.type} room is forwarded for 
//                 ${params.person} person(s), we will contact you on ${params.email} soon !!! `
//                     });

//                 })
//                 .catch((e => {

//                     console.log("error:", e)

//                     response.send({
//                         fulfillmentText: `something went wrong while writing to database . .`

//                     });
//                 }))
//             break;


//         case "ShowBookings":

//             firestore.collection('orders').get()
//                 .then((querySnapshot) => {
//                     // console.log("query is : ",querySnapshot)
//                     var orders = [];
//                     querySnapshot.forEach((doc) => { orders.push(doc.data()) });
//                     //now orders have sth like this [{...} ,{...} , {...} ,  ]
//                     // Converting array to speech
//                     var speech = `you have ${orders.length} orders \n Shall i Show you ?`;


//                     return response.send({
//                         fulfillmentText: speech
//                     });
//                 })
//                 .catch((err) => {
//                     console.log('error getting info ', err);

//                     response.send({
//                         fulfillmentText: "something went wrong when readig from database . "
//                     })
//                 })
//             break;

//         case "ShowBookingsYes":

//             firestore.collection('orders').get()
//                 .then((querySnapshot) => {
//                     // console.log("query is : ",querySnapshot)
//                     var showOrders = [];
//                     querySnapshot.forEach((doc) => { showOrders.push(doc.data()) });
//                     //now orders have sth like this [{...} ,{...} , {...} ,  ]
//                     // Converting array to speech

//                     var followSpeech = [];

//                     showOrders.forEach((eachOrder, index) => {
//                         followSpeech += `number ${index + 1} is ${eachOrder.type} rooms for ${eachOrder.person} persons, ordered by ${eachOrder.name} email address is ${eachOrder.email} \n \n`
//                     })
//                     console.log("follow speech console ", followSpeech);
//                     return response.send({
//                         fulfillmentText: followSpeech
//                     });
//                 })
//                 .catch((err) => {
//                     console.log('error getting info ', err);

//                     response.send({
//                         fulfillmentText: "something went wrong when readig from database . "
//                     })
//                 })
//             break;

//             // firestore.collection('orders').add(params)
//             //     .then(() => {
//             //         return response.send({
//             //             fulfillmentText:
//             //                 `${params.name} your hotel booking request for ${params.type} room is forwarded for 
//             //     ${params.person} person(s), we will contact you on ${params.email} soon !!! `
//             //         });

//             //     })
//             //     .catch((e => {

//             //         console.log("error:", e)

//             //         response.send({
//             //             fulfillmentText: `something went wrong while writing to database . .`

//             //         });
//             //     }))
//             // break;



//         default:

//     }

// });


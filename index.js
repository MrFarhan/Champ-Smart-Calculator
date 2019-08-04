const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp();

// var firestore = admin.firestore();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.webhook = functions.https.onRequest((request, response) => {
    var number01 = request.body.queryResult.parameters.number;
    var number02 = request.body.queryResult.parameters.number1;
    switch (request.body.queryResult.action) {
        case "additions":
            response.send({
                fulfillmentText: `addition of ${number01} and ${number02} is ${number01 + number02} `
            });

        case "Subtraction":
            response.send({
                fulfillmentText: `Subtraction of ${number01} and ${number02} is ${number01 - number02} `
            });

        case "multiplication":
            response.send({
                fulfillmentText: `Multiplication of ${number01} into ${number02} is ${number01 * number02} `
            });

        case "division":
            if (number02 === 0) {
                response.send({
                    fulfillmentText: `Can not divide with 0 - Result: Infinaty `
                })
            }
            else {
                response.send({
                    fulfillmentText: `division of ${number01} into ${number02} is ${(number01 / number02).toFixed(3)} `
                })
            };

        default:
            break;
    }


});
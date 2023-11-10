/* eslint-disable require-jsdoc */
/**
* Import function triggers from their respective submodules:
*
* const {onCall} = require("firebase-functions/v2/https");
* const {onDocumentWritten} = require("firebase-functions/v2/firestore");
*
* See a full list of supported triggers at https://firebase.google.com/docs/functions
*/

const {
  onDocumentWritten,
  // onDocumentCreated,
  // onDocumentUpdated,
  // onDocumentDeleted,
  // Change,
  // FirestoreEvent
} = require("firebase-functions/v2/firestore");


// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const cors = require("cors")({origin: true});
const axios = require("axios");


exports.onDocumentWritten = onDocumentWritten("fun-test/{id}", (event) => {
  // logger.i

  axios.get(process.env.ML_ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((err) => {
        logger.info(err, {structuredData: true});
      });

  logger.info("Document written", {structuredData: true});
  logger.info(event, {structuredData: true});
},
);

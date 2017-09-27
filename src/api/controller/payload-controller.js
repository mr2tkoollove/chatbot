/**
 * Created by user on 9/25/17.
 */

const express = require('express');
const config = require('../helpers/config');

const AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
let documentClient = new AWS.DynamoDB.DocumentClient();

const fetch = require('node-fetch');
// /api/payload - get all payload

exports.getAllPayload = (req, res) => {

  let params = {
    TableName: config.TABLE_PAYLOAD,
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      // print all the movies
      // console.log("Scan succeeded.");
      // data.Items.forEach(function (movie) {
      //   console.log(
      //     movie.code + ": ",
      //     movie.name, "- rating:", movie.description);
      // });

      // continue scanning if we have more movies, because
      // scan can retrieve a maximum of 1MB of data
      // if (typeof data.LastEvaluatedKey != "undefined") {
      //   console.log("Scanning for more...");
      //   params.ExclusiveStartKey = data.LastEvaluatedKey;
      //   docClient.scan(params, onScan);
      // }
      res.json(data.Items);
    }
  }
};

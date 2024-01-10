// Load the AWS SDK for Node.js
require('dotenv').config()
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS,
  region: process.env.REGION
});

// Create S3 service object
var s3 = new AWS.S3();

// const bucketName = 'buckets3dev'

// // call S3 to retrieve upload file to specified bucket
// var uploadParams = {Bucket: bucketName, Key: 'folder/Cozinha2.png', Body: './'};
// var file = './Cozinha2.png';

// // Configure the file stream and obtain the upload parameters
// var fs = require('fs');
// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function(err) {
//   console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// var path = require('path');
// uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
// s3.upload(uploadParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Upload Success", data);
//   }
// });

// s3.listBuckets((err, data) => {
//   console.log(data)
// })

const params = {
  Bucket: 'buckets3dev',
  // Key: 'Cozinha2.png'
};

s3.listObjects(params, (err, data) => {
  console.log(data)
})

// s3.getObject(params, (err, data) => {
//   console.log(data)
// })

// s3.getSignedUrl('getObject', params, (err, data) => {
//   console.log(data)
// })
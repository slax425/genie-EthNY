const ethers = require('ethers');

let privateKey = '0x012345678901234567890123456789f123456789012345a78901234567890123';
let signingKey = new ethers.utils.SigningKey(privateKey);

console.log('Address: ' + signingKey.address);
// "Address: 0x14791697260E4c9A71f18484C9f997B308e59325"

let message = "Hello World";
let messageBytes = ethers.utils.toUtf8Bytes(message);
let messageDigest = ethers.utils.keccak256(messageBytes);

console.log("Digest: " + messageDigest);
// "Digest: 0x592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba"

let signature = signingKey.signDigest(messageDigest);


console.log(signature);
// {
//    recoveryParam: 0,
//    r: "0x79f56f3422dc67f57b2aeeb0b20295a99ec90420b203177f83d419c98beda7fe",
//    s: "0x1a9d05433883bdc7e6d882740f4ea7921ef458a61b2cfe6197c2bb1bc47236fd"
// }

let recovered = ethers.utils.recoverAddress(messageDigest, signature);
console.log(signingKey)
console.log("Recovered: " + recovered);
// "Recovered: 0x14791697260E4c9A71f18484C9f997B308e59325"

let publicKey = signingKey.publicKey;

console.log('Public Key: ' + publicKey);
// "Public Key: 0x026655feed4d214c261e0a6b554395596f1f1476a77d999560e5a8df9b8a1a3515"

let compressedPublicKey = ethers.utils.computePublicKey(publicKey, true);
let uncompressedPublicKey = ethers.utils.computePublicKey(publicKey, false);

console.log(compressedPublicKey);
// "0x026655feed4d214c261e0a6b554395596f1f1476a77d999560e5a8df9b8a1a3515"

console.log(uncompressedPublicKey);
// "0x046655feed4d214c261e0a6b554395596f1f1476a77d999560e5a8df9b8a1a35" +
//   "15217e88dd05e938efdd71b2cce322bf01da96cd42087b236e8f5043157a9c068e"

let address = ethers.utils.computeAddress(publicKey);

console.log('Address: ' + address);
// "Address: 0x14791697260E4c9A71f18484C9f997B308e59325"

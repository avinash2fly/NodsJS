//******************************************************************
//writing buffer example
//******************************************************************

buf = new Buffer(256);
//buf.write(string[, offset][, length][, encoding]) <-- syntax
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

//******************************************************************
//reading buffer example
//buf.toString([encoding][, start][, end]) <-- syntax
//******************************************************************
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//******************************************************************
//convert buffer to json
//syntax --> buf.toJSON()
//******************************************************************
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//******************************************************************
//concatinating Buffer
// syntax --> Buffer.concat(list[, totalLength])
//******************************************************************
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//******************************************************************
//comparing buffers
//syntax-->buf.compare(otherBuffer);
//******************************************************************
var buffer1 = new Buffer('AX');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

//******************************************************************
//copy buffer
//syntax --> buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
//******************************************************************
    //
    // targetBuffer − Buffer object where buffer will be copied.
    //
    // targetStart − Number, Optional, Default: 0
    //
    // sourceStart − Number, Optional, Default: 0
    //
    // sourceEnd − Number, Optional, Default: buffer.length
// no return values
var buffer1 = new Buffer('ABCD');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//******************************************************************
//slice buffer
//syntax --> buf.slice([start][, end])
//******************************************************************
  // start − Number, Optional, Default: 0
  //
  // end − Number, Optional, Default: buffer.length
//returns new buffer references the same memory
var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer1 content: " + buffer1.toString());

//******************************************************************
//buffer length
//******************************************************************
console.log(buf.length);
console.log(Buffer.compare(buffer2,buffer1));
var buf = new Buffer(2);

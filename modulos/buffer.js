
let buffer1 = Buffer.alloc(4)
let buffer2 = Buffer.from([1,2,3,4])
let buffer3 = Buffer.from('hola')
console.log(buffer1);
console.log(buffer2);
console.log('hex:' ,buffer3, 'string:', buffer3.toString() );

let abc = Buffer.alloc(26)
console.log(abc);

for(let i = 0;i < 26; i++){
    abc[i] = i + 97
}
console.log('hex:' ,abc, 'string:', abc.toString(), );
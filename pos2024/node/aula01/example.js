setTimeout(() => console.log('a'),0);
console.log('b');
setTimeout(() => console.log('c'), 100);
setTimeout(() => console.log('D'),0);


let i = 0;
while(i < 10000000){
    let ignoe = Math.sqrt(i);
    i++;
}

console.log('E');
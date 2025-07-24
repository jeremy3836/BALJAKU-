console.log('Hello!!!');
console.log('Hello', 'my brother');

//alert('Hello my brother!!');
/*
console.log('Hello!!!');
console.log('Hello', 'my brother');
*/

let str = 'Hello Javacript';
console.log('문자열: ', str);

let number = 30;
console.log('숫자: ', number);

function sayhello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayhello();

let obj = {
  number: 30, // 프로퍼티
  sayhello: function () {
    console.log('Hello1');
    console.log('Hello2');
    console.log('Hello3');
  },
};

console.log(obj.number);
obj.sayhello();

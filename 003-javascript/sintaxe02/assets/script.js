/* VETORES */
let array = ['string', true, 128];

// forEach
array.forEach((item, index) => console.log('no índice:', index, item));

// push
array.push([1, 2, 3, 4, 5]);
console.log('push:', array);

// pop
array.pop();
console.log('pop:', array);

// shift
array.shift();
console.log('shift:', array);

// unshift
array.unshift('init');
console.log('unshift:', array);

// indexOf
console.log('indexOf:', array.indexOf(128));

// splice
array.splice(0, 1);
console.log('splice: ', array);

// slice
let slice = array.slice(0, 1);
console.log('slice: ', slice);

/* OBJETOS */
let obj = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    inner: {
        value: 'interno'
    }
}

console.log('objeto:', obj);

console.log('prop:', obj.inner);

var string = obj.string;
console.log('string:', string);

var value = obj.inner.value;
console.log('value:', value);

// desestruturação
var { boolean, number } = obj;
console.log('desestruturação', boolean, number);

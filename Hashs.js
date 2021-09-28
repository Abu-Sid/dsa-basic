// Hash means a unique identifier, its similar to object like key, value pairs. A hash table (also called a hash, hash map, unordered map or dictionary) is a data structure that pairs keys to values. Its a technique to convert a range of key values into a range of indexes of an array. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. 
// Hash table operations are performed in two steps:
// A key is converted into an integer index by using a hash function.
// This index decides the where the key-value pair record belongs.


class Dictionary{
    constructor(){
        this.dictionary={}
    }
    add(key,value){
        this.dictionary[key]=value;
    }
    get(key){
        return this.dictionary[key]
    }
}
const data = new Dictionary()
data.add('a',1)
data.add('b',2)
data.add('c',3)
console.log(data.dictionary);//{ a: 1, b: 2, c: 3 }
const getData=data.get('b')
console.log(getData);//2

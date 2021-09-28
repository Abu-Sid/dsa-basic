//Stack is a data type which follow Last in First out(LIFO)
// Example is code typing, when try to delete , start from lasr one, plate, chat app
//for input/add push method, and output/remove pop method

class Stack {
    constructor(){
        this.stack=[];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop()
        }
       
    }
}
const data= new Stack()
data.add(1)
data.add(2)
data.add(3)
console.log(data.stack);//[ 1, 2, 3 ]
data.remove()
console.log(data.stack);//[ 1, 2 ]
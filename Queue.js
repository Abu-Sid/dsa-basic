//Queue is a data type which follow First in First out(FIFO)
// Example is web application , when scroll in browser will start to see the first listed component in ui, any emergency line, 
//for input/add push method, and output/remove shift method

class Queue {
    constructor(){
        this.queue = [];
    }
    add(item){
        this.queue.push(item)
    }
    remove(){
        if(this.queue.length){
            return this.queue.shift()
        }
        
    }
}

const data = new Queue()
data.add(1)
data.add(2)
data.add(3)
console.log(data.queue);//[ 1, 2, 3 ]
data.remove()
console.log(data.queue);//[ 2, 3 ]
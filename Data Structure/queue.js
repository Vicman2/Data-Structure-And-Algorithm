class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode
        }

        return ++this.size
    }

    dequeue(){
        if(!this.first) return null

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


let qInstance = new Queue()
qInstance.enqueue(1)
qInstance.enqueue(2)
qInstance.enqueue(3)
qInstance.enqueue(4)
console.log(qInstance)
qInstance.dequeue()
qInstance.dequeue()
qInstance.dequeue()
qInstance.dequeue()
console.log(qInstance)

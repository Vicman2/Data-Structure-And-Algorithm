
class Node{
    constructor(val){
        this.val = val ;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node 
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined
        let current = this.head
        let temp = current

        while(current.next){
            temp = current
            current = current.next
        }
        
        this.tail = temp
        this.tail.next = null

        this.length--
        if(this.length == 0){
            this.head = null; 
            this.tail = null
        }
        return current

    }
}

let aSLL = new SinglyLinkedList()

console.log(aSLL)

aSLL.push("Hello")
aSLL.push("Goodbye")
aSLL.push("!")

aSLL.pop()

console.log(aSLL)
aSLL.pop()

console.log(aSLL)
aSLL.pop()

console.log(aSLL)

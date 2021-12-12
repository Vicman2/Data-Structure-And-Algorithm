
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

    shift(){
        if(this.length === 0) return undefined
        let currentHead = this.head

        this.head = currentHead.next

        this.length--

        if(this.length == 0){
            this.tail = null
        }

        return currentHead
        
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{

            let currentHead = this.head
            newNode.next = currentHead
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if(!this.head || index > this.length-1 || index < 0) return null

        let current = this.head 
        let currentIndex = 0
        while(current.next ){
            if(currentIndex === index){
                break;
            }
            current = current.next
            currentIndex++
        }
        return current
    }

    set(index, val){
        if(index > this.length-1 || index < 0) return null
        let current = this.head
        let counter = 0

        while(index !== counter){
            current = current.next
            counter++
        }
        current.val = val
        return current
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val)
        if(index === 0 ) return !!this.unshift(val)
        let newNode = new Node(val);
        let previous = this.get(index -1)
        let temp = previous.next;
        previous.next = newNode
        newNode.next = temp;
        this.length++
        return true
    }
}

let aSLL = new SinglyLinkedList()

console.log(aSLL)

aSLL.push("Hello")
aSLL.push("Goodbye")
aSLL.push("You know")
aSLL.push("!")
aSLL.insert(2,"Lahuuu")

console.log(aSLL.get(1))
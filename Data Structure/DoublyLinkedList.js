class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            let presentTail = this.tail
            this.tail.next =  newNode
            this.tail.next.prev = presentTail
            this.tail = newNode
        }

        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            const prevOnTail = this.tail.prev
            prevOnTail.next = null
            this.tail = prevOnTail
        }

        this.length--
        return this
    }
}


let DLL = new DoublyLinkedList()

DLL.push(23)
DLL.push(84)
DLL.push(53)
DLL.pop()
DLL.pop()
DLL.pop()
console.log(DLL)
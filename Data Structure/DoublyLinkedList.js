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

    shift(){
        if(!this.head) return undefined

        let currentHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            let newHead = currentHead.next
            newHead.prev = null
            this.head = newHead
        }
        this.length--
        return currentHead
    }
    
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index){
        if(index< 0 || index> this.length-1) return null

        let midPoint = Math.floor((this.length -1)/2)
        let value = null
        let current 
        if(index<= midPoint){
            current = this.head
            for(let i = 0; i<= midPoint; i++){
                if(index === i){
                    value = current
                    break
                } 
                current = current.next
            }
        }else{
            current = this.tail
            for(let i = this.length -1; i > midPoint; i--){
                if(index === i){
                    value = current
                    break;
                } 
                current = current.prev
            }
        }
        return value
    }
}


let DLL = new DoublyLinkedList()

DLL.push(23)
DLL.push(84)
DLL.push(53)
DLL.push(90)
DLL.push(67)
console.log(DLL.get(0))
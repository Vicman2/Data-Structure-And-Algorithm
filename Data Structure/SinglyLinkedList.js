
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

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop()

        let prevNode = this.get(index -1);
        let removed = prevNode.next
        prevNode.next = removed.next
        this.length--
        return removed

    }

    reverse(){
       let node = this.head
       this.head = this.tail
       this.tail = node 
       let prev = null
       let next

       for(let i = 0; i <this.length; i++){
           next = node.next
           node.next = prev
           prev = node
           node = next 
       }
       return this
    }
    //[4, 6, 78, 26, 90]
    //       NE      HE
    //TA
    //   NO
    //PR
    //4->null
}

let aSLL = new SinglyLinkedList()

console.log(aSLL)

aSLL.push("Hello")
aSLL.push("Goodbye")
aSLL.push("You know")
aSLL.push("!")
aSLL.insert(2,"Lahuuu")
aSLL.reverse()

console.log(aSLL)
class Node{
    constructor(priority, val){
        this.priority = priority;
        this.val = val;
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }

    swap(arr, index1, index2){
        let temp = arr[index1];
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    enqueue(priority, val){
        // Push the value of the array to the bottom
        let newNode = new Node(priority, val)
        this.values.push(newNode)
        if(this.values.length === 1) return this.values


        let theChild = this.values.length - 1;
        let theParent = Math.floor((theChild-1)/2)        
        
        while((this.values[theChild].priority <= this.values[theParent].priority)){
            if(theParent == 0) {
                if(this.values[0].priority > this.values[1].priority){
                    console.log(' I am now here')
                    this.swap(this.values, theChild, theParent)
                    return this.values;
                }
            }
            this.swap(this.values, theChild, theParent)
            theChild = theParent
            theParent =Math.floor((theChild-1)/2)
        }
        console.log('Enqued', priority, this.values)
        return this.values
    }

    dequeue(){
        console.log('Here 1')
        this.swap(this.values, 0, this.values.length-1)

        let removed = this.values.pop()

        let parentIndex = 0
        let leftChildIndex = (2 * parentIndex) + 1
        let rightChildIndex = (2* parentIndex) + 2
        console.log('Here 2')
        
        while(true){
            console.log('Here 3')
            if(leftChildIndex >= this.values.length) return removed
            if(rightChildIndex >= this.values.length) return removed
            if(!this.values[leftChildIndex].priority &&  this.values[rightChildIndex]){
                if(this.values[rightChildIndex].priority > this.values[parentIndex].priority){
                    this.swap(this.values, rightChildIndex, parentIndex)
                    break;
                }
            }
            console.log('Here 4')

            if(!this.values[rightChildIndex].priority &&  this.values[leftChildIndex]){
                if(this.values[leftChildIndex].priority > this.values[parentIndex].priority){
                    this.swap(this.values, leftChildIndex, parentIndex)
                    break;
                }
            }
            if((this.values[leftChildIndex].priority  > this.values[parentIndex].priority) && (this.values[rightChildIndex].priority > this.values[parentIndex].priority)){
                break;
            }
            let minPriorityIndex = leftChildIndex;
            if(this.values[minPriorityIndex].priority >= this.values[rightChildIndex].priority){
                minPriorityIndex = rightChildIndex
            }
            
            this.swap(this.values, minPriorityIndex, parentIndex)
            parentIndex = minPriorityIndex
            leftChildIndex = (2 * parentIndex) + 1
            rightChildIndex = (2* parentIndex) + 2
            console.log('Here 5')
        }


        console.log('Dequed', removed, this.values)
        return removed
    }
}

let proiorityQueue = new PriorityQueue()


proiorityQueue.enqueue(5,'Common cold')
proiorityQueue.enqueue(1, 'Gunshot wound')
proiorityQueue.enqueue(4, 'High fever')
proiorityQueue.enqueue(2, 'Broken arm', )
proiorityQueue.enqueue(3, 'Glass in foot')
proiorityQueue.enqueue(6, 'rerererer')
proiorityQueue.enqueue(5, 'highers')
proiorityQueue.enqueue(5, 'highersdsdss')
proiorityQueue.enqueue(5, 'highersdsdss')
proiorityQueue.enqueue(0, 'highers')

console.log(proiorityQueue)

proiorityQueue.dequeue()
console.log(proiorityQueue)
proiorityQueue.dequeue()
console.log(proiorityQueue)
proiorityQueue.dequeue()
console.log(proiorityQueue)
proiorityQueue.dequeue()
console.log(proiorityQueue)
proiorityQueue.dequeue()
console.log(proiorityQueue)








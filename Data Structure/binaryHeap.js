class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    swap(arr, index1, index2){
        let temp = arr[index1];
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    insert(val){
        this.values.push(val)

        if(this.values.length === 1) return this.values

        let index = this.values.length -1;

        let parentIndex = Math.floor((index-1)/2)

        
        while(this.values[parentIndex] < this.values[index]){
            this.swap(this.values, parentIndex, index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }

        return this.values
    }

    remove(){
        this.swap(this.values, 0, this.values.length -1)

        const removed = this.values.pop()

        let parentIndex = 0
        let leftChildIndex = (2*parentIndex) + 1
        let rightChildIndex = (2*parentIndex) + 2
        while((this.values[rightChildIndex] || this.values[leftChildIndex]) > this.values[parentIndex]){
            console.log('I am here')
            if(leftChildIndex >= this.values.length) return removed
            if(rightChildIndex >= this.values.length) return removed
            let theMaxIndex = leftChildIndex
            if(this.values[rightChildIndex] > this.values[theMaxIndex]){
                theMaxIndex = rightChildIndex
            }

            this.swap(this.values, theMaxIndex, parentIndex)
            parentIndex = theMaxIndex;
            leftChildIndex = (2*parentIndex) + 1
            rightChildIndex =(2*parentIndex) + 2
        }
        return removed


    }
}

let heap = new MaxBinaryHeap()


heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

console.log(heap.remove())
console.log(heap)
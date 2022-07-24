
const BreathFirstSearch = (tree) =>{
    let queue = []
    let visited = []

    if(!tree.head) return visited
    queue.push(tree.head)

    while(queue.length> 0){
        const removed = queue.shift()

        visited.push(removed.value)

        if(removed.left){
            queue.push(removed.left)
        }

        if(removed.right){
            queue.push(removed.right)
        }
        
    }

    return visited
}
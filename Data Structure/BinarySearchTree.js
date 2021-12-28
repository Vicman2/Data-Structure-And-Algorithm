class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        }else{
            let theNode = this.root
            let toLoop = true
            let position = null
            while(toLoop){
                if(theNode.value == val) return undefined
                position = this.takeLeftOrRight(theNode, val)
                if(position == "left" && theNode.left){
                    theNode = theNode.left
                }else if(position == "right" && theNode.right){
                    theNode = theNode.right
                }else if(position == "right" && !theNode.right){
                    position = "right"
                    toLoop = false
                }else if(position == "left" && !theNode.left){
                    position = "left"
                    toLoop = false
                }
            }
            if(position == "left"){
                theNode.left = newNode
            }else if(position == "right"){
                theNode.right = newNode
            }
        }
        return this
    }

    takeLeftOrRight(node,val){
        let positionToGo
        if(node.value >val){
            positionToGo = "left"
        }else{
            positionToGo = "right"
        }

        return positionToGo
    }

    get(val){
        if(!this.root) return undefined
        let current = this.root
        while(current){
            if(current.value == val) return current
            let position = this.takeLeftOrRight(current, val)

            if(position == "left" ){
                current = current.left
            }else if(position == "right"){
                current = current.right
            }
        }
        return null
    }
}

var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
console.log(tree.get(18))
console.log(tree)
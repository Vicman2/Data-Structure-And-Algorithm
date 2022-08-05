class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        const WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let theHashIndex = this._hash(key)
        let theSpot = this.keyMap[theHashIndex]
        if(theSpot && theSpot.length){
            this.keyMap[theHashIndex].push([key,value])
        }else{
            this.keyMap[theHashIndex] = [[key,value]]
        }

        console.log(this.keyMap)

        return this.keyMap

    }

    get(key){
        let hashKey = this._hash(key)

        const indexWhole = this.keyMap[hashKey]
        if(!indexWhole) return undefined
        for(let i = 0; i < indexWhole.length; i++){
            console.log(indexWhole[i])
            if(indexWhole[i][0] === key) {
                return indexWhole[i][1]
            }
        }
        return undefined
    }
}

let laNew  = new HashTable(53)
laNew.set("pink", '#sdsdsdsd')
laNew.set("yellow", '#sdsdsdsdsd')
laNew.set("green", '#sdsdsdsdsd')
console.log(laNew.get("pink"))




console.log(laNew.keyMap)

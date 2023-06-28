class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element; // -- 
            return true
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]; // {1}
            return true
        }
        return false
    }


    clear() {
        this.items = {}; // {2}
    }
    values() {
        return Object.values(this.items);
    }
    size() {
        return Object.keys(this.items).length; // {1}
    };
    union(otherSet) {
        const unionSet = new Set(); // {1}
        this.values().forEach(value => unionSet.add(value)); // {2}
        otherSet.values().forEach(value => unionSet.add(value)); // {3} 
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set(); // {1} 
        const values = this.values();
        for (let i = 0; i < values.length; i++) { // {2} 
            if (otherSet.has(values[i])) { // {3} 
                intersectionSet.add(values[i]); // {4} 
            }
        }
        return intersectionSet;
    }
    difference(otherSet) {
        const differenceSet = new Set(); // {1}
        this.values().forEach(value => { // {2} 
            if (!otherSet.has(value)) { // {3}
                differenceSet.add(value); // {4}
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }



}
/* const set = new Set(); 
     set.add(1);
     set.add(2);
     set.add(2)
     console.log('Os elementos adcionados são: ',set)
     console.log('Deletando o número 2 : ',set.delete(2))
     console.log('Deletando um número que não existe : ',set.delete(9))
     set.add(3);
     console.log(set.values()); // exibe [1] console.log(set.has(1)); // exibe true 
     console.log(set.size()); // exibe 1*/

/*const setA = new Set();
     setA.add(1); 
     setA.add(2);
     setA.add(3);
     const setB = new Set();
     setB.add(3);
     setB.add(4);
     setB.add(5);
     setB.add(6);
     const unionAB = setA.union(setB);
     console.log(unionAB.values());*/

/*const setA = new Set();
     setA.add(1);
     setA.add(2);
     setA.add(3);
     const setB = new Set();
     setB.add(2); 
     setB.add(3);
     setB.add(4);
     const intersectionAB = setA.intersection(setB); 
     console.log(intersectionAB.values());*/

const setA = new Set();
     setA.add(1);
     setA.add(2); 
     setA.add(3);
     const setB = new Set();
     setB.add(2);
     setB.add(3); 
     setB.add(4); 
     const differenceAB = setA.difference(setB); 
     console.log(differenceAB.values());
/*const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));*/
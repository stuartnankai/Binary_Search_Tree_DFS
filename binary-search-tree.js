// insert()
// left or right sub tree
// DFS in-order 

function Bst(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}


Bst.prototype.insert = function (value) {
    if (value <= this.data) {
        if (!this.left) {
            this.left = new Bst(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if (!this.right) {
            this.right = new Bst(value);
        } else {
            this.right.insert(value);
        }
    }
};


Bst.prototype.each = function (iteratorFunc) { // sorted array, need use DFS (in-order)
    if (this.left) this.left.each(iteratorFunc);
    iteratorFunc(this.data);
    if (this.right) this.right.each(iteratorFunc);
};



// Export Bst module in Bst class
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
    module.exports = Bst;
}
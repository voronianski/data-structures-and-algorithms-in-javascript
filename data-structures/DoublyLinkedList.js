function Node (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.index = 0;
}

// Doubly linked list
function LinkedList () {
    this.head = null;
    this.length = 0;
}

// insert item into specified index or at the end of the list
LinkedList.prototype.insert = function (value, index) {
    index = index || this.length;
    if (index > this.length || index < 0) {
        throw new Error('Index "'+index+'" is out of bounds');
    }

    var node = new Node(value);
    var current = this.find(index);
    node.index = current.index+1;
    node.next = current.next;
    node.prev = current;
    current.next = node;
    this.length++;
};

// remove item from index
LinkedList.prototype.remove = function (index) {
    index = index || this.length;
    if (index >= this.length || index < 0) {
        throw new Error('Index "'+index+'" is out of bounds');
    }

    var current = this.find(index);
    this.length--;
};

LinkedList.prototype.find = function (index) {
    if (index > this.length || index < 0) {
        throw new Error('Index "'+index+'" is out of bounds');
    }

    var node = this.head;
    while (node.index !== index) {
        node = node.next;
    }
    return node;
};

LinkedList.prototype.findLast = function (index) {

};

LinkedList.prototype.each = function (callback) {

};

// Examples
var artists = new LinkedList();
artists.insert('Klaxons');
artists.insert('Arctic Monkeys');
// artists.insert('Late of the Pier', 1);
console.log(artists.length);
console.log(artists.find(0).value);

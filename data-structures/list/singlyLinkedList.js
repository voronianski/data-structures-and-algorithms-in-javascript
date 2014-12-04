function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

// singly linked list
function LinkedList () {
    this.head = new Node('head');
}

LinkedList.prototype.insert = function (element, after) {
    if (!after) {
        after = 'head';
    }
    var newNode = new Node(element);
    var afterNode = this.find(after);
    newNode.next = afterNode.next;
    afterNode.next = newNode;
};

LinkedList.prototype.remove = function (element) {

};

LinkedList.prototype.find = function (element) {
    var node = this.head;
    while (node.element !== element) {
        node = node.next;
    }
    return node;
};

LinkedList.prototype.findPrevious = function (element) {
    var node = this.head;
    while (node.next && node.next.element !== element) {
        console.log(node);
        node = node.next;
    }
    return node;
};

LinkedList.prototype.each = function (callback) {
    var node = this.head;
    while (node.next) {
        if (callback(node.next.element)) break;
        node = node.next;
    }
};

var cities = new LinkedList();
cities.insert('Odessa', 'head');
cities.insert('Kharkiv', 'Odessa');
cities.insert('Lviv', 'Kharkiv');
cities.insert('Kiev', 'Lviv');

cities.each(function (city) {
   console.log(city);
});

function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

// Singly linked list
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
    var afterNode = this.findPrevious(element);
    if (afterNode.next) {
        afterNode.next = afterNode.next.next;
    }
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
cities.insert('Odessa');
cities.insert('Kharkiv', 'Odessa');
cities.insert('Lviv', 'Kharkiv');
cities.insert('Kyiv', 'Lviv');

console.log('-----> Display all:');
cities.each(function (city) {
   console.log(city);
});

console.log('-----> Remove "Lviv"');
cities.remove('Lviv');

console.log('-----> After remove:');
cities.each(function (city) {
   console.log(city);
});

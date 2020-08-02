class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class List:
    def __init__(self):
        self.head = None

    def add_head(self, value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
        else:
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node
        return self

    def add_tail(self, value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
        else:
            cur_node = self.head
            while cur_node.next != None:
                cur_node = cur_node.next
            cur_node.next = new_node
            new_node.prev = cur_node
        return self

    def insert_after(self, new_value, after_value):
        # No-op if list is empty
        if self.head == None:
            return self

        new_node = Node(new_value)
        cur_node = self.head
        while cur_node != None and cur_node.value != after_value:
            cur_node = cur_node.next

        if cur_node != None and cur_node.value == after_value:
            new_node.next = cur_node.next
            new_node.prev = cur_node
            cur_node.next = new_node

        return self
    def list_items(self):
        print("=== List Items ===")
        cur_node = self.head
        while cur_node != None:
            print(cur_node.value)
            cur_node = cur_node.next
        return self


list1 = List()
list1.add_tail("one").add_tail("two").add_tail("three").add_tail("four").list_items()
list1.insert_after("three_point_five","three").list_items()
list1.insert_after("foobar","googar").list_items()
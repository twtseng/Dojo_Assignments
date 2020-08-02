class SLNode:
    def __init__(self, value):
        self.value = value
        self.next_node = None

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, value):
        new_node = SLNode(value)
        new_node.next_node = self.head
        self.head = new_node
        return self

    def add_to_back(self, value):
        new_node = SLNode(value)
        if self.head == None:
            self.head = new_node
            return self
        cur_node = self.head
        while cur_node.next_node != None:
            cur_node = cur_node.next_node
        cur_node.next_node = new_node
        return self

    def print_values(self):
        cur_node = self.head
        print("=== List Values ===")
        while cur_node != None:
            print(cur_node.value)
            cur_node = cur_node.next_node
        return self

    def remove_from_front(self):
        if self.head == None:
            return None
        node_to_remove = self.head
        print(f"remove_from_front value={node_to_remove.value}")
        self.head = node_to_remove.next_node
        return node_to_remove

list2 = SList()
list2.add_to_back("one").add_to_back("two").add_to_back("three").add_to_back("four").print_values()
list2.remove_from_front()
list2.print_values()
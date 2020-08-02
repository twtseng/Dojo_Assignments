from product import Product

class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product: Product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        item = self.products.pop(id)
        print("Selling product:")
        item.print_info()
        return self

    def inflation(self, percent_increase):
        print(f"=== Inflation {percent_increase}% ===")
        for p in self.products:
            p.update_price(percent_increase, True)

    def set_clearance(self, percent_discount):
        print(f"=== Clearance {percent_discount}% ===")
        for p in self.products:
            p.update_price(percent_discount, False)

    def display_store_products(self):
        print(f"Store name[{self.name}] products:")
        for p in self.products:
            p.print_info()

store1 = Store(name='Walmart')
store1.add_product(new_product=Product(name='gum', price=2, category='snack'))
store1.add_product(new_product=Product(name='steak', price=12, category='meat'))
store1.add_product(new_product=Product(name='paper towels', price=8, category='cleaning supplies'))
store1.display_store_products()
store1.inflation(10)
store1.display_store_products()
store1.set_clearance(10)
store1.display_store_products()
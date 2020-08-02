class User:
    def __init__(self, first_name: str, last_name: str):
        self.first_name = first_name
        self.last_name = last_name
        self.balance = 0
    
    def make_deposit(self, amount: int):
        self.balance += amount
        return self

    def make_withdrawal(self, amount: int):
        self.balance -= amount
        return self

    def display_user_balance(self):
        print(f"{self.first_name} {self.last_name}, Balance: ${self.balance}")
        return self

    def transfer_money(self, other_user, amount: int):
        print(f"{self.first_name} {self.last_name} transferring ${amount} to {other_user.first_name} {other_user.last_name}")
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self


user1 = User(first_name="Joe", last_name="Blow")
user2 = User(first_name="Mary", last_name="Lou")
user3 = User(first_name="Frank", last_name="Chan")

user1.make_deposit(100).make_deposit(100).make_deposit(100).make_withdrawal(50).display_user_balance()

# user1.make_deposit(100)
# user1.make_deposit(100)
# user1.make_deposit(100)
# user1.make_withdrawal(50)
# user1.display_user_balance()

# user2.make_deposit(100)
# user2.make_deposit(100)
# user2.make_withdrawal(50)
# user2.make_withdrawal(50)
# user2.display_user_balance()

# user3.make_deposit(100)
# user3.make_withdrawal(25)
# user3.make_withdrawal(25)
# user3.make_withdrawal(25)
# user3.display_user_balance()

# user1.transfer_money(other_user=user3, amount=100)
# user1.display_user_balance()
# user3.display_user_balance()

        
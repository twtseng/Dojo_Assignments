x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print('1) x is now', x)
students[0]['last_name'] = 'Bryant'
print('2) students is now', students)
sports_directory['soccer'][0] = 'Andres'
print('3) sports_directory is now', sports_directory)
z[0]['y']=30
print('4) z is now', z)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def iterateDictionary(students):
    for student in students:
        print(f"first_name - {student['first_name']}, last_name - {student['last_name']}")

iterateDictionary(students) 

def iterateDictionary2(key_name, students):
    for student in students:
        print(student[key_name])

iterateDictionary2('first_name', students)    


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(info):
    for key, values in info.items():
        print(len(values), key)
        for value in values:
            print(value)
        print()

printInfo(dojo)


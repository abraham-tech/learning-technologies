class employee:
    def __init__(self, firstname, lastname, salary ):
        self.firstname = firstname
        self.lastname = lastname
        self.salary = salary
        self.email = self.firstname + "." + self.lastname + "@test.com"

    def give_rise(self, new_salery):
        self.salary = new_salery


class programmer(employee):
    def __init__(self, firstname, lastname, salary, languages):
        super().__init__(firstname, lastname, salary)
        self.languages = languages

    def add_langurages(self, lang):
        self.languages += [lang]


test_emp = employee("Ab", "Mt", 100)
print(f"first name: {test_emp.firstname} \nlastname: {test_emp.lastname} \nsalary {test_emp.salary}")


#stack 
stack = []
stack.append(1)
stack.append(2)

pop_elem = stack.pop()
print(stack, pop_elem)

#queue 
queue = []
queue.append(1)
queue.append(2)

pop_elem = queue.pop(0)
print(queue, pop_elem)

#set 

set1 = set([1,2,3,4])
set2 = set ([3,4,5,6])

intersection = set1 & set2
print(intersection)


ages = dict()

ages['bob'] = 22
ages['emply'] =  20 

for key, value in ages.items():
    print(key, value)



lst = [1,2,3,4,5,6,7,8,9]

even_lst = [x for x in lst if x % 2 == 0]
print(even_lst)


square_lst  = [ x ** 2 for x in lst]
print(square_lst)
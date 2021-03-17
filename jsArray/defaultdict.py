from collections import defaultdict

exam_grades = [
    ("Bob", 100), 
    ("Joe", 87),
    ("Emily", 95),
]

student_grades = defaultdict(list)

for name, grade in exam_grades:
    student_grades[name].append(grade)

print(student_grades)

print(student_grades["Rob"])


from collection import Counter

numbers  = [1,1,2,3,3,4,5,6,4,4,6,6]

counts = Counter(numbers)

print(counts)

top2 = counts.most_common(2)
print(top2)
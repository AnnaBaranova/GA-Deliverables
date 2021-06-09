""" Exercise 1
Create a list named students containing some student names (strings).
Print out the second student's name.
Print out the last student's name.
"""

students = ['Alex', 'Berny', 'Anna', 'Peter']
second_name = students[1]
last_name = students[-1]
print(second_name)
print(last_name)

"""
Exercise 2
Create a tuple named foods containing the same number of foods (strings) as there are names in the students list.
Use a for loop to print out the string "food goes here is a good food".
"""
foods = ('Beans', 'Eggs', 'Bananas', 'Corn')
for food in foods:
  print(f'{food} goes here is a good food')

"""
Exercise 3
Using a for loop, print just the last two food strings from foods
"""

for idx, food in enumerate(foods):
  if idx > (len(foods)-3):
    print(food)

for food in foods[-2:]:
  print(food)

"""
Exercise 4
Create a dictionary named home_town containing the keys of city, state and population.
Print a string with this format:
"I was born in city, state - population of population"
"""
home_town = {
  'city': 'Toronto',
  'state': 'Ontario',
  'population': 7000000
}
print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")


"""
Iterate over the key: value pairs in home_town and print a string for each item, for example:
"city = Arcadia"
"state = California"
"population = 58000"
"""
for key, val in home_town.items():
  print(f"{key} = {val}")

"""
1.Create an empty list named cohort.

2.Using a for loop, add one dictionary to the cohort list for each student name. Each dictionary should have this shape:
3. Iterate over cohort printing out each element.
"""

cohort = []
cohort = [{'student':a, 'fav_food':b} for (a, b) in zip(students, foods)]
for item in cohort:
   print(item)


"""
Exercise 7
Using the list of students and list comprehension, assign to a variable named awesome_students a new list containing strings similar to this:
["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]
Iterate over awesome_students printing out each string.
"""

awesome_students = [f'{student} is awesome!' for student in students]
for student in awesome_students:
  print(student)

"""
Exercise 8
Using the tuple foods and list comprehension within a for loop, print each food string that contains the letter a.
"""
food_with_a = [food for food in foods if ('a' in food)]
for food in food_with_a:
  print(food)

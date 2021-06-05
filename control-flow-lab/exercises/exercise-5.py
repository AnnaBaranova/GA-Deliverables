# exercise-05 Fibonacci sequence for first 50 terms

# Write the code that:
# 1. Calculates and prints the first 50 terms of the fibonacci sequence.
# 2. Print each term and number as follows:
#      term: 0 / number: 0
#      term: 1 / number: 1
#      term: 2 / number: 1
#      term: 3 / number: 2
#      term: 4 / number: 3
#      term: 5 / number: 5
#      etc.

# Hint: The next number is found by adding the two numbers before it

max_term = 50

num1 = 0
num2 = 1
count = 0

while count < max_term:
    print(f'term: {count} / number: {num1}')
    num = num1 + num2
    num1 = num2
    num2 = num
    count += 1
    


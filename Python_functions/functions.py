#Challenge 1
def sum_to(num):
  sum_num = sum(range(1, num + 1))
  return sum_num

print(sum_to(6))
print(sum_to(10))


#Challenge 2
def largest(list):
  max = list[0]
  for x in list:
    if x > max:
      max = x
  return max

print(largest([1, 2, 3, 4, 0]))
print(largest([10, 4, 2, 231, 91, 54]))

def largest1(list1):
  larg_num = max(list1)
  return larg_num

print(largest1([1, 2, 3, 4, 0]))
print(largest1([10, 4, 2, 231, 91, 54]))

#Challenge 3
def occurances (str1, str2):
  x = str1.count(str2)
  return x

print(occurances('fleep floop', 'e'))
print(occurances('fleep floop', 'p'))
print(occurances('fleep floop', 'ee'))
print(occurances('fleep floop', 'fe'))

#Challenge 4
def product(*args):
  product = 1
  for num in args:
    product *= num
  return product

print(product(-1,4))
print(product(2, 5, 5))
print(product(4, 0.5, 5))
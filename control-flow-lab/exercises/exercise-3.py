# exercise-03 Calculate Dog Years

# Write the code that:
# 1. Prompts the user to enter a dog's age in human years like this:
#      Input a dog's age in human years: 
# 2. Calculates the equivalent dog years, where:
#      - The first two years count as 10 years each
#      - Any remaining years count as 7 years each
# 3. Prints the answer in the following format:
#      The dog's age in dog years is xx

# Hint:  Use the int() function to convert the string returned from input() into an integer


human_years = int(input('Input a dogs age in human years:'))

if human_years <=2:
    dog_years = human_years*10
else:
    dog_years = 20 + (human_years-2)*7
print(f'The dogs age in dog years is {dog_years}')

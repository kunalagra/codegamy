export const mockLearnPath = [
  {
    "id": "reverse_string",
    "title": "Reverse a String",
    "problemStatement": "Given a string `text`, return the reversed version of the string.",
    "difficulty": "Easy",
    "category": "String",
    "starterCode": "def reverse_string(text):\n  ''' Write Your Code Here '''\n\n# Sample Usage\ntext = \"Hello, world!\"\nreversed_text = reverse_string(text)\nprint(reversed_text)",
    "testCase": {
      "input": ["\"Hello, world!\""],
      "output": ["\"!dlrow ,olleH\""]
    }
  },
  {
    "id": "is_even",
    "title": "Is Even?",
    "problemStatement": "Given a number `num`, return True if the number is even, False otherwise.",
    "difficulty": "Easy",
    "category": "Number",
    "starterCode": "def is_even(num):\n  ''' Write Your Code Here '''\n\n# Sample Usage\nnum = 10\nresult = is_even(num)\nprint(result)",
    "testCase": {
      "input": ["10", "15"],
      "output": ["True", "False"]
    }
  },
  {
    "id": "largest_number",
    "title": "Find the Largest Number",
    "problemStatement": "Given three numbers `num1`, `num2`, and `num3`, return the largest number.",
    "difficulty": "Easy",
    "category": "Number",
    "starterCode": "def largest_number(num1, num2, num3):\n  ''' Write Your Code Here '''\n\n# Sample Usage\nnum1 = 5\nnum2 = 12\nnum3 = 8\nlargest = largest_number(num1, num2, num3)\nprint(largest)",
    "testCase": {
      "input": ["5, 12, 8", "1, 7, 3"],
      "output": ["12", "7"]
    }
  },
  {
    "id": "greet_by_name",
    "title": "Greet by Name",
    "problemStatement": "Given a name `name`, return a string greeting the person by name.",
    "difficulty": "Easy",
    "category": "String",
    "starterCode": "def greet_by_name(name):\n  ''' Write Your Code Here '''\n\n# Sample Usage\nname = \"Alice\"\ngreeting = greet_by_name(name)\nprint(greeting)",
    "testCase": {
      "input": ["\"Alice\"", "\"Bob\""],
      "output": ["\"Hello, Alice!\"", "\"Hello, Bob!\""]
    }
  },
  {
    "id": "rectangle_area",
    "title": "Rectangle Area",
    "problemStatement": "Given the length `length` and width `width` of a rectangle, return the area of the rectangle.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def rectangle_area(length, width):\n  ''' Write Your Code Here '''\n\n# Sample Usage\nlength = 5\nwidth = 3\narea = rectangle_area(length, width)\nprint(area)",
    "testCase": {
      "input": ["5, 3", "7, 2"],
      "output": ["15", "14"]
    }
  },
  {
    "id": "count_vowels",
    "title": "Count Vowels",
    "problemStatement": "Given a string 's', count the number of vowels (a, e, i, o, u) in it.",
    "difficulty": "Easy",
    "category": "String",
    "starterCode": "def count_vowels(s):\n    vowels = 'aeiouAEIOU'\n    count = 0\n    for char in s:\n        if char in vowels:\n            count += 1\n    return count",
    "testCase": {
      "input": ["\"hello\"", "\"world\"", "\"programming\""],
      "output": ["\"2\"", "\"1\"", "\"3\""]
    }
  },
  {
    "id": "check_prime_number",
    "title": "Prime Number",
    "problemStatement": "Given an integer 'num', return True if it's a prime number, False otherwise.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def check_prime_number(num):\n    if num <= 1:\n        return False\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            return False\n    return True",
    "testCase": {
      "input": ["7", "12", "13"],
      "output": ["True", "False", "True"]
    }
  },
  {
    "id": "calculate_square",
    "title": "Square",
    "problemStatement": "Given an integer 'num', calculate and return its square.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def calculate_square(num):\n    return num ** 2",
    "testCase": {
      "input": ["3", "-5", "0"],
      "output": ["9", "25", "0"]
    }
  },
  {
    "id": "concatenate_strings",
    "title": "Concatenate Strings",
    "problemStatement": "Given two strings 's1' and 's2', concatenate them and return the result.",
    "difficulty": "Easy",
    "category": "String",
    "starterCode": "def concatenate_strings(s1, s2):\n    return s1 + s2",
    "testCase": {
      "input": ["\"Hello\", \"World\"", "\"Python\", \"Programming\""],
      "output": ["\"HelloWorld\"", "\"PythonProgramming\""]
    }
  },
  {
    "id": "max_of_two_numbers",
    "title": "Maximum of Two Numbers",
    "problemStatement": "Given two integers 'a' and 'b', return the maximum of the two.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def max_of_two_numbers(a, b):\n    return max(a, b)",
    "testCase": {
      "input": ["3, 7", "10, -5"],
      "output": ["7", "10"]
    }
  },
  {
    "id": "calculate_factorial",
    "title": "Factorial",
    "problemStatement": "Given a non-negative integer 'n', calculate and return its factorial.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def calculate_factorial(n):\n    if n == 0:\n        return 1\n    factorial = 1\n    for i in range(1, n + 1):\n        factorial *= i\n    return factorial",
    "testCase": {
      "input": ["5", "0", "10"],
      "output": ["120", "1", "3628800"]
    }
  },
  {
    "id": "check_even_or_odd",
    "title": "Even or Odd",
    "problemStatement": "Given an integer 'num', return True if it's even, False otherwise.",
    "difficulty": "Easy",
    "category": "Math",
    "starterCode": "def check_even_or_odd(num):\n    return num % 2 == 0",
    "testCase": {
      "input": ["4", "7", "0"],
      "output": ["True", "False", "True"]
    }
  }
]

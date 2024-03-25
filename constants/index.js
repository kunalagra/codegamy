

export const mockProblemsData = [{
    "_id": {
      "$oid": "65813607db0ee3b9bc352d37"
    },
    "id": "two-sum",
    "title": "Two Sum",
    "problemStatement": "Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to</em> <code>target</code>.</p><p class='mt-3'>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use thesame element twice.<p class='mt-3'>You can return the answer in any order.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>nums</code> seperated by space</li><li>The next line contains one integer <code>target</code></li>",
    "outputFormat": "<li>One line with array of two integers</li>",
    "sampleOutput": "0 1<br/>1 2<br/>0 1",
    "sampleInput": "3<br/>2 7 11 15<br/>9<br/>3 2 4<br/>6<br/>3 3<br/>6",
    "constraints": "<li class='mt-2'><code>2 ≤ nums.length ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ nums[i] ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ target ≤ 10</code></li><li class='mt-2 text-sm'><strong>Only one valid answer exists.</strong></li>",
    "difficulty": "Easy",
    "category": "Array",
    "order": 1,
    "videoId": "8-k1C6ehKuw",
    "starterCode": "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
    "value": "8-k1C6ehKuw",
    "label": "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
    "testCase": {
      "input": ["3\n2 7 11 15\n9\n3 2 4\n6\n3 3\n6"],
      "output": ["0 1\n1 2\n0 1\n"]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d38"
    },
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "problemStatement": "<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>nums</code> seperated by space</li>",
    "outputFormat": "<li>One line with array of integers representing the reversed linked list</li>",
    "sampleOutput": "5 4 3 2 1<br/>3 2 1<br/>1",
    "sampleInput": "3<br/>1 2 3 4 5<br/>1 2 3<br/>1",
    "constraints": "<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li><li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>",
    "difficulty": "Hard",
    "category": "Linked List",
    "order": 2,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\nclass ListNode:\n  def __init__(self, value=0, next=None):    \n    self.value = value\n    self.next = next\n\ndef reverse_linked_list(head):\n  prev = None\n  current = head\n  ''' Write your logic '''\n    \n\n# Function to convert a list to a linked list\ndef list_to_linked_list(lst):\n  if not lst:\n    return None\n\n  head = ListNode(lst[0])\n  current = head\n\n  for value in lst[1:]:\n    current.next = ListNode(value)\n    current = current.next\n\n  return head\n\n# Function to convert a linked list to a list\ndef linked_list_to_list(head):\n  result = []\n  while head:\n    result.append(head.value)\n    head = head.next\n  return result\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for i in nums:\n      input_head = list_to_linked_list(i)\n      reversed_head = reverse_linked_list(input_head)\n      output_list = linked_list_to_list(reversed_head)\n      print(output_list)\n            \n  else:\n    \n    # Example usage:\n    input_list = [1, 2, 3, 4, 5]\n\n    # Convert the input list to a linked list\n    input_head = list_to_linked_list(input_list)\n\n    # Reverse the linked list\n    reversed_head = reverse_linked_list(input_head)\n\n    # Convert the reversed linked list to a list\n    output_list = linked_list_to_list(reversed_head)\n\n    print(output_list)",
    "value": "",
    "label": "import ast\nimport sys\n\nclass ListNode:\n  def __init__(self, value=0, next=None):    \n    self.value = value\n    self.next = next\n\ndef reverse_linked_list(head):\n  prev = None\n  current = head\n  ''' Write your logic '''\n    \n\n# Function to convert a list to a linked list\ndef list_to_linked_list(lst):\n  if not lst:\n    return None\n\n  head = ListNode(lst[0])\n  current = head\n\n  for value in lst[1:]:\n    current.next = ListNode(value)\n    current = current.next\n\n  return head\n\n# Function to convert a linked list to a list\ndef linked_list_to_list(head):\n  result = []\n  while head:\n    result.append(head.value)\n    head = head.next\n  return result\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for i in nums:\n      input_head = list_to_linked_list(i)\n      reversed_head = reverse_linked_list(input_head)\n      output_list = linked_list_to_list(reversed_head)\n      print(output_list)\n            \n  else:\n    \n    # Example usage:\n    input_list = [1, 2, 3, 4, 5]\n\n    # Convert the input list to a linked list\n    input_head = list_to_linked_list(input_list)\n\n    # Reverse the linked list\n    reversed_head = reverse_linked_list(input_head)\n\n    # Convert the reversed linked list to a list\n    output_list = linked_list_to_list(reversed_head)\n\n    print(output_list)",
    "testCase": {
      "output": ["5 4 3 2 1\n3 2 1\n1\n"],
      "input": ["3\n1 2 3 4 5\n1 2 3\n1\n"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d39"
    },
    "id": "jump-game",
    "title": "Jump Game",
    "problemStatement": "<p class='mt-3'>You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>and each element in the array represents your maximum jump length at that position.</p><p class='mt-3'>Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>nums</code> seperated by space</li>",
    "outputFormat": "<li>Print true if you can reach the last index, otherwise false</li>",
    "sampleOutput": "true<br/>false",
    "sampleInput": "2<br/>2 3 1 1 4<br/>3 2 1 0 4",
    "constraints": "<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li><li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>",
    "difficulty": "Medium",
    "category": "Dynamic Programming",
    "order": 3,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef can_jump(nums):\n  '''Write Your Logic'''\n\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as integers\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = can_jump(i)\n      print(result)\n                        \n  else:\n    nums = [2, 3, 1, 1, 4]\n    result = can_jump(nums)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef can_jump(nums):\n  '''Write Your Logic'''\n\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as integers\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = can_jump(i)\n      print(result)\n                        \n  else:\n    nums = [2, 3, 1, 1, 4]\n    result = can_jump(nums)\n    print(result)\n",
    "testCase": {
      "input": ["2\n2 3 1 1 4\n3 2 1 0 4"],
      "output": ["true\nfalse\n"]
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3a"
    },
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "problemStatement": "<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li><li class='mt-3'>Every close bracket has a corresponding open bracket of the same type. </li></ul>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains a series of paranthesis</li>",
    "outputFormat": "<li>Print true if given string contains valid paranthesis, otherwise false</li>",
    "sampleInput": "4<br/>()<br/>(){}[]<br/>(]<br/>([)]",
    "sampleOutput": "true<br/>true<br/>false<br/>false",
    "constraints": "<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li><li><class='mt-2 '><code>s</code> consists of parentheses only <code class='text-md'>'()[]{}'</code>.</li>",
    "difficulty": "Easy",
    "category": "Stack",
    "order": 4,
    "videoId": "xty7fr-k0TU",
    "starterCode": "import sys\n\ndef is_valid(s):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    nums = [(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = is_valid(i)\n      print(result)\n  else:\n    nums = \"({[]})\"\n    result = is_valid(nums)\n    print(result)\n",
    "value": "xty7fr-k0TU",
    "label": "import sys\n\ndef is_valid(s):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    nums = [(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = is_valid(i)\n      print(result)\n  else:\n    nums = \"({[]})\"\n    result = is_valid(nums)\n    print(result)\n",
    "testCase": {
      "input": ["4\n()\n(){}[]\n(]\n([)]"],
      "output": ["true\ntrue\nfalse\nfalse\n"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3b"
    },
    "id": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "problemStatement": "<p class='mt-3'>Write an efficient algorithm that searches for a value in an <code>m x n</code> matrix. This matrix has the following properties:</p><li class='mt-3'>Integers in each row are sorted from left to right.</li><li class='mt-3'>The first integer of each row is greater than the last integer of the previous row.</li><p class='mt-3'>Given <code>matrix</code>, an <code>m x n</code> matrix, and <code>target</code>, return <code>true</code> if <code>target</code> is in the matrix, and <code>false</code> otherwise.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains a pair of integers representing <code>number of rows(N) and columns(M)</code> seperated by space</li><li>Following N lines will contains an array of integers</li><li>The last line contains an integer representing <code>target</code></li>",
    "outputFormat": "<li>Print true if target is in matrix, otherwise false</li>",
    "sampleOutput": "true<br/>false<br/>true",
    "sampleInput": "3<br/>3 4<br/>1 3 5 7<br/>10 11 16 20<br/>23 30 34 60<br/>3<br/>3 4<br/>1 3 5 7<br/>10 11 16 20<br/>23 30 34 60<br/>13<br/>1 1<br/>1<br/>1",
    "constraints": "<li class='mt-2'><code>m == matrix.length</code></li><li class='mt-2'><code>n == matrix[i].length</code></li><li class='mt-2'><code>1 <= m, n <= 100</code></li><li class='mt-2'><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "Binary Search",
    "order": 5,
    "videoId": "ZfFl4torNg4",
    "starterCode": "import ast\nimport sys\n\ndef search_matrix(matrix, target):\n  #Write Your Code\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    arg_pairs = [ast.literal_eval(arg) for arg in sys.argv[1:]]  \n    for arg_pair in arg_pairs:\n      matrix, target = arg_pair\n      matrix = [list(row) for row in matrix]  # Ensure each row is a list\n      target = int(target)\n      \n      result = search_matrix(matrix, target)\n      print(result)\n                        \n  else:\n    matrix = [\n              [1,3,5,7],[10,11,16,20],[23,30,34,60]\n       ]\n\n    target = 3\n    result = search_matrix(matrix, target)\n    print(result)\n",
    "value": "ZfFl4torNg4",
    "label": "import ast\nimport sys\n\ndef search_matrix(matrix, target):\n  #Write Your Code\n\n\nif __name__ == \"__main__\":\n  # Check if command-line arguments are available\n  if len(sys.argv) > 1:\n    arg_pairs = [ast.literal_eval(arg) for arg in sys.argv[1:]]  \n    for arg_pair in arg_pairs:\n      matrix, target = arg_pair\n      matrix = [list(row) for row in matrix]  # Ensure each row is a list\n      target = int(target)\n      \n      result = search_matrix(matrix, target)\n      print(result)\n                        \n  else:\n    matrix = [\n              [1,3,5,7],[10,11,16,20],[23,30,34,60]\n       ]\n\n    target = 3\n    result = search_matrix(matrix, target)\n    print(result)\n",
    "testCase": {
      "output": ["true\nfalse\ntrue\n"],
      "input": ["3\n3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60\n3\n3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60\n13\n1 1 \n1\n1"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3c"
    },
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "problemStatement": "<p class='mt-3'>You are given an integer array <code>height</code> of length <code>n</code>. There are n vertical lines drawn such that the two endpoints of the <code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.<br>Find two lines that together with the x-axis form a container, such that the container contains the most water.<br>Return the maximum amount of water a container can store.<br><b>Notice</b> that you may not slant the container.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>height</code> seperated by space</li>",
    "outputFormat": "<li>An integer representing maximum amount of water</li>",
    "sampleOutput": "49<br/>1",
    "sampleInput": "2<br/>1 8 6 2 5 4 8 3 7<br/>1 1",
    "constraints": "<li class='mt-2'><code>n == height.length</code></li><li class='mt-2'><code>2 <= n <=10^5</code></li><li class='mt-2'><code>0 <= height[i] <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "Two Pointers",
    "order": 6,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef max_area(height):\n  max_area_value = 0\n  left = 0\n  right = len(height) - 1\n  ''' Write Your Logic '''\n\n\n  return max_area_value\n\n# Example usage:\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_area(i)\n      print(result)\n                        \n  else:\n    # Example Use\n    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]\n    result = max_area(height)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef max_area(height):\n  max_area_value = 0\n  left = 0\n  right = len(height) - 1\n  ''' Write Your Logic '''\n\n\n  return max_area_value\n\n# Example usage:\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_area(i)\n      print(result)\n                        \n  else:\n    # Example Use\n    height = [1, 8, 6, 2, 5, 4, 8, 3, 7]\n    result = max_area(height)\n    print(result)\n",
    "testCase": {
      "output": ["49\n1\n"],
      "input": ["2\n1 8 6 2 5 4 8 3 7\n1 1"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3d"
    },
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "problemStatement": "<p class='mt-3'>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of pair of integers representing <code>intervals</code> seperated by space</li>",
    "outputFormat": "<li>One line with array of pair of integers representing merged intervals</li>",
    "sampleOutput": "1 6 8 10 15 18<br/>1 5",
    "sampleInput": "2<br/>1 3 2 6 8 10 15 18<br/>1 4 4 5",
    "constraints": "<li class='mt-2'><code>1 <== intervals.length <= 10<sup>4</sup></code></li><li class='mt-2'><code>intervals[i].length ==2</code></li><li class='mt-2'><code>0 <= start<sub>i</sub> <=end<sub>i</sub> <= 10<sup>4</sup></code></li>",
    "difficulty": "Medium",
    "category": "intervals",
    "order": 7,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\ndef merge(intervals):\n  #Write your logic    \n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = merge(i)\n      print(result)\n            \n  else:   \n    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]\n    result = merge(intervals)\n    print(result)\n",
    "value": "",
    "label": "import ast\nimport sys\n\ndef merge(intervals):\n  #Write your logic    \n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = merge(i)\n      print(result)\n            \n  else:   \n    intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]\n    result = merge(intervals)\n    print(result)\n",
    "testCase": {
      "output": ["1 6 8 10 15 18\n1 5\n"],
      "input": ["2\n1 3 2 6 8 10 15 18\n1 4 4 5"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3e"
    },
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "problemStatement": "<p class='mt-3'>Given the <code>root</code> of a binary tree, return <i>its maximum depth.</i><br> A binary tree's <b>maximum</b> depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>root</code> seperated by space where -1 represents the <code>null</code> node</li>",
    "outputFormat": "<li>One line with array of integers representing thr reversed linked list</li>",
    "sampleOutput": "3<br/>2",
    "sampleInput": "2<br/>3 9 20 -1 -1 15 7<br/>1 -1 2",
    "constraints": "<li class='mt-2'>The number of nodes in the tree is in the range<code>[0, 10<sup>4</sup>]</code></li><li class='mt-2'><code>-100 <= Node.val <= 100</code></li>",
    "difficulty": "Easy",
    "category": "Tree",
    "order": 8,
    "videoId": "4qYTqOiRMoM",
    "starterCode": "import ast\nimport sys\n\n\nclass TreeNode:\n  def __init__(self, value=0, left=None, right=None):\n    self.value = value\n    self.left = left\n    self.right = right\n\ndef list_to_tree(nodes):\n  if not nodes:\n    return None\n\n  root = TreeNode(nodes[0])\n  queue = [root]\n  i = 1\n\n  while i < len(nodes):\n    current = queue.pop(0)\n\n    if nodes[i] is not None:\n      current.left = TreeNode(nodes[i])\n      queue.append(current.left)\n      i += 1\n\n    if i < len(nodes) and nodes[i] is not None:\n      current.right = TreeNode(nodes[i])\n      queue.append(current.right)\n      i += 1\n\n  return root\n\ndef max_depth(root):\n    ''' Write Your Code '''\n\n\n\n\n\nif __name__ == \"__main__\":\n    \n  if len(sys.argv) > 1:       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      root = list_to_tree(i)\n      result = max_depth(root)\n      print(result)\n            \n  else:\n    input_list = [3, 9, 20, None, None, 15, 7]\n    root = list_to_tree(input_list)\n    result = max_depth(root)\n    print(result)\n        \n",
    "value": "4qYTqOiRMoM",
    "label": "import ast\nimport sys\n\n\nclass TreeNode:\n  def __init__(self, value=0, left=None, right=None):\n    self.value = value\n    self.left = left\n    self.right = right\n\ndef list_to_tree(nodes):\n  if not nodes:\n    return None\n\n  root = TreeNode(nodes[0])\n  queue = [root]\n  i = 1\n\n  while i < len(nodes):\n    current = queue.pop(0)\n\n    if nodes[i] is not None:\n      current.left = TreeNode(nodes[i])\n      queue.append(current.left)\n      i += 1\n\n    if i < len(nodes) and nodes[i] is not None:\n      current.right = TreeNode(nodes[i])\n      queue.append(current.right)\n      i += 1\n\n  return root\n\ndef max_depth(root):\n    ''' Write Your Code '''\n\n\n\n\n\nif __name__ == \"__main__\":\n    \n  if len(sys.argv) > 1:       \n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      root = list_to_tree(i)\n      result = max_depth(root)\n      print(result)\n            \n  else:\n    input_list = [3, 9, 20, None, None, 15, 7]\n    root = list_to_tree(input_list)\n    result = max_depth(root)\n    print(result)\n        \n",
    "testCode": {
      "output": ["3\n2\n"],
      "input": ["2\n3 9 20 -1 -1 15 7\n1 -1 2"],
    }
  },
  {
    "_id": {
      "$oid": "65813607db0ee3b9bc352d3f"
    },
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "problemStatement": "<p class='mt-3'>You are given an array <code> prices </code> where  <code>prices[i] </code> is the price of a given stock on the  <code>i<sup>th</sup> </code> day.<br>You want to maximize your profit by choosing a <b>single day</b> to buy one stock and choosing a <b>different day in the future</b> to sell that stock.<br>Return <i>the maximum profit you can achieve from this transaction.</i> If you cannot achieve any profit, return <code>0</code>.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>prices</code> seperated by space</li>",
    "outputFormat": "<li>An integer representing the profit made</li>",
    "sampleOutput": "5<br/>0",
    "sampleInput": "2<br/>7 1 5 3 6 4<br/>7 6 4 3 1",
    "constraints": "<li class='mt-2'><code>1 <= prices.length <= 10<sup>5</sup></code></li><li class='mt-2'><code>0 <= prices[i] <= 10<sup>4</sup></code></li>",
    "difficulty": "Easy",
    "category": "Array",
    "order": 9,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef max_profit(prices):\n  if not prices or len(prices) < 2:\n    return 0\n\n    min_price = prices[0]\n    max_profit = 0\n\n    '''' Write Your Code '''\n    \n\n  return max_profit\n\n\n\n\nif __name__ == \"__main__\":\n \n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_profit(i)\n      print(result)\n            \n  else:\n    prices = [7, 1, 5, 3, 6, 4]\n    result = max_profit(prices)\n    print(result)\n ",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef max_profit(prices):\n  if not prices or len(prices) < 2:\n    return 0\n\n    min_price = prices[0]\n    max_profit = 0\n\n    '''' Write Your Code '''\n    \n\n  return max_profit\n\n\n\n\nif __name__ == \"__main__\":\n \n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = max_profit(i)\n      print(result)\n            \n  else:\n    prices = [7, 1, 5, 3, 6, 4]\n    result = max_profit(prices)\n    print(result)\n ",
    "testCase": {
      "output": ["5\n0\n"],
      "input": ["2\n7 1 5 3 6 4\n7 6 4 3 1"]
    }
  },
  {
    "_id": {
      "$oid": "6581aa6bdb0ee3b9bc352d46"
    },
    "id": "subsets",
    "title": "Subsets",
    "problemStatement": "<p class='mt-3'>Given an integer array nums of unique elements, return <i>all possible <span class='text-sky-400'>subsets</span>(the power set).</i> The solution set <b>must not</b> contain duplicate subsets. Return the solution in <b>any order.</b></p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>nums</code> seperated by space</li>",
    "outputFormat": "<li>All the possible subsets excluding the empty set in different lines in any order</li>",
    "sampleOutput": "1<br/>2<br/>1 2<br/>3<br/>1 3<br/>2 3<br/>1 2 3<br/>0",
    "sampleInput": "2<br/>1 2 3<br/>0",
    "constraints": "<li class='mt-2'><code>1 <= nums.length <= 10</code></li><li class='mt-2'><code>-10 <= num[i] <= 10</code></li><li class='mt-2'>All the numbers of <code>nums</code> are <b>unique</b>.</li>",
    "difficulty": "Medium",
    "category": "Backtracking",
    "order": 10,
    "videoId": "",
    "starterCode": "import sys\nimport ast\n\n\ndef subsets(nums):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = subsets(i)\n      print(result)\n            \n  else:\n    prices = [1, 2, 3]\n    result = subsets(prices)\n    print(result)\n        ",
    "value": "",
    "label": "import sys\nimport ast\n\n\ndef subsets(nums):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = subsets(i)\n      print(result)\n            \n  else:\n    prices = [1, 2, 3]\n    result = subsets(prices)\n    print(result)\n        ",
    "testCase": {
      "output": ["1\n2\n1 2\n3\n1 3\n2 3\n1 2 3\n0\n"],
      "input": ["2\n1 2 3\n0"],
    },
  },
    {
    "_id": {
      "$oid": "6581aa6bdb0ee3b9bc352d47"
    },
    "id": "rotate-image",
    "title": "Rotate Image",
    "problemStatement": "<p class='mt-3'>You are given an <code>n x n</code> 2D matrix representing an image, rotate the image by 90 degrees (clockwise).<br>You have to rotate the image <b>in-place</b>, which means you have to modify the input 2D matrix directly. <b>DO NOT</b> allocate another 2D matrix and do the rotation.</p>",
    "inputFormat": "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>matrix</code> seperated by space</li>",
    "outputFormat": "<li>Print the rotated matrix</li>",
    "sampleOutput": "7 4 1<br/>8 5 2<br/>9 6 3",
    "sampleInput": "1<br/>1 2 3<br/>4 5 6<br/>7 8 9",
    "constraints": "<li class='mt-2'><code>matrix.length == n</code></li><li class='mt-2'><code>matrix[i].length == n</code></li><li class='mt-2'><code>1 <= n <= 20</code></li><li class='mt-2'><code>-1000 <= matrix[i][j] <= 1000</code></li>",
    "difficulty": "Medium",
    "category": "Array",
    "order": 11,
    "videoId": "",
    "starterCode": "import ast\nimport sys\n\n\ndef rotate(matrix):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = rotate(i)\n      print(result)\n            \n  else:\n    matrix = [\n              [1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]\n            ]\n    result = rotate(matrix)\n    print(result)\n        ",
    "value": "",
    "label": "import ast\nimport sys\n\n\ndef rotate(matrix):\n  ''' Write Your Logic '''\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    nums = [ ast.literal_eval(arg) for arg in sys.argv[1:]]\n    for i in nums:\n      result = rotate(i)\n      print(result)\n            \n  else:\n    matrix = [\n              [1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]\n            ]\n    result = rotate(matrix)\n    print(result)\n        ",
    "testCase": {
      "output": ["7 4 1\n8 5 2\n9 6 3\n"],
      "input": ["1\n1 2 3\n4 5 6\n7 8 9"],
    },
    "score": 10,
  },
  ];

export const languagesData = [
  {
    "value": "cpp",
    "label": "C++",
  },
  {
    "value": "java",
    "label": "Java",
  },
  {
    "value": "nodejs",
    "label": "Javascript",
  },
  {
    "value": "python3",
    "label": "Python",
  }
]

export const mockComments = {
  'python3' : `#Write your code here
print("Hello World")`,

  'cpp' : `// Write your code here
#include <iostream>
using namespace std;
   
int main()
{
  cout << "Hello World";
  return 0;
}`,

  'java': `// Write your code here
public class Test
{
  public static void main(String []args)
  {
    System.out.println("Hello World");
  }
};`,

  'nodejs': `// Write your code here 
console.log('Hello World');`
}
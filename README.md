# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answers

The time complexity of my algorithm is $\Theta(n! \cdot n)$. The best case input is a sorted input and it's time complextiy would be $\Theta(n)$ since it needs to go through the list to ensure it is properly sorted. The worst case input is where the list is sorted except for the least element which is in the far right position and this would give you the complexity of $\Theta(n! \cdot n)$ as it not only has to loop through every element to see if its ordered correctly, but it also has to try every permutation.

If you generated permutations randomly without memory then the time complexity would be infinite, as there is no garentee that it would ever finish. It could miss the correct permutation forever.

## Sources 

Aidan Newberry helped me with the problem I had with scope of my permutations counter. He told me that leaving "var" off the decleration makes it makes the variable global which solved my issue.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
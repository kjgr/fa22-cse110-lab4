1. Line 12 will print "3" because the input list size is 3 and the variable i counts the number of elements. Although it is indexed by 0, i++ executes and updates i to 3.
2. Line 13 will print "150" because the last price used by the for loop is 300 and the discount is 50% (0.5).
3. Line 14 will print "150". Math.round() does not alter the whole number. We multiply and divide 150 by 100 so we get back 150.
4. The function will return a list of the discounted prices. [50,100,150] will be returned because the discount is 0.5 and there is no decimal part for Math.round() to work on.
5. Line 12 will create an error because i only has block scope as it is declared using let. i is not defined outside the block.
6. Line 13 will cause an error because discountedPrice has block scope and is not defined outside the for block.
7. Line 14 will print "150". Math.round() does not alter the whole number. We multiply and divide 150 by 100 so we get back 150. Also finalPrice is declared in the same plock as the print statement.
8. The function will return a list of the discounted prices. [50,100,150] will be returned because the discount is 0.5 and there is no decimal part for Math.round() to work on.
9. Line 11 will cause an error as 'i' is not defined at the log statement. 'i' is only defined in the for loop.
10. Line 12 will print 3. prices.length is 3 because that is the length of the input list. Length is also declared at the point of calling the log function.
11. The function will return a list of the discounted prices. [50,100,150] will be returned because the discount is 0.5.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favourite Teacher'].name
    E. student.courseLoad[0]
13. A. output = '32'. javascript does string concatenation because the first input is a string and there is a + used for concatenation.
    B. output = -1. javascript treats inputs a integers because subtraction is used.
    C. output = 3. javascript treats the null as a 0 because we are tyring to add with an integer.
    D. output = 3null. javascript treats the plus as a concatenation bbecause the first input is s string.
    E. output = 4. javascript converts the true to 1 as the context includes + and aan integer.
    F. output = 0. javascript treats the null and the false as a 0s because we are tyring to add.
    G. output = 3undefined. javascript does string concatenation because the first input is a string and there is a + used for concatenation.
    H. output = NaN. javascript does not know what to convert undefined into. So it returs a NaN.
14. A. output = true. javascript converts 2 to a integer when comparing to the intger.
    B. output = false. javascript does a string comparistion and '2' is less tha '1'. So '2' will be greater than '12'
    C. output = true. == does not ensure that the datatype is the same. the compiler converts the string to an integer.
    D. output = false. === compares data type and value. because the datatype is not the same, the comparision returns false.
    E. output = false. true gets converted to 1 and 1 is not equal to 2.
    F. output = true. non 0 values in Boolean() evaluate to true and true == true.
15. == compares the value on both sides and does not compare the datatype. === compares both value and the datatype.
17. The resulting array will be [2,4,6]. The callback tells tells the compiler that the callback function will be needed in execution of the current function. This is important becaus javascript executes asynchronously.
19. the output is the numbers 1,4,3,2. 2 has a delay of 1 sec, 1 and 4 have no delay and 3 has a 0 second delay. 
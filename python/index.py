print("hello world");

if 5<2:
    print("bigger");
else: 
    print("smaller");

import random;

print(random.randrange(0,10));


str = "lionel messi";
str2="";
for x in str:
    str2+=x+" ";

print(str2);

print(str[1:3]);



"""
logical operators : and or not
"""

if 5>6 and 5>1:
    print("logical crct");


"""
lists  -- ordered and changable
"""
 
mylist =["apple","banana","cherry"];
print(mylist);


"""""
TUples -- ordered and unchangeable
"""""

mytuple = ("apple","banana","cherry");
print(mytuple);


mysets = {"apple","banana","cherry"}; #unordered and unchangable
print(mysets);


mydict = {                #ordered and changeable
    "name" : "messi",
    "club" : "football club barcelona",
    "year" : 1987 
}

#print(mydict);

x = mydict.items();
print(x);
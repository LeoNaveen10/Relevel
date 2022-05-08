##practising the classes in python

class naveen:
    def __init__(self,name,age,marks):
        self.name=name
        self.age=age
        self.marks=marks

    def displayFunc(self):
        print("my name is ", self.name, "my age is", self.age, " and i have scored ", self.marks);


obj = naveen("messi",35,100);
obj1 = naveen("neymar",45,40);

obj.displayFunc();
obj1.displayFunc();


class person:
    def __init__(self,n,p,i):
        self.name = n ;
        self.personality=p;
        self.isSitting=i;

    def standUP(self):
        self.isSitting=False;
        return self.isSitting;

    def sitDown(self):
        self.isSitting=True;
        return self.isSitting

p1 = person("michael",56,"silent");
p2 = person("lalo",40,"mastermind");


p1.standUP();
p2.sitDown();
print(p1.standUP()," print functions ",p2.sitDown());


##assigning objects of one class to another

p1.favPlayer = obj;
p2.favPlayer=obj1;

print(p1.favPlayer.name," 2nd one ",p2.favPlayer.name);

##type()

print(type(2));


def bool_uses(var1,var2):
    if var1==True and  var2!=False:
        return "happy"
    else:
        return "sad";

def bool_uses(var1,var2):
    return var1 and not var2;

print(bool_uses(True,False));


def assignment(c,d,e):
    return c > d+e;

print(assignment(10,1,2)); 



##list comprehensions
##easiest method
arr=[x**2 for x in range(1,10)];
# print(arr);

##conventional method
d=[];
for x in range(1,10):
    d.append(x**2);
# print(d);



for z in range(10,0,-1):
    print(z);



##asssignment -- finding sum of unique numbers in list

givenList = [1,2,1,3,4,5];
newSet = set();
sum=0;
for i in range(0,len(givenList)):
    newSet.add(givenList[i]);

for i in newSet:
    sum+=i;

print(newSet,"  ",sum);




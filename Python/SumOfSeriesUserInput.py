num=int(input("Enter last number"))

sum=0
for x in range(1,num+1,1): # for(i=1;i<num;i++)
    print(x)
    sum=sum+x
print("The sum is",sum)
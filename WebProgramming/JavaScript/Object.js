function student(name,age,roll){
    this.name=name;
    this.age=age;
    this.roll=roll;

    this.display1=function(){
        document.write("The name is " +this.name+" ");
        document.write("The age is " +this.age+" ");
        document.write("The roll is "+this.roll+" ");
        document.write("<br>");
    }
}
var nilimesh=new student("Nilimesh Halder",21,16);
var soumili=new student("Soumili Halder",13,1);
var arunima=new student("Arunima Mondal",21,2);

nilimesh.display1();
soumili.display1();
arunima.display1();
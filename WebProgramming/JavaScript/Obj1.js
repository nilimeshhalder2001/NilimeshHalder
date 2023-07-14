function Student(name,age,roll){
    this.name=name;
    this.age=age;
    this.roll=roll;

    this.display1=function(){
        document.write("The name is "+this.name+"<br>");
        document.write("The age is "+this.age+"<br>");
        document.write("The roll is"+this.roll+"<br>");
        document.write("<br>");
    }
}
var nilimesh=new Student("Nilimesh",21,12);
var Soumili=new Student("Soumili",13,1);
var Arunima=new Student("Arunima",21,2);

nilimesh.display1();
Soumili.display1();
Arunima.display1();
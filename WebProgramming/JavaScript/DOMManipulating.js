function name1(name,roll){
    this.name=name;
    this.roll=roll;

    this.display1=function(){
        document.write(this.name);
        document.write(this.roll);
    }
}
var nilimesh=new name1("Nilimesh",21);
var soumili=new name1("Soumili",26);

nilimesh.display1();

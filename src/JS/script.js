function validate(){
  
    var age=document.getElementById("age");
    var weight=document.getElementById("weight");
    var message;
    if(age.value>=5 &&age.value<=7)
    {
        if(weight.value>=15 &&weight.value<=20)
        {
           message="fine";
           document.getElementById("message").innerHTML=message;
        }
        else if(weight.value>20){
            message="overweight";
           document.getElementById("message").innerHTML=message;
        }
        else{
            message="underweight";
            document.getElementById("message").innerHTML=message;
        }
    }
    if(age.value>=8 &&age.value<=10)
    {
        if(weight.value>=21 &&weight.value<=25)
        {
           message="fine";
           document.getElementById("message").innerHTML=message;
        }
        else if(weight.value>25){
            message="overweight";
           document.getElementById("message").innerHTML=message;
        }
        else{
            message="underweight";
            document.getElementById("message").innerHTML=message;
        }
    }
    if(age.value>=11 &&age.value<=15)
    {
        if(weight.value>=26 &&weight.value<=30)
        {
           message="fine";
           document.getElementById("message").innerHTML=message;
        }
        else if(weight.value>30){
            message="overweight";
           document.getElementById("message").innerHTML=message;
        }
        else{
            message="underweight";
            document.getElementById("message").innerHTML=message;
        }
    }
    if(age.value>=16 &&age.value<=20)
    {
        if(weight.value>=31 &&weight.value<=40)
        {
           message="fine";
           document.getElementById("message").innerHTML=message;
        }
        else if(weight.value>40){
            message="overweight";
           document.getElementById("message").innerHTML=message;
        }
        else{
            message="underweight";
            document.getElementById("message").innerHTML=message;
        }
    }
   return false;

}

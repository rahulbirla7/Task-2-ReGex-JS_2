function calculateAmt(c,s){
    var c = document.getElementById('i_calls').value
    if(c==""){
        alert("Please fill all the fields");
        document.myForm.calls.focus();
        return false;
    }
    var s = document.getElementById('i_sms').value
    if(s==""){
        alert("Please fill all the fields");
        document.myForm.sms.focus();
        return false;
    }

    var msg1=" ";
    var msg2=" ";

    var costis1;
    var cost;
    var d = calls(c);
    var e = smsmsg(s);
    addcallsms(c,s);
    


    
    function calls(c){
        if(c<=50){
            var costis = (c*0.50);
            costis1=parseFloat(costis).toFixed(2);
            msg1= "Charges for Call :  "+costis1+"/-";
            return costis1;
        }
        
        else if(c<=150){
            var costis=((50*0.50) + (c-50)*0.70) ;
            costis1=parseFloat(costis).toFixed(2);
            msg1=("Charges for Call :  "+costis1+"/-");
            return costis1;
        }
        else if(c<=300){
            var costis=((50*0.50) + (100*0.70) + (c-150)*0.85);
            costis1=parseFloat(costis).toFixed(2);
            msg1=("Charges for Call :  "+costis1+"/-");
            return costis1;
        }
        else{
            var costis=((50*0.50) + (100*0.75) + (150*0.85) + (c-300)*0.95);
            costis1=parseFloat(costis).toFixed(2);
            msg1=("Charges for Call :  "+costis1+"/-");
            return costis1;
        }
    }
    function smsmsg(s){
        if(s<=50){
            var cost=0;
            cost=parseFloat(cost).toFixed(2);
            msg2=("Charges for SMS :  "+cost+"/-");
            return cost;
        }
        else if(s<=200){
            var cost= (s-50)*0.25;
            cost=parseFloat(cost).toFixed(2);
            msg2=("Charges for SMS :  "+cost+"/-");
            return cost;
        }
        else if(s<=400){
            var cost= ((150)*0.25 + (s-200)*0.40);
            cost=parseFloat(cost).toFixed(2);
            msg2=("Charges for SMS :  "+cost+"/-");
            return cost;
        }
        else{
            var cost= ((150)*0.25 + (200)*0.40 + (s-400)*0.45);
            cost=parseFloat(cost).toFixed(2);
            msg2=("Charges for SMS :  "+cost+"/-");
            return cost;
        }
    }
    function addcallsms(c,s){
        d=parseFloat(d);
        e=parseFloat(e);
        var add= d+e;
        alert(msg1 + "\n"+msg2 + "\nTotal Charges :  "+add+"/-");
        return true;
    }

    

    return true;
}
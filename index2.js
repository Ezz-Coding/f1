let na = document.getElementById('na');
let Price =document.getElementById('Price');
let Dis = document.getElementById('Discuont');
let Type = document.getElementById('Type');
let sum = document.getElementById('sum');
let data;
let newdata;


if(localStorage.new_prodact != null){
data = JSON.parse(localStorage.new_prodact )
}
else{
    data=[]; }
 sum.onclick=function(){
    newdata={
        na:na.value,
        Price:Price.value,
        Dis:Dis.value,
        Type:Type.value,
    }
    if(Price.value != '' && na.value != '' && Dis.value != '' && Type.value != ''){
        let found = false ;
        if(localStorage.new_prodact != null){
            
       
            for (i= 0; i < data.length; i++) {
            
           
        if(data[i].na === newdata.na || data[i].Type === newdata.Type ){
   
      
     found = true;
     break;
    }
  
}
if(!found){
    data.push(newdata);
    localStorage.setItem('new_prodact', JSON.stringify(data));
    
    
                                  
 
    clare();  
}
    else{
        console.log('we1');
        
    }
    if(na.value == ''){
    na.style.border = '2px solid red';
           }
           
           else{
               na.style.border = '0';
       
           }  if(Price.value == ''){
               Price.style.border = '2px solid red';
                  }
                  else{
                      Price.style.border = '0';
              
                  }
                  if(Dis.value == ''){
                   Dis.style.border = '2px solid red';
                      }
                      else{
                          Dis.style.border = '0';
                  
                      }
                      if(Type.value == ''){
                       Type.style.border = '2px solid red';
                          }
                          else{
                              Type.style.border = '0';
                      
                          }
}
else{
    data.push(newdata);
    localStorage.setItem('new_prodact', JSON.stringify(data));
    
    
                                  
 
    clare();  
}

}else{

    if(na.value == ''){
        na.style.border = '2px solid red';
           }
           else{
               na.style.border = '0';
       
           }  if(Price.value == ''){
               Price.style.border = '2px solid red';
                  }
                  else{
                      Price.style.border = '0';
              
                  }
                  if(Dis.value == ''){
                   Dis.style.border = '2px solid red';
                      }
                      else{
                          Dis.style.border = '0';
                  
                      }
                      if(Type.value == ''){
                       Type.style.border = '2px solid red';
                          }
                          else{
                              Type.style.border = '0';
                      
                          }
}

 
       
   
    }
                             
       
    
    
    


 
 function clare() {
    na.value= '';
    Price.value= '';
    Dis.value='';
    Type.value='';
 }
 

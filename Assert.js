var sys=null
if(typeof require!="undefined"){
sys=require("sys");
}

var Assert={
AreEqual:function(x,y,ln){
 if(typeof ln!="undefined")ln="\n"+ln
 if(x==null || y==null){
  if((x==null)!=(y==null)){
    if(console.log){
       console.log("Expected "+(x||"[]")+", was "+(y||"[]")+" "+(ln||""))
    }
  }
 } else if(x.equals ? !x.equals(y) : x!=y){
    if(console.log){
  console.log("Expected "+x+", was "+y+" "+(ln||""))
  }
 }
},
Fail:function(x){
 if(console.log)console.log("Failed: "+x)
}
}

if(typeof module!="undefined")
module.exports=Assert;

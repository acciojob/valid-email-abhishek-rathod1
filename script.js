function validEmail(str) {
  //your JS code here.
	//abho@g.com
	if(str[0]=="@" || str.slice(-1)=="@") return false;
	if(str[0] =="." || str.slice(-1) ==".") return false;
	
	if(str.includes("@") && str.includes(".")){
		return true;
		
	}else return false;
	
}

// Do not change the co.de bfelow.vf
const str = prompt("Enter an email address.");
alert(validEmail(str));

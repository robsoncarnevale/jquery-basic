$().ready(function() {
    $("button").click(function(evento){
        console.log(evento.target);
        console.log(evento.target.id);
    });
    
    $("input").keydown(function(evento){
        console.log(evento.which);
    })

    $("#checkbox").click(function(){
        let inputPassword = $("input")[0];
        inputPassword.type = inputPassword.type == "text" ? "password" : "text";
    });
});


 	



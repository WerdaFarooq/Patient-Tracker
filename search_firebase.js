firebase.initializeApp(config);
var database = firebase.database(); 

var ref = database.ref('messages');
ref.once('value', gotData1, errData);

    function gotData1(data){
    //console.log(data.val());
    var usrData = data.val();
    var keys = Object.keys(usrData);
    //console.log(keys);

    for (var i = 0; i< keys.length; i++){
        var k = keys[i];
        var id = usrData[k].AssignedID;
        var name = usrData[k].Name;

        $(document).ready(function() {
             var $formrow = '<tr><td>'+id+'</td><td>'+name+'</td></tr>';
             $('#userInfo').append($formrow);
        });
     }
    }
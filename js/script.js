$(document).ready(function(){

    var sn =1;
$('#add').on( 'click', function () {
    // console.log(parseInt($('#params1'+(sn)).val()))
    var check = checking(sn);
    console.log(check)
    if (check) {
        if (sn==1) {
    var tbody = '';
    tbody +=  "<tr id='row"+sn+"'> <td>"+sn+"</td> \
                    <td><input type='number' id='params1"+sn+"'></td> \
                    <td><input type='number' id='params2"+sn+"'></td> \
                    <td><p id='params3"+sn+"'>result<p></td> \
                    <td><button id='params4"+sn+"'"+" onclick='addition("+sn+")'  >Add<button></td> \
                </tr>";
    $('#addRow').append(tbody);
    sn++;
        }
        else {
     var tbody = '';
    tbody +=  "<tr id='row"+sn+"'> <td>"+sn+"</td> \
                    <td><input type='number' id='params1"+sn+"'></td> \
                    <td><input type='number' id='params2"+sn+"'></td> \
                    <td><p id='params3"+sn+"'>result<p></td> \
                    <td><button id='params4"+sn+"'"+" onclick='addition("+sn+")'  >Add<button></td> \
                </tr>";
    $('#addRow').append(tbody);
    var tecyt = $('#params2'+(sn-1)).val();
    // $('#params1'+(sn)).text(c)
    var addOn=0;
    addOn= parseInt(tecyt)+1;
    console.log("dadad"+addOn);
    $('#params1'+(sn)).val(addOn);
    // $('#row'+(sn-1)).attr('disabled', true);
    $('#params1'+(sn-1)).prop('disabled', true);
    $('#params2'+(sn-1)).prop('disabled', true);
    sn++;
        }

    }

});




$('#remove').on( 'click', function () {
    $('#addRow tr:last').remove();
    if (sn!=1) {
    sn--;
    }
    });
});

        function addition(sn){
                console.log( sn );
                var a =0;
                var b=0;
                a =parseInt($('#params1'+(sn)).val());
                b =parseInt($('#params2'+(sn)).val());

                // b =$('#params2'+(sn)).val();
                var c =0;
                c=a+b;
              $('#params3'+(sn)).text(c);

}

function checking(sn){
     var x =0;
     var y=0;
     x =parseInt($('#params1'+(sn-1)).val());
     y =parseInt($('#params2'+(sn-1)).val());
     console.log("check :"+(x+y));
    if (sn==1) {
        return true;
        console.log("ok")
    }
    else {
        if(y>x){
            return true;
        }
        else {
            return false;
        }
    }

}

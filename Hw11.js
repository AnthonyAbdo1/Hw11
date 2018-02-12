$(document).ready(function () {

    $('#goodbye').hide();

    $('#clear').click(function () {
        $('#input').val('');
        $('#output').val('');
        $('#tempF').prop('checked', false);
        $('#tempC').prop('checked', false);
    });

    $('#exit').click(function () {
        $("#clear, #exit, #prompt, #tempF, #tempC, #input, #output, #btn1, #temp, #FtoC, #CtoF").fadeOut();
        $('#goodbye').fadeIn();
    });
});

function displayResult() {
    try {
        debugger;
        convert();
    }

    catch (ex) {
        alert(ex.message);
    }
}

function convert() {

    try {
        var temp1;
        var temp2;

        if (document.getElementById('tempF').checked) {
            temp1 = document.getElementById("input").value * 9 / 5 + 32;
            document.getElementById("input").value = Math.round(temp1);
            
              if (isNaN(temp1)) {
                throw new Error("Not a valid number");
            }
            
            else {
                return temp1;
            }
        }
        
        else if (document.getElementById('tempC').checked) {
            temp2 = (document.getElementById("input").value - 32) * 5 / 9;
            document.getElementById("input").value = Math.round(temp2);

            if (isNaN(temp2)) {
                throw new Error("Not a valid number");
            }
            
            else {
                return temp2;
            }
        }
    }

    catch (ex) {
        alert("An error has occured: Name=" + ex.name + "  Message=" + ex.message);
    }
    
    finally {
        //console.log();
    }
}
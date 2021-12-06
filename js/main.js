

function update(){
    var rendercode = document.getElementById('renderframe').contentWindow.document;

    rendercode.open();
    rendercode.write(editor.getValue());
    rendercode.close();

    var frm = frames['frame'].document;
    var otherhead = frm.getElementsByTagName("head")[0];    
    var link = frm.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "css/app.css");
    otherhead.appendChild(link);

 
    
    $("#renderframe").contents().find("body").css("zoom", "90%");
}


function setupEditor() {    

    window.editor = ace.edit("addcode");
    window.editor.setTheme("ace/theme/monokai");
    window.editor.session.setMode("ace/mode/html");
    window.editor.setValue( `` ); //1 = moves cursor to end

    editor.getSession().on('change', function() {
        update();
    });

    editor.focus();

    window.editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableEmmet: true
    });

    editor.session.setUseWrapMode(true);

}



function update2(){
    var rendercodemobile = document.getElementById('renderframemobile').contentWindow.document;

    rendercodemobile.open();
    rendercodemobile.write(editor2.getValue());
    rendercodemobile.close();

    var frm = frames['framemobile'].document;
    var otherhead = frm.getElementsByTagName("head")[0];    
    var link = frm.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "css/app.css");
    otherhead.appendChild(link);

 
    
    $("#renderframemobile").contents().find("body").css("zoom", "90%");
}

function setupEditor2() {    

    window.editor2 = ace.edit("addcodemobile");
    window.editor2.setTheme("ace/theme/monokai");
    window.editor2.session.setMode("ace/mode/html");
    window.editor2.setValue( `` ); //1 = moves cursor to end

    editor2.getSession().on('change', function() {
        update2();
    });

    editor2.focus();

    window.editor2.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableEmmet: true
    });

    editor2.session.setUseWrapMode(true);

}

setupEditor();
update();

setupEditor2();
update2();



function copy() {
    editor.session.setUseWrapMode(false);
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += window.editor.getValue();
    boxcodigo.innerHTML += window.editor2.getValue();
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);    
    //location.reload();
    alert("Copy to dashboard");
}




function rightpanellook(){
    $('#leftpanel').addClass('hide');
    $('#rigthpanel').removeClass('hide');
    $('#panelbtnleft').removeClass('active');
    $('#panelbtnrigth').addClass('active');
}

function leftpanellook(){
    $('#leftpanel').removeClass('hide');
    $('#rigthpanel').addClass('hide');
    $('#panelbtnleft').addClass('active');
    $('#panelbtnrigth').removeClass('active');
}

function fullcode(){
    
    $('#btncont').addClass('conttnsmobile');
    $('#addcode').toggleClass('hide');
    $('#addcodemobile').toggleClass('hide');
    $('#addcodemobile').toggleClass('codeeditoraddmobilefull');    
    $('#codeminbnt').removeClass('hide');
    $('#codefullbnt').addClass('hide');
    
    $('#btnmobil').addClass('hide');

    var impcode2 = window.editor.getValue();
    var imprimircodigo2 = window.editor2.setValue(impcode2);
    var clearcode2 = window.editor.setValue(``);
}

function retunrcode(){
    
    $('#btncont').removeClass('conttnsmobile');
    $('#btnmobil').removeClass('hide');

    $('#addcode').toggleClass('hide');
    $('#addcodemobile').toggleClass('hide');
    $('#addcodemobile').toggleClass('codeeditoraddmobilefull');    
    $('#codeminbnt').addClass('hide');
    $('#codefullbnt').removeClass('hide');

    var impcodemobile = window.editor2.getValue();
    var imprimircodigo = window.editor.setValue(impcodemobile);
    var clearcodemobile = window.editor2.setValue(``);
}

function mobil() { 
    $('#btncont').addClass('conttnsmobile');
    $('#codefullbnt').addClass('hide');
    $('#btnmobil').addClass('hide');
    $('#btndesk').removeClass('hide');
    $('#prevbnt').addClass('hide');
    
    $('#rencode').addClass('coderenderbobile');
    $('#renderframe').addClass('hide');
    
    $('#renderframemobile').removeClass('hide');
    $('#renderframemobile').addClass('renderframemobile');

    $('#renderframemobile').removeClass('renderframetablet');
    
    $('#addcodemobile').removeClass('hide');
    $('#addcode').addClass('hide');  

    $('#rencode').removeClass('coderendertablet');
    $('#renderframe').removeClass('renderframetablet');
    $('#addcodemobile').removeClass('codeeditortable');
    $('#renderframe').removeClass('renderframetlaptop');

    var impcode = window.editor.getValue();
    var imprimircodigo = window.editor2.setValue(impcode);
    var clearcode = window.editor.setValue(``);
}

function desk() {

    $('#btncont').removeClass('conttnsmobile');
    $('#codefullbnt').removeClass('hide');
    $('#btnmobil').removeClass('hide');
    $('#btndesk').addClass('hide');
    $('#prevbnt').removeClass('hide');

    $('#codefullbnt').removeClass('hide');

    $('#rencode').removeClass('coderenderbobile');
    $('#rencode').removeClass('coderendertablet');

    $('#renderframe').removeClass('hide');

    $('#renderframe').removeClass('renderframetlaptop');

    $('#renderframemobile').addClass('hide');
   

    $('#addcodemobile').addClass('hide');
    $('#addcode').removeClass('hide');  

    var impcodemobile = window.editor2.getValue();
    var imprimircodigo = window.editor.setValue(impcodemobile);
    var clearcodemobile = window.editor2.setValue(``);
}



function template() {
    var boxcodigo = document.createElement('textarea');
     boxcodigo.innerHTML += (`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
            <title></title>
            <!--Google fonts-->
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
            <!--Material icons-->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <!--Waves css-->
            <link rel="stylesheet" href="css/app.css">
            <!--Theme-->
            <link rel="stylesheet" href="css/theme.css">
        </head>
            <body> 

            <!-- content -->
        
            <script src="js/j-query.min.js"></script>
            </body>
    </html>`);
    document.body.appendChild(boxcodigo);
     boxcodigo.select();
     document.execCommand('copy');
     document.body.removeChild(boxcodigo);
     boxcodigo.value += '';
     alert("Copy to dashboard");
     
 }
 

 function clone() {
    var boxcodigo = document.createElement('textarea');
     boxcodigo.innerHTML += (`$ git clone https://github.com/AdnCodeMasterDisk/Waves.git`);
    document.body.appendChild(boxcodigo);
     boxcodigo.select();
     document.execCommand('copy');
     document.body.removeChild(boxcodigo);
     boxcodigo.value += '';
     alert("Copy, paste in git consol for clone repo");
     
 }
 



//function prev() {
//    $('#addcode').css("display", "none");
//    $('#global').addClass('fullprev');
//    $('#renderframe').addClass('fullprev');
//    $('#prevbnt').addClass('hide');
//    $('#drawer').addClass('hide');
//    $('#topbar').addClass('hide');
//    $('#retbnt').removeClass('hide');
//    $("#renderframe").contents().find("body").css("zoom", "100%");
//    $('#renderframe').css('width' , '100%');
//    $('#renderframe').css('min-height' , '100%');
//}



//function ret() {
 //   $('#addcode').css("display", "block");
//    $('#global').removeClass('fullprev');
//    $('#drawer').removeClass('hide');    
//    $('#topbar').removeClass('hide');
//    $('#renderframe').removeClass('fullprev');    
//    $('#prevbnt').removeClass('hide');
//   $('#retbnt').addClass('hide');
//    $("#renderframe").contents().find("body").css("zoom", "98%");
//    $('#renderframe').css('width' , '98%');
//    $('#renderframe').css('min-height' , '100%');
//}

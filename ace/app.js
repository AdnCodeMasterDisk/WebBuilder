

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

function setupEditor2() {    

    window.editor = ace.edit("addcodemobile");
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



setupEditor();
setupEditor2();
update();


function guardarnuevo() {

    var rendercode = document.querySelector('.layoutbuilder').innerHTML += document.querySelector('.ace_text-layer').textContent;
    window.editor.setValue( `` ); //1 = moves cursor to end

}



function copy() {
    editor.session.setUseWrapMode(false);
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += window.editor.getValue();
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);    
    //location.reload();
    alert("Copy to dashboard");
}

var list = [],
    typeof1 = document.getElementById("typeof1"),
    tostring1 = document.getElementById("tostring1"),
    back_slack1 = document.getElementById("back_slack1"),
    length1 = document.getElementById("length1"),
    index1 = document.getElementById("index1"),
    split1 = document.getElementById("split1"),
    slice1 = document.getElementById("slice1"),
    substr1 = document.getElementById("substr1"),
    substring1 = document.getElementById("substring1"),
    charat1 = document.getElementById("charat1"),
    charcodeat1 = document.getElementById("charcodeat1"),
    replace1 = document.getElementById("replace1"),
    fromcharcode1 = document.getElementById("fromcharcode1"),
    concat1 = document.getElementById("concat1"),
    touppercase1 = document.getElementById("touppercase1"),
    tolowercase1 = document.getElementById("tolowercase1"),
    trim1 = document.getElementById("trim1"),
    link1 = document.getElementById("link1"),
    name1 = document.getElementById("name1"),
    affiche1 = document.getElementById("affiche1"),
    affiche2 = document.getElementById("affiche2"),
    success = document.getElementById("success"),
    failed = document.getElementById("failed"),
    add = document.getElementById("add"),
    remove = document.getElementById("remove"),
    actulisez = document.getElementById("actulisez");




function success1 () {
    success.innerHTML = ("<i class='fas fa-check'></i>");
    failed.innerHTML = "";
}

function failed1 () {
    failed.innerHTML = ("<i class='fas fa-times'></i>");
    success.innerHTML = "";
}

// TypeOf Element

typeof1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = ("TypeOf " + x + " is " + (typeof x ) );
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}

//To String 

tostring1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = (x + " Convert To String.");
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}


// back-slach 

back_slack1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = ("\\" + x + "\\" + " back_slach regulare Expression.");
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}

// length 

length1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = ("The length of " + x + " is " + x.length);
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}
    
//indexOf - lastIndexOf - Search 

index1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var z = x.charAt(0);
        affiche1.innerHTML = ("L'index of " + x + " is " + x.indexOf(z));
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}


//split 

split1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var limit = prompt("How much the lettre you leave");
        affiche1.innerHTML = ("split of " + x + " is " + x.split("" , limit));
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}


//Slice 

slice1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var start = prompt("Enter the value of start");
        var end = prompt("Enter the value of end");
        affiche1.innerHTML = ("slice of " + x + " is " + x.slice(start , end) );
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();
    }
}


//subStr 

substr1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var start = prompt("Enter the value of start");
        var length2 = prompt("length of element , if you not know length leave input bar vide!");
        affiche1.innerHTML = ("substr of " + x + " is " + x.substr(start , length2) );
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    }
}


//subString

substring1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var start = prompt("Enter the value of Start");
        var end = prompt("Enter the value of End");
        affiche1.innerHTML = ("substring of " + x + " is " + x.substring(start , end) );
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    }
}

//Replace

replace1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var NewValue = prompt("Enter the New value");
        list.push(x);
        affiche2.innerHTML = list
        affiche1.innerHTML = ("First value is " + x + " The New Value is " + NewValue);
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();    
    }
}

//charAt 

charat1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var index1 = prompt("Enter the index of char , you need to print")
        affiche1.innerHTML = ("charAt of " + x + " is " + x.charAt(index1) );
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();    
    }
}


//charCodeAt 

charcodeat1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var index1 = prompt("Enter the index of char , you need to print")
        affiche1.innerHTML = ("charCodeAt of " + x + " is " + x.charCodeAt(index1) + " in binaire.");
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();    
    }
}

// fromCharCode

fromcharcode1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = ("FromCharCode of " + x + " is " + "==>" + String.fromCharCode(x) + "<==" + " in binaire.");
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.")
        failed1();    
    }
}


//Concatinting

concat1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var z = prompt("Enter value you need Concat with " + x);
        affiche1.innerHTML = ("Concat " + x + " with " + z + " is " + (x + " " + z));
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();    
    }  
}

//toUpperCase 

touppercase1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = (x + " ToUpperCase ==> " + x.toUpperCase());
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    } ;
};

//toUpperCase 

tolowercase1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = (x + " TolowerCase ==> " + x.toLowerCase());
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    };
};


//trim 

trim1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        affiche1.innerHTML = (x + " not space is " + x.trim());
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    };
}


//trim 

link1.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var z = prompt("Enter the lien Here")
        var y = ("https://" + z);
        affiche1.innerHTML = (x + " With lien " + " " + x.link(y));
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    };
}

//add 

add.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        var z = x + " ";
        list.push(z);
        list.join(" - ");
        affiche2.innerHTML = list;
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    };  
}

//remove 

remove.onclick = function () {
    if (name1.value != "") {
        var x = name1.value;
        list.pop(x);
        affiche2.innerHTML = list;
        success1();
    }else{
        alert("Input is vide, PLease Enter The Value.");
        failed1();
    };  
};

//actulisez 

actulisez.onclick = function () {
    var x = name1.value;
    x.innerHTML = "";
    window.location.reload();
};
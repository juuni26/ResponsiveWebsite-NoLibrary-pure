$("a[href*='" + location.pathname + "']").addClass("current");

function myFunction(x) {
    x.classList.toggle("change");
    if($('.navbar-list:visible').length == 0)
{
$(".navbar-list").show();
}
else {
    $(".navbar-list").hide();
}
  }

let validasi = function(){
    let nama_depan = document.forms["form1"]["fname"].value;
    let nama_belakang = document.forms["form1"]["lname"].value;
    let email = document.forms["form1"]["email"].value;
    let psw = document.forms["form1"]["psw"].value;
    let male_checked = document.getElementById("male").checked;
    let female_checked = document.getElementById("female").checked;
    let member_checked = document.getElementById("member").checked;
    let nomember_checked = document.getElementById("nomember").checked;
    let agree_checked = document.getElementById("agree").checked;


    if(nama_depan==""){
        alert("Nama depan harus diisi! ^^");
        return false;
    }
    else if(nama_belakang==""){
        alert("Nama belakang harus diisi! ^^");
        return false;
    }
    else if(email==""){
        alert("email harus diisi ^^");
        return false;
    }
    else if(psw==""){
        alert("password harus diisi ^^")
        return false;
    }
    else if(psw.length>0 && psw.length<6){
        alert("password minimal 6 character ^^")
        return false;
    }
    else if(!male_checked && !female_checked){
        alert("please choose the gender ^^");
        return false;
    }

    else if(!member_checked && !nomember_checked){
        alert("please choose the membership type ^^");
        return false;
    }
    else if(!agree_checked){
        alert("please agree first with term and privacy ^^");
        return false;
    }

}
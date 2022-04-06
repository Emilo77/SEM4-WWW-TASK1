function validateForm() {
    let name = document.forms["first_form"]["imie"].value;
    let surname = document.forms["first_form"]["nazwisko"].value;
    let email = document.forms["first_form"]["email"].value;

    if (name === "") {
        alert("Proszę podać imię");
        return false;
    }
    if (surname === "") {
        alert("Proszę podać nazwisko");
        return false;
    }
    if (email === "") {
        alert("Proszę podać email");
        return false;
    }
    if(name.length > 40) {
        alert("Imię jest za długie");
        return false;
    }
    if(surname.length > 40) {
        alert("Nazwisko jest za długie");
        return false;
    }
}

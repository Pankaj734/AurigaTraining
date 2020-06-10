function openform(evt, Name) {

	var i, gender;
	gender = document.getElementsByClassName("gender");
	  for (i = 0; i < gender.length; i++) {
	    gender[i].style.display = "none";
  }

  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";

}

function ValidateForm()
{

	var name = document.registration.Name;
	var email = document.registration.Email;
	var mobile = document.registration.Mobile;
	var country = document.registration.country;
	var m = document.getElementById("male");
	var f = document.getElementById("female");
	var o = document.getElementById("other");


	if(NameValidate(name))
	{
		if(EmailValidate(email))
		{
			if(MobileValidate(mobile))
			{
				if(CountryValidate(country))
				{
					if(GenderValidate(gender))
					{

					}
				}
			}
		}
		return false;
	}

}

function NameValidate(name) {
	var letters = /^[A-Za-z]+$/;
	if(name.value.match(letters))
	{
	return true;
	}
	else
	{
	alert("Name must have alphabet characters only");
	name.focus();
	return false;
	}
}

function MobileValidate(mobile){
	var letters = /^[0-9]+$/;
	var len = mobile.value.length;

	if(mobile.value.match(letters) && len==10)
	{
		return true;
	}
	else{
		alert("Not valid Mobile number.");
		mobile.focus();
		return false;
	}

}

function EmailValidate(email){
	var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(format)) 
	{
		return true;
	}
	else
	{
		alert("not a valid email.");
		email.focus();
		return false;
	}
}

function CountryValidate(country) {
	if (country.value=="Default") {
		alert("Select your country from the list.");
		country.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function GenderValidate(m,f,o){

	var x=0;

	if (m.checked) {

		x++;
	}
	if (f.checked) {
		x++;
	}
	if (o.checked) {
		x++;
	}	

	if(x==0)
	{
	alert('Select Male/Female/Other');
	m.focus();
	return false;
	}
	else
	{
	alert('Form Successfully Submitted');
	window.location.reload()
	return true;}
	}



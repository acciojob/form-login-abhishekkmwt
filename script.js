function getFormvalue() {
    //Write your code here
    const form = document.getElementsByTagName("form")[0];
    let firstName =form["fname"].value.trim();
	let lastName =form["lname"].value.trim();

    alert(firstName +" "+ lastName);
	
	
}

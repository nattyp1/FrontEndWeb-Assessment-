console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let complementDuckie = document.getElementById('complements')

form.addEventListener('mouseover', function(event){
	alert("")
)}
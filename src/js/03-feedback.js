import '../css/common.css';
import '../css/03-feedback.css';


const formRef = document.querySelector('js-feedback-form');
const textareaRef = document.querySelector('js-feedback-form textarea');
console.log(555);







formRef.addEventListener('submit', onFormSubmit);
textareaRef.addEventListener('input', onTextareaInput);

function onFormSubmit(event) {
	event.preventDefault();

	event.currentTarget.reset();
	localStorage.removeItem('feedback-form-state');
};

function onTextareaInput(event) {
	const message = event.currentTarget.value;
	
	localStorage.setItem('feedback-form-state', message);
};

function populateTextarea() {
	const saveMessage = localStorage.getItem('feedback-form-state');

	if (saveMessage) {
		textareaRef.value = saveMessage;
	};
};
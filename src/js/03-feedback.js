import lodashTrottle from 'lodash.throttle';

const STORAGE_KEY= 'feedback-form-state';
const formRef = document.querySelector('.js-feedback-form');
const elements = formRef.elements;

formRef.addEventListener('input', lodashTrottle(onInputChange,500));
formRef.addEventListener('submit', onFormSubmit);

recordingFromStorage();

function recordingFromStorage() {
	const KeyInStorage = localStorage.getItem(STORAGE_KEY);

	if (KeyInStorage) {
		const parseKeyInStorage = JSON.parse(KeyInStorage); 
		formRef.email.value = parseKeyInStorage .email;
		formRef.message.value = parseKeyInStorage .message;
	};
};

function onInputChange() {
	const formData = {
		email: elements.email.value,
		message: elements.message.value,
	}
	
	const formDataJSON = JSON.stringify(formData);
	localStorage.setItem(STORAGE_KEY, formDataJSON);
};

function onFormSubmit(event) {
	event.preventDefault();

	const validation = fieldsValidation();

	if (validation !== '') {
		alert(`Is not filled the field ${validation}`);
		return;
	};

	event.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
};

function fieldsValidation() {
	if (elements.email.value === '') {
		return 'Email';
	};

	if (elements.message.value === '') {
		return 'Message';
	};

	return '';
};

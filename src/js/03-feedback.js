import lodashTrottle from 'lodash.throttle';

const STORAGE_KEY= 'feedback-form-state';
const formRef = document.querySelector('.js-feedback-form');

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
	const elements = formRef.elements;

	const formData = {
		email: elements.email.value,
		message: elements.message.value,
	}
	
	const formDataJSON = JSON.stringify(formData);
	localStorage.setItem(STORAGE_KEY, formDataJSON);
};

function onFormSubmit(event) {
	event.preventDefault();

	event.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
};


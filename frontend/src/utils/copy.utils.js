export const copyToClipboard = (htmlId) => {
	const el = document.createElement('textarea');
	el.value = document.getElementById(htmlId).innerHTML;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

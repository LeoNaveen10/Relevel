const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const options = {}; /* see below */
pdfExtract.extract('Get_Started_with_Smallpdf.pdf', options, (err, data) => {
	if (err) return console.log(err);
	console.log(data);
	// console.log(data.pages[0].content);
	data.pages[0].content.forEach((newdata) => {
		console.log(newdata.str);
	});
});
// D:\.vscode\Relevel\pdftotext\45038 HH-UE 1807 RB 23.09.2021 VL.pdf

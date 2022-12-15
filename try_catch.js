// try {
//     throw Error( "undefined  one")
// } catch (error) {
//  console.log(error.message);
// }

let arr = 'image/jpeg'.split('/')[1];
console.log(arr);

reg_no = 'hhue- 2023'.replace(/[^a-z0-9]/gi, '').toUpperCase();

console.log(reg_no);

if (null) {
	console.log('coming in?');
} else {
	console.log('comingout');
}

console.log(new Date());

let filename = ['dgnjsaijgdsda', 'dgasjhgdlsad', 'gjioajg'];
console.log(filename.join(', '));

values = {
	english: 'english',
	vechicle_pho: 'pic',
};

function check(language, doc_type) {
	var body =
		language == values.english
			? doc_type == values.vechicle_pho
				? 'Please upload at least one Vehicle pictures for better response'
				: 'Please upload atleast one Vehicle Service Documents for better response'
			: doc_type == values.vechicle_pho
			? 'Bitte laden Sie mindestens ein Fahrzeugbild hoch.'
			: 'Bitte laden Sie mindestens ein Fahrzeugservice-Dokument hoch.';
	console.log(body);
}

check('english', 'service doc');
check('english', 'pic');
check('german', 'service doc');
check('german', 'pic');

console.log(undefined ? true : false);
console.log(false ? true : false);
console.log('sadgas' ? true : false);

let filenamaes = ['agasga', 'ghaslghawdl', ' agasdgasg'];

console.log(` yes sir ${filenamaes}`);

values = {
	files: ['agagahg', 'hbgjasbgjka'],
};

let buff = Buffer.from('nasjgjlasgnjs', 'base64');
console.log(buff.toString('utf-8'));

 `use strict`

const AWS = require('aws-sdk');

const fetchItems = async(event) => {
	const dynamoBD = new AWS.DynamoBD.DocumentClient();
	let items;
	
	try{
		const results = await dynamoBD.scan({
			TableName: "ItemTable"
		}).promise();
		
		items = results.Items;
	} catch(error) {
		console.log(error);
	}
		
	return {
		status: 200,
		body: JSON.stringfy(items)
	};
};

module.exports = {
	handler: fetchItems,
};
 `use strict`

const AWS = require('aws-sdk');

const fetchItem = async(event) => {
	const dynamoBD = new AWS.DynamoBD.DocumentClient();
	const {id} = event.parameters;
	let item;
	
	try{
		const result = await dynamoBD.get({
			TableName: "ItemTable"
			Key: {id}
		}).promise();
		
		item = result.Item;
	} catch(error) {
		console.log(error);
	}
		
	return {
		status: 200,
		body: JSON.stringfy(item)
	};
};

module.exports = {
	handler: fetchItem
};

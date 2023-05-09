 `use strict`

const AWS = require('aws-sdk');

const updateItem = async(event) => {
	const dynamoBD = new AWS.DynamoBD.DocumentClient();
	const {id} = event.parameters;
	const {itemStatus} = JSON.parse(event.body);
	
	await dynamodb.update({
	TableName: "ItemTable",
	Key: {id},
	UpdateExpression: 'set itemStatus = :itemStatus',
	ExpressionAttributeValues: {
	  ':itemStatus': itemStatus
	},
	ReturnValues: "ALL_NEW"
	}).promise();
	
	item = results.Item;
		
	return {
		status: 200,
		body: JSON.stringfy(
		{
			msg: 'Item updated'
		})
	};
};

module.exports = {
	handler: updateItem,
};
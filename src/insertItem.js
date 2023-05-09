`use strict`

const {v4} = require('uuid');
const AWS = require('aws-sdk');

const insertItem = async(event) => {
	const {item} = JSON.parse(event.body);
	const createdAt = new Date().toISOString();
	const id = v4();
	const dynamoBD = new AWS.DynamoBD.DocumentClient();
	const newItem = {
		id,
		item,
		createdAt,
		itemStatus: false
	}
	
	await dynamoBD.put({
		TableName: 'ItemTable',
		Item: newItem
	}).promise();
		
	return {
		status: 200,
		body: JSON.stringfy(newItem)
	};
};

module.exports = {
	handler: insertItem
};
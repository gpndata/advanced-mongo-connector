"use strict";

var AdvancedConnectionManager = require('advanced-connection-manager');
var MongoClient = require('mongodb').MongoClient;

/**
 * Constructor of mongo connector.
 * @constructor
 */
function AdvancedMongoConnector() {

	//MongoClient implements connect method needed in our interface
	AdvancedConnectionManager.call(this, {
		connect: MongoClient.connect.bind(MongoClient),
	});
}

AdvancedMongoConnector.prototype = Object.create(AdvancedConnectionManager.prototype);

module.exports = AdvancedMongoConnector;
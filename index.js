"use strict";

var AdvancedConnectionManager = require('advanced-connection-manager');
var MongoClient = require('mongodb').MongoClient;

var mongo_connection_interface = {
	connect: MongoClient.connect.bind(MongoClient),
};

/**
 * Constructor of mongo connector.
 * @constructor
 */
function AdvancedMongoConnector() {
	AdvancedMongoConnector.call(this, mongo_connection_interface);
}

AdvancedMongoConnector.prototype = Object.create(AdvancedConnectionManager.prototype);
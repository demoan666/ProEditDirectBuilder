/*
* ADOBE SYSTEMS INCORPORATED
* Copyright 2013 Adobe Systems Incorporated
* All Rights Reserved.
*/

function CSInterface() {
    this.PROTOCOL_VERSION = "6.0.0";
}

CSInterface.prototype.evalScript = function(script, callback) {
    if (callback === null || callback === undefined) {
        callback = function(result) {};
    }
    window.__adobe_cep__.evalScript(script, callback);
};

CSInterface.prototype.getApplicationID = function() {
    var appId = window.__adobe_cep__.getApplicationID();
    return appId;
};

CSInterface.prototype.closeExtension = function() {
    window.__adobe_cep__.closeExtension();
};
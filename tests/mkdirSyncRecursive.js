var testCase = require('nodeunit').testCase;
var fs = require('fs');
var wrench = require('wrench');
var path = require('path');

module.exports = testCase({
    testMkdirSyncRecursive: function(test) {
        var dir = __dirname + '/_tmp/foo/bar';

        test.equals(path.existsSync(dir), false, 'Dir shouldn\'t exist - clean it up manually?');

        wrench.mkdirSyncRecursive(dir, 0777);

        test.equals(path.existsSync(dir), true, 'Dir should exist now');

        // clean up
        while (dir != __dirname) {
            fs.rmdirSync(dir);
            dir = path.dirname(dir);
        }

        test.done();
    },
});

// vim: et ts=4 sw=4

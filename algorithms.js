'use strict';

// thay` day. cai nay
var lcss = function (X, Y) {
    var result = 0,
        table = {};

    for (var i = 0; i <= X.length; i++) {
        for (var j = 0; j <= Y.length; j++) {
            if (table[i] === undefined) {
                table[i] = {};
            }
            if (i === 0 || j === 0)
                table[i][j] = 0;
            else if (X[i - 1] === Y[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                result = Math.max(result, table[i][j]);
            } else {
                table[i][j] = Math.max(table[i - 1][j] || 0, table[i][j - 1] || 0);
            }
        }
    }

    return result;
};

// tren mang day cai nay (dung hon)
var lcss2 = function (X, Y) {
    var result = 0,
        table = {};

    for (var i = 0; i <= X.length; i++) {
        for (var j = 0; j <= Y.length; j++) {
            if (table[i] === undefined) {
                table[i] = {};
            }
            if (i === 0 || j === 0)
                table[i][j] = 0;
            else if (X[i - 1] === Y[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                result = Math.max(result, table[i][j]);
            } else {
                table[i][j] = 0;
            }
        }
    }

    return result;
};
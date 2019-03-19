'use strict'

exports.ok = function(values, res) {
    var data = {
        form: {
            row: {
                column: values
            }
        }
    };
    res.xml(data);
    res.end();
}

exports.err = function(values, res) {
    var data = {
        element: values
    };
    res.xml(data);
    res.end();
}

exports.col = function(values, res) {
    var arr = [];
    var column = [];

    for(var i = 0; i < values.length; i++) {
        arr.push(values[i]);
        if((i+1) % 3 === 0) {
            column.push({column: arr});
            arr = [];
        }
        if(i === values.length-1) {
            if(arr.length === 0) {
                break;
            }
            column.push({column: arr});
        }
    }
    var data = {
        form: {
            row: column
        }
    };
    res.xml(data);
    res.end();
}
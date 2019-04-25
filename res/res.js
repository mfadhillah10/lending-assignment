class Response {

    static success (values,res) {
        var data = {
            'status' : 200,
            'message' : 'Success',
            'values' : values
        }

        res.json(data);
        res.end();
    }

    static noData (values,res) {
        var data = {
            'status' : 99,
            'message' : 'Data not found',
            'values' : values
        }

        res.json(data);
        res.end();
    }

    static err (values,res) {
        var data = {
            'status' : 404,
            'message' : 'Error',
            'values' : values
        }

        res.json(data);
        res.end();
    }

}

module.exports = Response;
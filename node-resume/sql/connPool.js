var mysql = require('mysql');
module.exports = (function() {
    var pool = mysql.createPool({
        host: 'localhost', //主机 
        user: 'linxch', //MySQL认证用户名 
        password: 'linxicheng123', //MySQL认证用户密码 
        database: 'resume',
        port: '3306' //端口号 
    });
    pool.on('connection', function(connection) {
        connection.query('SET SESSION auto_increment_increment=1');
        this.flag = false;
    });

    return function() { //返回的唯一的一个pool 
        return pool;
    };
})();
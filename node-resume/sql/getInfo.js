var connPool = require("./connPool.js");
module.exports = {
    baseInfo: function(req, res) {
        pool = connPool();
        //从pool中获取连接(异步,取到后回调) 
        pool.getConnection(function(err, conn) {
            var baseInfoSql = 'SELECT * from baseinfo';
            conn.query(baseInfoSql, function(err, rs) {
                if (err) {
                    console.log(err.message);
                    res.send("数据库错误,错误原因:" + err.message);
                    return;
                }
                res.send(rs);
                console.log(rs);
            })
            conn.release();
        });
    },
    skill: function(req, res) {
        pool = connPool();
        //从pool中获取连接(异步,取到后回调) 
        pool.getConnection(function(err, conn) {
            var baseInfoSql = 'SELECT * from skill';
            conn.query(baseInfoSql, function(err, rs) {
                if (err) {
                    console.log(err.message);
                    res.send("数据库错误,错误原因:" + err.message);
                    return;
                }
                res.send(rs);
                console.log(rs);
            })
            conn.release();
        });
    },
    work: function(req, res) {
        pool = connPool();
        //从pool中获取连接(异步,取到后回调) 
        pool.getConnection(function(err, conn) {
            var workSql = 'SELECT * from work';
            conn.query(workSql, function(err, rs) {
                if (err) {
                    console.log(err.message);
                    res.send("数据库错误,错误原因:" + err.message);
                    return;
                }
                res.send(rs);
                console.log(rs);
            })
            conn.release();
        });
    },
    evaluation: function(req, res) {
        pool = connPool();
        //从pool中获取连接(异步,取到后回调) 
        pool.getConnection(function(err, conn) {
            var evaluationSql = 'SELECT * from evaluation';
            conn.query(evaluationSql, function(err, rs) {
                if (err) {
                    console.log(err.message);
                    res.send("数据库错误,错误原因:" + err.message);
                    return;
                }
                res.send(rs);
                console.log(rs);
            })
            conn.release();
        });
    }
}
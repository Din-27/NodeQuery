const connection = require('../config/connection')

exports.getDatas = async (req, res) => {
    try {
        let sql = 'select * from users'
        connection.query(sql, (err, rows, fields) => {
            if(err) throw err
            res.json({
                status: true,
                data: rows,
                msg: 'success'
            })
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            msg : error.message
        })
    }
}

exports.getData = async (req, res) => {
    try {
        let sql = 'select * from users where id = ? '
        connection.query(sql, [req.params.id], (err, rows, fields) => {
            if(err) throw err
            res.json({
                status: true,
                data: rows,
                msg: 'success'
            })
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            msg : error.message
        })
    }
}
exports.deleteData = async (req, res) => {
    try {
        let sql = 'delete from users where id = ? '
        connection.query(sql, [req.params.id], (err, rows, fields) => {
            if(err) throw err
            res.json({
                status: true,
                msg: 'delete success'
            })
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            msg : error.message
        })
    }
}

exports.postData = async (req, res) => {
    try {
        let {name, phone, whatsapp, position} = req.body
        let sql = `insert into users (name, phone, whatsapp, position) VALUES ('${name}','${phone}','${whatsapp}','${position}')`
        connection.query(sql, (err) => {
        if (err) throw err
        res.send('1 data insert')
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            msg: error.message
        })
    }
}
exports.updateData = async (req, res) => {
    try {
        let {name, phone, whatsapp, position} = req.body
        let sql = `update users set name=?, phone=?,whatsapp=?, position=?`
        connection.query(sql, [name, phone, whatsapp, position], (err) => {
        if (err) throw err
        res.send('1 data updated')
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            msg: error.message
        })
    }
}
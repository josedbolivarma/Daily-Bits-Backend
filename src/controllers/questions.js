const { response } = require("express");
const { pool } = require("../database/config");

const getCategories = async (req, res = response) => {
    try {
        pool.getConnection((err, connection) => {
            console.log("CONNECTION:::", connection);
            if(err) throw err
            connection.query('SELECT * from category', (err, rows) => {
                console.log("ROWS:::", rows);
                if (!err) {
                    res.send(rows)
                    return;
                } else {
                    console.log(err)
                    res.send(rows);
                    return rows;
                }
            })
        })
    } catch (error) {
        
    }
}

const getQuestions = async (req, res = response) => {
    const id = req.params.id;

    try {
        pool.getConnection((err, connection) => {
            if(err) throw err
            console.log(id);
            connection.query(`SELECT * from questions where category_id = ${id}`, (err, rows) => {
                console.log("ROWS:::", rows);
                if (!err) {
                    res.send(rows)
                    return;
                } else {
                    console.log(err)
                    res.send(rows);
                    return rows;
                }
            })
        })
    } catch (error) {
        
    }
}

const getCorrectAnswers = async (req, res = response) => {
    try {
        pool.getConnection((err, connection) => {
            if(err) throw err
            connection.query('SELECT * from correct_answers ', (err, rows) => {
                console.log("ROWS:::", rows);
                if (!err) {
                    res.send(rows)
                    return;
                } else {
                    console.log(err)
                    res.send(rows);
                    return rows;
                }
            })
        })
    } catch (error) {
        
    }
}

const getAnswerImages = async (req, res = response) => {
    try {
        pool.getConnection((err, connection) => {
            if(err) throw err
            connection.query('SELECT * from answer_images', (err, rows) => {
                console.log("ROWS:::", rows);
                if (!err) {
                    res.send(rows)
                    return;
                } else {
                    console.log(err)
                    res.send(rows);
                    return rows;
                }
            })
        })
    } catch (error) {
        
    }
}

module.exports = {
    getCategories,
    getQuestions,
    getCorrectAnswers,
    getAnswerImages
}
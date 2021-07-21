const pg = require("pg")
let fs = require("fs")

const Pool = pg.Pool
const pool = new Pool({
    user: 'pezmvcewahvadw',
    host: 'ec2-54-220-170-192.eu-west-1.compute.amazonaws.com',
    database: 'd3tfnmchok5h1c',
    password: '3c5e61302dbb2c7f1b1b1d60bcd19d6a9cd68342865c7acf2846b5c7a642e151',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
})

function index(request, response) {
    pool.query("SELECT * FROM messenger_users", function (error, result) {
        if (error) {
            console.log("Error: " + error)
        }

        response.render("chat.hbs", {
            usersArray: result.rows,
        })
    })
}

function chatUsers(request, response) {
    response.render('chat.hbs')
}

function sendMessage(request, response) {
    let message = request.body.message
    let user_id_from = request.body.user_id_from
    let user_id_to = request.body.user_id_to

    let currentDate = new Date();

    let dd = currentDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = currentDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = currentDate.getFullYear();

    let hours = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    let dateTime = yy + "-" + mm + "-" + dd + " " + hours + ":" + min + ":" + sec;

    pool.query("insert into messages(message, messagetime, user_id_from, user_id_to) values($1, $2, $3, $4)", [message, dateTime, user_id_from, user_id_to], function (error, result) {
        if (error) {
            console.log("Error: " + error)
        }
        response.redirect("/")
    })


}




exports.index = index
exports.chatUsers = chatUsers
exports.sendMessage = sendMessage
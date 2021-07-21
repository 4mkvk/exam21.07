const { response } = require("express")
const pg = require("pg")

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
    response.render('login.hbs')
}

function getId(request, response) {
    let nickname = request.body.nickname;
    currentUserId = null
    pool.query("SELECT * FROM public.messenger_users where username=$1", [nickname], function (error, result) {
        if (error) {
            console.log("Error: " + error)
        }

        if (result.rows[0] !== null) {
            currentUserId = result.rows[0]['id']
            response.status(200).json(currentUserId);
        } else {
            console.log("result rows [0] = null");
        }






    })
}

exports.getId = getId;
exports.index = index;
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
    pool.query("SELECT id, user_id_from, user_id_to, message, messagetime FROM public.messages where(user_id_from = $1 and user_id_to = $2) or(user_id_from = $2 and user_id_to = $1) order by messagetime asc ;", function (error, result) {
        if (error) {
            console.log("Error: " + error)
        }

        response.render("chat.hbs", {
            usersArray: result.rows,
        })
    })
}


exports.index = index
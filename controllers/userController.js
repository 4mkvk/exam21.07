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

function registrateUser(request, response) {
    response.render("registration.hbs")
}
function postUser(request, response) {
    let username = request.body.username;
    let img_url = request.body.img_url;


    pool.query("select * from messenger_users where username = $1", [username], function (error, result) {
        if (img_url === null || img_url === undefined || img_url === '' || img_url === ' ') {
            img_url = 'https://i.ytimg.com/vi/i7_hHr47bZ4/maxresdefault.jpg'
        }
        if (result.rows.length > 0) {
            response.send("Такой пользователь существует");
        } else {
            pool.query("insert into messenger_users(username, img_url) values($1, $2)", [username, img_url], function (error, result) {
                if (error) {
                    console.log("Error: " + error)
                }

                response.redirect("/login")
            })
        }
    })




}



exports.registrateUser = registrateUser
exports.postUser = postUser

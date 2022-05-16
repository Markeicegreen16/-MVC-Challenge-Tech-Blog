const { User } = require('../models');

const userData = [
    {
        username: "keice_green",
        twitter: "keice_",
        github: "keicegreen",
        email: "keicegreen@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "davon_l",
        twitter: "davon_l",
        github: "davon11l",
        email: "Davonlundy11@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Matt_b",
        twitter: "brewmatt",
        github: "mattjg",
        email: "mattbrewc@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "nary_n",
        twitter: "narynard",
        github: "narythegoat",
        email: "nary27@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "markeice_G",
        twitter: "markeicegreen16",
        github: "markeicegreen16",
        email: "markeicegreen16@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "reina_s",
        twitter: "rjstewart",
        github: "raejstewart",
        email: "stewart.reina@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
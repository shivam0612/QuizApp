require("dotenv").config();
const express = require("express");
require("./db/conn");
const auth = require("../src/middleware/auth");
const User = require("./models/schema");
const uData = require("./models/uschema")

const hbs = require("hbs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

const port = process.env.PORT || 9000

//Setting Path path
const staticpath = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/custom_css/', express.static(path.join(__dirname, "../public/css")));
app.use('/jss', express.static(path.join(__dirname, "../public/js")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use('/images', express.static(path.join(__dirname, "../public/images")));

// app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


//routing
//app.get(path, callback)
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/createaccount", (req, res) => {
    res.render("createaccount");
})


app.get("/temp", auth, async (req, res) => {

    res.render('temp', {
        name: namess
    });
})


app.post("/temp", auth, (req, res) => {
    try {

        res.status(201).render('temp', {
            name: namess
        });
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/login", (req, res) => {
    res.render("login");
})

//registration
app.post("/createaccount", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);

        const token = await userData.generateAuthToken();

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 60000),
            httpOnly: true
        });

        await userData.save();
        res.status(201).render("login");
    } catch (e) {
        res.status(500).send(e);
    }
})


//login
app.post("/login", async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        const user1 = await User.findOne({
            email: email
        });
        const token = await user1.generateAuthToken();
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true,
        });
        const name = namee(user1.firstname);

        if (user1.password === password) {
            res.status(201).render('home', {
                name: user1.firstname,

            });

        } else {
            res.send("Invalid");
        }
    } catch (e) {
        res.status(400).send(e);
    }
})
var namess;

function namee(firstname) {
    namess = firstname;
    return namess;
}

app.get("/home", auth, async (req, res) => {

    res.render('home', {
        name: namess
    });
})


app.post("/home", auth, (req, res) => {
    try {

        res.status(201).render('home', {
            name: namess
        });
    } catch (e) {
        res.status(500).send(e);
    }
})


app.get("/htmlquiz", auth, async (req, res) => {

    res.render('htmlquiz', {
        name: namess
    });
})

app.post("/htmlquiz", auth, async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new uData({
            score: req.body.cvalue,
            firstname: req.name,
            subject: 'Html'
        });

        await userData.save();
        res.status(201).render("home");
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/cssquiz", auth, async (req, res) => {

    res.render('cssquiz', {
        name: namess
    });
})

app.post("/cssquiz", auth, async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new uData({
            score: req.body.cvalue,
            firstname: req.name,
            subject: 'Css'
        });

        await userData.save();
        res.status(201).render("home");
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/bootstrapquiz", auth, async (req, res) => {

    res.render('bootstrapquiz', {
        name: namess
    });
})

app.post("/bootstrapquiz", auth, async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new uData({
            score: req.body.cvalue,
            firstname: req.name,
            subject: 'Bootstrap'
        });

        await userData.save();
        res.status(201).render("home");
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/javascriptquiz", auth, async (req, res) => {

    res.render('javascriptquiz', {
        name: namess
    });
})

app.post("/javascriptquiz", auth, async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new uData({
            score: req.body.cvalue,
            firstname: req.name,
            subject: 'JavaScript'
        });

        await userData.save();
        res.status(201).render("home");
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/pythonquiz", auth, async (req, res) => {

    res.render('pythonquiz', {
        name: namess
    });
})

app.post("/pythonquiz", auth, async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new uData({
            score: req.body.cvalue,
            firstname: req.name,
            subject: 'Python'
        });

        await userData.save();
        res.status(201).render("pythonquiz");
    } catch (e) {
        res.status(500).send(e);
    }
})

app.get("/marks", auth, async (req, res) => {

    const repo = await uData.find({
        firstname: req.name
    })
    res.render('marks', {
        name: namess,
        dlist: repo
    });
})
app.get("/logout", auth, async (req, res) => {
    try {
        res.clearCookie("jwt");

        await req.user.save();
        // console.log(req.name);
        res.render("index");
    } catch (e) {
        res.status(500).send(e);
    }
})

//server create
app.listen('/.netlify/functions/api', () => {
    console.log(`server is running at port number ${port}`);
})



//Home, Logout auth
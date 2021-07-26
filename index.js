//Set up
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const path = require("path");
// const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(morgan('tiny'));


//For deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "client/build")));


//Routes

//Edit 14'er summit
//DATE format - YYYY-MM-DD

// //All
// app.patch("/peak/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const {peak_name} = req.body;
//         const {peak_elv} = req.body;
//         const {bag_date} = req.body;
//         const editPeak = await pool.query("UPDATE peak SET peak_name = $1, peak_elv = $2, bag_date = $3 WHERE peak_id = $4", [peak_name, peak_elv, bag_date, id]);
//         res.json("Edit Success")
//     } catch (err) {
//         console.error(err.message)
//     }
// })

// //Name
// app.patch("/peak/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const {peak_name} = req.body;
//         const editPeak = await pool.query("UPDATE peak SET peak_name = $1 WHERE peak_id = $2", [peak_name, id]);
//         res.json("Edit Success")
//     } catch (err) {
//         console.error(err.message)
//     }
// })

// //Elv
// app.patch("/peak/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const {peak_elv} = req.body;
//         const editPeak = await pool.query("UPDATE peak SET peak_elv = $1, WHERE peak_id = $2", [peak_elv, id]);
//         res.json("Edit Success")
//     } catch (err) {
//         console.error(err.message)
//     }
// })

//Date
app.patch("/peak/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {bag_date} = req.body;
        const editPeak = await pool.query("UPDATE peak SET bag_date = $1 WHERE peak_id = $2", [bag_date, id]);
        res.json("Edit Success")
    } catch (err) {
        console.error(err.message)
    }
})



//Log new peak
app.post("/peak", async(req, res) => {
    try {
        const {peak_name} = req.body;
        const {peak_elv} = req.body;
        const {bag_date} = req.body;
        
        const newPeak = await pool.query("INSERT INTO peak (peak_name, peak_elv, bag_date) VALUES($1,$2,$3) RETURNING *", [peak_name, peak_elv, bag_date]);
        res.json(newPeak.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
})

//Return all bagged peaks
app.get("/peak", async(req, res) => {
    try {
        const allPeaks = await pool.query("SELECT * FROM peak")
        res.json(allPeaks.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//Get specific peak
app.get("/peak/:id", async(req, res) => {
    try {
        const {id} = req.params;

        const onePeak = await pool.query("SELECT * FROM peak WHERE peak_id = $1", [id]);
        res.json(onePeak.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})


//Delete peak
app.delete("/peak/:id", async(req, res) => {
    try {
        const {id} = req.params;
        
        const delPeak = await pool.query("DELETE FROM peak WHERE peak_id = $1", [id]);
        res.json("Successfully Deleted Entry")
    } catch (err) {
        console.error(err.message)
    }
})

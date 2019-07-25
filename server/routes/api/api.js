const express = require('express');
const router = express.Router();
//models
const Goal = require('../../models/goals.js');

//Controllers
const goal_controller = require('../../controllers/goalController.js')
    //tools
const dateTools = require("../../tools/dateTools.js")

//Goals routes
router.get('/goals', (req, res) => {
    Goal.find({
        date: {
            $gte: dateTools.todayStartMilliseconds(Date.now()),
            $lte: dateTools.todayEndMilliseconds(Date.now()),
        }
    }).exec((err, goals) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            goals
        })
    });
});
router.post('/goals', goal_controller.goal_create);
router.put('/goal/:id', goal_controller.goal_update);
router.delete('/goal/:id', goal_controller.goal_delete);

module.exports = router;
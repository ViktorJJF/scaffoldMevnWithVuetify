const Goal = require('../models/goals.js');
const dateTools = require("../tools/dateTools.js")

//Display list of today goals
exports.goal_list = (req, res) => {
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
    }
    //Create goal
exports.goal_create = (req, res) => {
        let body = req.body;
        let goal = new Goal({
            state: body.state,
            description: body.description,
            timeLimit: body.timeLimit,
            date: body.date
        });

        goal.save((err, goalDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                goal: goalDB
            });
        });
    }
    //Update goal
exports.goal_update = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Goal.findByIdAndUpdate(id, body, {
        new: true
    }, (err, goalDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            goal: goalDB
        });
    });
}

// Delete goal
exports.goal_delete = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Goal.findByIdAndRemove(id, (err, goalDeleted) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            goal: goalDeleted
        });
    });
}
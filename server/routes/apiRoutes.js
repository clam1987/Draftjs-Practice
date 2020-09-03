const router = require("express").Router();
const Announcements = require("../model/Announcements")

router.get("/announcements", async (req,res) => {
    const announcements = await Announcements.findAll();
    res.json(announcements);
})

router.post("/announcements", (req,res) => {
    const { subject, body } = req.body
    const str = JSON.stringify(body);
    console.log(str)
    Announcements.create({subject, body: str});
    res.json(true)
});

router.delete("/announcements/:id", async (req, res) => {
    const id = req.params.id
    const response = await Announcements.destroy({
        where: {
            id: id
        },
    });
    res.json(response);
})

module.exports = router;
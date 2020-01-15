const updateUser = (req, res, next) => {
    res.send('updateUser '+req.params.id);
}

module.exports = updateUser
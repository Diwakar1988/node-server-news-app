const deleteUser = (req, res, next) => {
    res.send('deleteUser '+req.params.id);
}

module.exports = deleteUser
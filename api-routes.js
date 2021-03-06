let router = require('express').Router();
// Import contact controller
let contactController = require('./contactController');

router.get('/', (req, res) => res.json({
    status: "success",
    message: 'The API is working!'
}));

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;
const oe = require('express')
router = oe.Router();
module.exports = router;

router.get('/', (req, res)=>{

	res.send('Hi from router.js');
})
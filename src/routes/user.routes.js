const {Router} = require ('express')
const router = Router()
const port = 7000
const {getUsers, createUser, updateUser, deleteUser} = require ('../controllers/user.controllers')

//READ
router.get('/',getUsers)

//CREATE
router.post ('/',createUser)

//UPDATE
router.put ('/:id',updateUser)

//DELETE
router.delete ('/:id',deleteUser)

module.exports = router
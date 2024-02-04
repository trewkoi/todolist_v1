import express from 'express'
import tasksControllers from './controllers/tasksControllers.js'
import tasksMiddlewares from './middlewares/tasksMiddlewares.js'

const router = express.Router()

router.get('/tasks', tasksControllers.getAll)
router.post('/tasks', tasksMiddlewares.validateFieldTitle, tasksControllers.createTask)
router.delete('/tasks/:id', tasksControllers.deleteTask)
router.put('/tasks/:id', tasksMiddlewares.validateFieldTitle, tasksMiddlewares.validateFieldStatus, tasksControllers.updateTask)

export default router
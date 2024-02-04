import connection from './connection.js'

const getAll = async () => {
    const q = 'SELECT * FROM tasks'
    const [tasks] = await connection.execute(q)
    return tasks
}

const createTask = async (task) => {
    const { title } = task

    const dateUTC = new Date(Date.now()).toUTCString()

    const q = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'

    const [createdTask] = await connection.execute(q, [title, 'Pendente', dateUTC])

    return { insertedId: createdTask.insertId }
}

const deleteTask = async (id) => {
    const q = 'DELETE FROM tasks WHERE id = ?'

    const [removedTask] = await connection.execute(q, [id])

    return removedTask
}

const updateTask = async (id, task) => {
    const q = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'

    const { title, status } = task

    const [updatedTask] = await connection.execute(q, [title, status, id])
    return updatedTask
}

export default {
    getAll,
    createTask,
    deleteTask,
    updateTask
}
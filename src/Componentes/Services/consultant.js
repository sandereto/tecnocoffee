import { app } from './Api'

const post_consultant = async (data) => {
    return app.post('consultant',data)
}

const get_edit = async (id) => {
    return app.get(`consultant/${id}`)
}

const put_consultant = async (data,id) => {
    return app.put(`consultant/${id}`,data)
}

export { post_consultant,get_edit,put_consultant }
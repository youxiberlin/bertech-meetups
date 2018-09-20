import axios from 'axios'

const api = {
    get: endpoint => {
        return new Promise((resolve, reject) => {
            axios
                .get(endpoint, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('identity')}` },
                })
                .then(result => resolve(result.data))
                .catch(err => {
                    if (err && err.response && err.response.data && err.response.data.error) {
                        err.description = err.response.data.error
                        reject(err)
                    } else {
                        reject(err)
                    }
                })
        })
    },

    post: (endpoint, body, files, uploadProgress) =>
        bodyRequest('post', endpoint, body, files, uploadProgress),
    put: (endpoint, body, files, uploadProgress) =>
        bodyRequest('put', endpoint, body, files, uploadProgress),
    patch: (endpoint, body, files, uploadProgress) =>
        bodyRequest('patch', endpoint, body, files, uploadProgress),
    delete: (endpoint, body, files, uploadProgress) =>
        bodyRequest('delete', endpoint, body, files, uploadProgress),
}

export default api

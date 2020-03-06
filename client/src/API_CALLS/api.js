const apiCall = (route, method, payload, callback) => {

    const token = sessionStorage.getItem('jwt');
    let headers = null;
    if (payload){
        headers = {
            method: method,
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    } else {
        headers = {
            method: method,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
    }
    }

    return fetch(route, headers)
};

export default apiCall;

    
    

// TO DO IMPORT FROM ENV FILE DOESNOT WORK
const API_URL = 'http://localhost:3000'

export async function getDepartments() {
    const response = await fetch(`${API_URL}/api/department`)
    const departments = await  response.json()
    return departments
}

export async function getDepartmentById(id) {
    const response = await fetch(`${API_URL}/api/department/${id}`)
    const department = await response.json()
    return department

}

export async function createDepartment(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const response = await fetch(`${API_URL}/api/department`, requestOptions)
    if (response.ok) {
        const data = await response.json();
        return data
    } else {
        console.error('Error en la solicitud:', response.status, response.statusText);
    }
}

export async function deleteDepartment(id) {
    const requestOptions = {
        method: 'DELETE'
    };

    const response = await fetch(`${API_URL}/api/department/${id}`, requestOptions)
    if (response.ok) {
        return 
    } else {
        throw new Error('Error en la solicitud:' + response.status + response.statusText);
    }
}


export async function getEmployees() {
    const response = await fetch(`${API_URL}/api/employee`)
    const employees = await  response.json()
    return employees
}

export async function getEmployeeById(id) {
    const response = await fetch(`${API_URL}/api/employee/${id}`)
    const employee = await response.json()
    return employee
}

export async function createEmployee(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const response = await fetch(`${API_URL}/api/employee`, requestOptions)
    if (response.ok) {
        return 
    } else {
        throw new Error('Error en la solicitud:' + response.status + response.statusText);
    }
}

export async function updateEmployee(obj, id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const response = await fetch(`${API_URL}/api/employee/${id}`, requestOptions)
    if (response.ok) {
        return 
    } else {
        throw new Error('Error en la solicitud:' + response.status + response.statusText);
    }
}

export async function deleteEmployee(id) {
    const requestOptions = {
        method: 'DELETE'
    };

    const response = await fetch(`${API_URL}/api/employee/${id}`, requestOptions)
    if (response.ok) {
        return 
    } else {
        throw new Error('Error en la solicitud:' + response.status + response.statusText);
    }
}


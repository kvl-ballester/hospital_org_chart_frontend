import { useEffect, useState } from "react"
import { redirect, useNavigate, useParams } from "react-router-dom"
import { getEmployeeById, getDepartments, createEmployee, updateEmployee } from "../../services/api"
import "./employeeEditNew.css"


export default function EmployeeEditNew() {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState()
    const [departmentNames, setDepartmentNames] = useState([])
    const {id} = useParams()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [department, setDepartment] = useState('')



    useEffect(() => {
        async function fetchEmployee() {
            const data = await getEmployeeById(id)
            setName(data.name)
            setSurname(data.surname)
            setDepartment(data.department)
            setEmployee(data)
        }

        async function fetchDepartments() {
            const departments = await getDepartments()
            const names = departments.map(department => department.name)
            setDepartmentNames(names)

            //set value showing in list in department state when creating employee
            if(!id) {
                setDepartment(names[0])
            }
        }


        if (id) {
            fetchEmployee()
        }

        fetchDepartments()

    }, [])

    function handleCancel() {
        navigate(-1)
    }

    async function handleNew() {
        try {
            const form = {
                name,
                surname,
                department
            }

            await createEmployee(form)
            navigate('/employee')
        } catch (error) {
            alert(error)
        }
    }

    async function handleEdit() {
        try {
            const form = {
                name,
                surname,
                department
            }

            await updateEmployee(form, id)
            navigate('/employee')
        } catch (error) {
            alert(error)
        }
    }
    
    return <div className="main">
        {((id && employee) || !id) &&

            <div className="employee-edit-new-page">
                <div className="card">
                    <div className="col name-container field">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col surname-container field">
                        <label htmlFor="">Surname</label>
                        <input type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div className="col department-container field">
                        <label htmlFor="department-select">Department</label>
                        <select size={1} value={department} onChange={(e) => setDepartment(e.target.value)} name="departments" id="department-select">
                            {departmentNames.length != 0 &&
                                departmentNames.map(name => {
                                    return <option key={name} value={name}>{name}</option>
                                })
                            }
                        </select>
                    </div>  
                </div>
                
                <div className="buttons row">
                    <button className="button cancel" onClick={handleCancel}>CANCEL</button>
                    <button className="button save" onClick={!id ? handleNew : handleEdit}>SAVE</button>
                </div>
            </div>
        }
        
    </div>
}
import { useEffect, useState } from "react"
import { getEmployees } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { IoPerson } from "react-icons/io5";
import "./employee.css"

export default function Employee() {{
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      async function fecthEmployees() {
        const data = await getEmployees()
        setEmployees(data)
      }
      
      fecthEmployees()
      
    }, [])

    function handleCreate() {
        navigate('/employee/new')
    }
    
    return <div className="main">
        <div className="employee-page">
            <div className="list">
                {employees.length != 0 &&
                    employees.map(employee => {
                        return <EmployeeInfo key={employee._id} employee={employee} />
                    })
                }
            </div>
            <div className="create-button" onClick={handleCreate}>
                <div>CREATE EMPLOYEE</div>
            </div>
        </div>
    </div>
}}

function EmployeeInfo({employee}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/employee/${employee._id}`)
    }
    return <div className="employee-detail row" onClick={handleClick}>
        <div className="photo"><IoPerson size={32} /></div>
        <div className="name-container col field">
            <label htmlFor="">Name</label>
            <div className="name">{employee.name}</div>
        </div>
        <div className="surname-container col field">
            <label htmlFor="">Surname</label>
            <div className="surname">{employee.surname}</div>
        </div>
        <div className="department-container col field">
            <label htmlFor="">Department</label>
            <div className="department">{employee.department}</div>
        </div>
    </div>
}
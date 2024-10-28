import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/api"
import { IoPerson } from "react-icons/io5";
import "./employeeDetail.css"


export default function EmployeeDetail() {
    const [employee, setEmployee] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      async function fetchEmployee() {
        const data = await getEmployeeById(id)
        setEmployee(data)
      }

      fetchEmployee()
    
    }, [])

    function handleEdit() {
        navigate(`/employee/${id}/edit`)
    }

    async function handleRemove() {
        console.log('click remove')
    }
    
    return <div className="main">
        {employee &&
            <div className="employee-detail-page col">
                <div className="card row">
                    <div className="photo col">
                        <IoPerson size={128} />
                    </div>
                    <div className="info col">
                        <EmployeeData employee={employee} />
                    </div>
                </div>
                
                <div className="buttons row">
                    <button className="button edit" onClick={handleEdit}>
                        Edit
                    </button>
                    <button className="button delete" onClick={handleRemove}>
                        Delete
                    </button>
                </div>
            </div>
        }
        
    </div>
}

function EmployeeData({employee}) {
    
    return <>
        <div className="row">
            <div className="col name-container field">
                <label htmlFor="">Name</label>
                <div className="name">{employee.name}</div>
            </div>
            <div className="col surname-container field">
                <label htmlFor="">Surname</label>
                <div className="surname">{employee.surname}</div>
            </div>
        </div>
        <div className="row">
            <div className="col department-container field">
                <label htmlFor="">Department</label>
                <div className="department">{employee.department}</div>
            </div>
        </div>
    </>
}
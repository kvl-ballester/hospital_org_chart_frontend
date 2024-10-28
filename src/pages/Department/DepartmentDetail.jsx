import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteDepartment, deleteEmployee, getDepartmentById } from "../../services/api"
import { IoPerson } from "react-icons/io5";
import { MdOutlineEdit, MdDelete } from "react-icons/md";

import "./departmentDetail.css"

export default function DepartmentDetail() {
    const navigate = useNavigate()
    const [department, setDepartment] = useState()
    const {id} = useParams()

    useEffect(() => {
        async function fetchDepartment() {
            const department = await getDepartmentById(id)
            setDepartment(department)
        }

        fetchDepartment()

    }, [])

    async function handleDelete() {
        try {
            await deleteDepartment(id)
            navigate('/department')
        } catch (error) {
            alert(error)
        }
    }
    
    return <>
        {department != null &&
            <div className="main">
                <div className="department-detail-page col">
                    <div className="row info">
                        <div className="name">
                            {department.name}
                        </div>
                        <div className="n-staff">
                            No. of employees: {department.staff.length}
                        </div>
                    </div>
                    <div className="staff">
                        {department.staff.map(employee => {
                            return <Employee key={employee._id} employee={employee}/>
                        })}
                    </div>
                    <div className="row buttons">
                        <button className="button delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                
            </div>

        }
    </>
}

function Employee({employee}) {
    const navigate = useNavigate()

    function handleClickName() {
        navigate(`/employee/${employee._id}`)
    }

    function handleEdit() {
        navigate(`/employee/${employee._id}/edit`)
    }

    async function handleDelete() {
        try {
            await deleteEmployee(employee._id)
            navigate(-1)
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="employee row">
            <div className="profile-photo"><IoPerson size={32} /></div>
            <div className="fullname" onClick={handleClickName}>{employee.fullname}</div>
            <div className="edit-button" onClick={handleEdit}>
                <div className="button-wrapper">
                    <MdOutlineEdit />
                </div>
            </div>
            <div className="delete-button">
                <div className="button-wrapper delete" onClick={handleDelete}>
                    <MdDelete />
                </div>
            </div>
        </div>
    )
}
import { useNavigate } from "react-router-dom"
import { getDepartments } from "../../services/api"
import { useState, useEffect } from "react"
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import "./department.css"


export default function Department() {
    const [departments, setDepartments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

      async function fecthData() {
        const dep = await getDepartments()
        setDepartments(dep)
      }

      fecthData()

    }, [])

    function handleNew() {
        navigate('/department/new')
    }
    
    return <>
        {departments.length !== 0 &&
            <div className="main">
                <div className="department-list">
                    { 
                        departments.map((department) => {
                            return <DepartmentItem key={department._id} department={department} />
                        })
                    }
                </div>
                <div className="create-button">
                    <div className="button" onClick={handleNew}>New Department</div>
                </div>
            </div>
        }
    </>
        
}


function DepartmentItem({department}) {
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate()
    
    function handleClick() {
        navigate(`/department/${department._id}`)
    }

    return (
        <div className="item">
            <div className={`row info ${expanded ? 'selected' : ''}`}>
                <div className="department-info row"  onClick={handleClick}>
                    <div className="name">{department.name}</div>
                    <div className="staff">No. of Employees: {department.staff.length}</div>
                </div>
                <div className={`expand-button ${department.staff.length > 0 ? "" : "hidden"}`}>
                    <div className={`button-wrapper ${expanded? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
                        {!expanded ? <HiArrowCircleDown size={24}/> : <HiArrowCircleUp size={24}/>}
                    </div>
                </div>
            </div>
            {expanded &&
                department.staff.map((employee) => {
                    return <EmployeeInfo key={employee._id} employee={employee}/>
                })
            }
            
        </div>
    )

}

function EmployeeInfo({employee}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/employee/${employee._id}`)
    }
    return <div className="row employee" onClick={handleClick}>
        <div className="name">{employee.fullname}</div>
    </div>
}
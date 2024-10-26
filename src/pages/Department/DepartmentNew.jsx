import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDepartment } from "../../services/api"
import "./departmentNew.css"

export default function DepartmentNew() {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleCancel() {
        navigate(-1)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: name
        }

        const response = await createDepartment(data)
        
        navigate('/department')
    }

    return <div className="main">
        <div className="department-new-page">
            <form onSubmit={handleSubmit}>
                <div className="col field">
                    <label htmlFor="name">Department name</label>
                    <input id="name" type="text" placeholder="Department name" value={name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="row buttons">
                    <button className="button cancel" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="button save">Save</button>
                </div>
            </form>
        </div>
        
    </div>
}
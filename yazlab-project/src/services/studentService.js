import axios from "axios";


export default class StudentService{
    getStudents()
    {
        return axios.get("http://localhost:8081/api/students/getAll")
    }
    getByStudentId(studentId)
    {
        return axios.get("http://localhost:8081/api/students/getByStudentId?studentId="+studentId)
    }
    addStudent()
    {
        return axios.post("http://localhost:8081/api/students/add")
    }

}
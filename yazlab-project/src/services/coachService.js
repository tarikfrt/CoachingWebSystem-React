import axios from "axios";


export default class CoachService{
    getCoaches()
    {
        return axios.get("http://localhost:8081/api/coaches/getAll")
    }
    getByCoachId(coachId)
    {
        return axios.get("http://localhost:8081/api/coaches/getByCoachId?coachId="+coachId)
    }
    
}
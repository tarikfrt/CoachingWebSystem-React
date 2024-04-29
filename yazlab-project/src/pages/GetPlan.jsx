import React from 'react'

export default function GetPlan() {
    const [plan, setPlans] = useState([]);
 
 
  
  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  },[]);
  return (
    <div>GetPlan</div>
  )
}

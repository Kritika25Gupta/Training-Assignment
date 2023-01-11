import { useState } from "react";
function Students(){
    const  [studentArray, setStudentArray]  =  useState([]);
    const [sid, setId] = useState("");
    const [sname, setName] = useState("");
    const [scourse, setCourse] = useState("");
    const [sage,setAge] = useState("");
    const [semail,setEmail] = useState("");
    function  getStudent_click()
    {
        let tempArray  = [     
            {  sid : 10256, sname:"Scott", scourse : "BBA", sage : 20, semail : "scott34@gmail.com"},
            {  sid : 10257, sname:"Smith", scourse : "BCA", sage : 19, semail : "smith56@gmail.com"},
            {  sid : 10258, sname:"Keya", scourse : "MBA", sage : 25, semail : "keya12@gmail.com"},
            {  sid : 10259, sname:"Kim", scourse : "BTECH", sage : 22, semail : "kim78@gmail.com"},
        ];
        setStudentArray( tempArray );
    }
    function  addStudent_click()
    {
        let studentObj = {};
        studentObj.sid = sid; 
        studentObj.sname = sname; 
        studentObj.scourse = scourse; 
        studentObj.sage = sage; 
        studentObj.semail = semail;  
        let tempArray2 = [...studentArray];
        tempArray2.push( studentObj );  
        setStudentArray( tempArray2 );
    }
    function updateStudent_click()
    {
        let tempArray3 = [...studentArray];
        let studentObj = tempArray3.find(item => item.sid==sid);
        studentObj.sname = sname; 
        studentObj.scourse = scourse; 
        studentObj.sage = sage; 
        studentObj.semail = semail;
        setStudentArray(tempArray3);
    }
    function deleteStudent_click(sid)
    {
        let tempArray4 = [...studentArray];
        let index = tempArray4.findIndex(item => item.sid==sid);
        tempArray4.splice(index,1);
        setStudentArray(tempArray4);
    }
    function  selectStudent_click(sid)
    {
         let studentObj = studentArray.find(item => item.sid == sid);
         setId(studentObj.sid);
         setName(studentObj.sname);
         setCourse(studentObj.scourse);
         setAge(studentObj.sage);
         setEmail(studentObj.semail);
    }
    let result = studentArray.map( item => 
        <tr>
            <td> {item.sid}  </td>  
            <td> {item.sname}  </td>                
            <td> {item.scourse}  </td>  
            <td> {item.sage} </td>
            <td> {item.semail} </td>
            <td>
                <a href="javascript:void(0);"  onClick={() => deleteStudent_click(item.sid)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectStudent_click(item.sid)}>Select</a>
            </td>
        </tr>);
    return(
        <div>
          <input placeholder="id"  value={sid}  onChange={e => setId(e.target.value)}  />
          <input placeholder="name"  value={sname} onChange={e => setName(e.target.value)}  />
          <input placeholder="Course" value={scourse}  onChange={e => setCourse(e.target.value)}  />
          <input placeholder="Age"  value={sage} onChange={e => setAge(e.target.value)}  />
          <input placeholder="Email" value={semail}  onChange={e => setEmail(e.target.value)}  />
          <br/><br/>
          <input type="button" value="Get Data" onClick={getStudent_click} />
          <input type="button" value="Add Data" onClick={addStudent_click} />
          <input type="button" value="Update Data" onClick={updateStudent_click}/>
          <br/><br/>
          <table border="2"  width="500">
              <tr>
                <th>ID</th>
                <th>Student Name</th>               
                <th>Course</th>
                <th>Age</th>
                <th>Email</th>
                <th></th>
              </tr>  
                {result}
            </table>
        </div>
    )
}
export default Students;
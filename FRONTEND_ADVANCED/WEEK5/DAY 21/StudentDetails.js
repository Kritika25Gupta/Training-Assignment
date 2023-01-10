function StudentDetails(){
    var details={sid:1045, sname:"Kim", course:"CA", age:22, total:450000 };
    return(
        <tr>
            <td>{details.sid}</td>
            <td>{details.sname}</td>
            <td>{details.course}</td>
            <td>{details.age}</td>
            <td>{details.total}</td>
        </tr>
    )
}
export default StudentDetails;
import {AiFillStar} from "react-icons/ai";
function Details()
{
    var docArray=[{src:"https://th.bing.com/th/id/R.215c1ff399e961851cc11a7810886a0e?rik=oZfxvnavGwz6cA&riu=http%3a%2f%2fwww.writergirl.com%2fwp-content%2fuploads%2f2014%2f11%2fDoctor-790X1024.jpg&ehk=CmnYm47Si7SLogCKQcVQ9Onueou53ycpcjvFFc3Ej00%3d&risl=&pid=ImgRaw&r=0", name:"Patey Cruiser", job:"Neurosurgeon",star:4},
{src:"https://th.bing.com/th/id/OIP.j6Eg2a_GN765REWVx9kavgHaHa?pid=ImgDet&rs=1", name:"Mario Speedway", job:"Cardiologist",star:5},
{src:"https://th.bing.com/th/id/OIP.7ZuYwrIdy7FFk5IXAI7bcAHaGl?pid=ImgDet&rs=1", name:"Anna Sthesia", job:"Surgeon",star:3},
{src:"https://pngimg.com/uploads/doctor/doctor_PNG16041.png", name:"Paul Moliv", job:"Dentist",star:2},
{src:"https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg", name:"Anna Maul", job:"Eye Specialist",star:4},
{src:"https://medimobile.files.wordpress.com/2012/07/kozzi-handsome-young-doctor-smiling-1183-x-1774.jpg", name:"Gail Forcewind",job:"Urology",star:4},
{src:"https://www.flngr8.com/themes/033-lcw-doctor/assets/images/img/img-doctor05.png", name:"Patey Cruiser", job:"Neurosurgeon",star:4},
{src:"https://th.bing.com/th/id/OIP.ed9BPk56R-ZuVSBARMMXoQHaLQ?pid=ImgDet&rs=1", name:"Patey Cruiser", job:"Neurosurgeon",star:5}];
let result=docArray.map(item =>
    <div id="d1">
    <img src={item.src}/>
    <p id="n">{item.name}</p>
    <p>{item.job}</p>
    <p> {new Array(item.star).fill(1).map(item => <AiFillStar style={{fontSize:"20px",color:"green"}}></AiFillStar>)}</p>
    <button>Book Appointment</button>
    </div>);
return(
    <>
    {result}
    </>
)
}
export default Details
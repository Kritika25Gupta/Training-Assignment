import { useState } from "react";
import dataServiceObj from './DataService';

function Events() { 
    const [eventsArray, setEventsArray]  =  useState([]);
    const [id, setId] = useState("");
    const [genre, setGenre] = useState("");
    const [name, setName] = useState("");
    const [ticketprice, setTicketprice] = useState("");
    const [mode, setMode] = useState("");;
    const [location, setLocation] = useState("");
    function  getEvents_click()
    {
       dataServiceObj.getData().then( resData => 
        {
            setEventsArray(resData.data);
        });
    }
    function  addEvents_click()
    {
        let eventsObj = {};
        eventsObj.id = id; 
        eventsObj.genre = genre; 
        eventsObj.name = name; 
        eventsObj.ticketprice = ticketprice; 
        eventsObj.mode = mode; 
        eventsObj.location = location; 
        dataServiceObj.addData(eventsObj).then(resData => 
        {
          alert("New Event details are added to Server");
          getEvents_click();
        });  
    }
    function  deleteEvents_click(id)
    {
        dataServiceObj.deleteData(id).then(resData => 
        {
          alert("Event details are deleted from Server");
          getEvents_click();
        });
    }
    function  selectEvents_click(id)
    { 
         dataServiceObj.getDataById(id).then(resData => 
          {
            let eventsObj = resData.data;  // it returns single object
            setId(eventsObj.id);
            setGenre(eventsObj.genre);
            setName(eventsObj.name);
            setTicketprice(eventsObj.ticketprice);
            setMode(eventsObj.mode);
            setLocation(eventsObj.location);
          }); 

    }
    function  updateEvents_click()
    {
        let eventsObj = {};
        eventsObj.id = id; 
        eventsObj.genre = genre; 
        eventsObj.name = name; 
        eventsObj.ticketprice = ticketprice; 
        eventsObj.mode = mode; 
        eventsObj.location = location; 
        dataServiceObj.updateData( eventsObj ).then(resData => 
        {
          alert("Event details are updated in  Server");
          getEvents_click();
        });
    }
    let result = eventsArray.map( item => 
        <tr className="table-primary">
            <td> {item.id}  </td>  
            <td> {item.genre}  </td>                
            <td> {item.name}  </td>  
            <td> {item.ticketprice} </td>
            <td> {item.mode} </td>
            <td> {item.location} </td>
            <td align="center">
                <a href="javascript:void(0);"    onClick={() => deleteEvents_click(item.id)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectEvents_click(item.id)}>Select</a>
            </td>
        </tr>);
  return (
      <>
          <input placeholder="id"  value={id}  onChange={e => setId(e.target.value)}  />
          <input placeholder="genre"  value={genre} onChange={e => setGenre(e.target.value)}  />
          <input placeholder="name" value={name}  onChange={e => setName(e.target.value)}  />
          <input placeholder="ticketprice" value={ticketprice}  onChange={e => setTicketprice(e.target.value)}  />
          <input placeholder="mode" value={mode}  onChange={e => setMode(e.target.value)}  />
          <input placeholder="location" value={location}  onChange={e => setLocation(e.target.value)}  />
        <br/><br/>
          <div className="btn-group">
          <input type="button" className="btn btn-primary" value="Get Events" onClick={getEvents_click} />
          <input type="button" className="btn btn-success" value="Add Events" onClick={addEvents_click} />
          <input type="button" className="btn btn-warning" value="Update Events" onClick={updateEvents_click} />
          </div>
        <br/><br/>
          <table className="table" border="2"  width="500">
              
              <thead>
                <tr className="table-success">
                  <th>ID</th>
                  <th>Genre</th>               
                  <th>Name</th>
                  <th>Ticket price</th>
                  <th>Mode</th>
                  <th>Location</th>
                  <th></th>
                </tr>  
              </thead>
              <tbody>
                {result}
              </tbody>
          </table>
      </>   
  );
}
export default Events;
import axios from 'axios';
let dataServiceObj = {};
let url = "http://localhost:3500/event/";
dataServiceObj.getData = function()
{
    return axios.get(url);
};
dataServiceObj.getDataById = function(id)
{
    return axios.get(url + id);
};
dataServiceObj.addData = function( eventsObj )
{
    return axios.post(url, eventsObj);
};
dataServiceObj.updateData = function( eventsObj )
{
    return axios.put(url + eventsObj.id,  eventsObj);
};
dataServiceObj.deleteData = function(id)
{
    return axios.delete(url + id);
};
export default dataServiceObj;
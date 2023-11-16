
const respose = {
  name:"albert",
  lastName:"perex"
}

export default (req, res) => {
  
  res.send(JSON.stringify(respose));
};
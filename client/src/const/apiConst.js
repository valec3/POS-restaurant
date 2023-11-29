
const API_URL = 'http://localhost:3000/api';

export async function takeAll(){
  console.log('se uso');
  
  const response = await fetch('http://localhost:3000/api');
  const data = await response.json();
    console.log('hola desde la funcion',data);
    
  return data
}


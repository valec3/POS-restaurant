import { useState } from "react";
import useBill from "../../hooks/useBill";
import NewOrder from "./NewOrder";

const BillMap = ({selectOrder,setNewOrder,newOrder,addNewOrder}) =>{

  
  const bills = useBill();
  const {tableAviable,filterTable,allOrders,curretOrders,tableFromMap, setTableFromMap} = bills;
  const tableOcupated = filterTable();
  const [showTable , setShowTable] = useState([]);
  const [oneTable , setOneTable] = useState();
  let id;
  



  useState(()=>{
    const noDelivery = tableAviable.filter(table => table !="delivery")
    const tables = noDelivery.map((table, index)=>{
      const originID = index;
      const isOcupated =   tableOcupated.includes(table)
     
        const bills = allOrders.filter(bill => bill.table == table)
        const result = bills.filter(bill=>bill.status)
        if(typeof (result[0]?.id)=="number"){
          id = result[0]?.id
        setOneTable(result[0]?.id)
        
        index = curretOrders.findIndex(element => element.id == id);
        }
      
  
      return  <div  onClick={()=>{isOcupated ? selectOrder(id,index):addNewOrder(table)}} 
      className={`tableMap ${isOcupated?'ocupated':""}`}
       key={originID}>{table}
       </div>
    })
    setShowTable(tables)

  },[])
   
  
   
  
  return (
<section className="billContainer-header billmap">
  
  <div className="tableContainer">
  {showTable}

  </div>
</section>
)}

export default BillMap
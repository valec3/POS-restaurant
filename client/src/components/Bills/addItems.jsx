const AddItemsView = ({isVisible , setIsVisible}) =>{


  return (
<section className={`AddItemsView-containers ${isVisible?'toMostrar':''}`}>
  <main className="AddItemsView-info">
    <div className="AddItemsView-boton" onClick={()=>setIsVisible(false)}>x </div>
    <h1>hola</h1>
  </main>
</section>
)}

export default AddItemsView
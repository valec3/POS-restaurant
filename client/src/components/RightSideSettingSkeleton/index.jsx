import "./style.scss"

const RightSideSettingSkeleton = ()=>{
  return(
    <section className="settingContainer right-side moveOuts">
      <p className="skeletonContainer-title">Loading</p>
      <BarrAnmate/>
      <BarrAnmate/>
      <BarrAnmate/>
      <BarrAnmate/>
      <BarrAnmate/>
      <BarrAnmate/>
      
    </section>

  )};

const BarrAnmate = () =>{
  return(
    <div className="skeletonContainer">
        
        <div>
        <div className="barr">
          <div className="barr-animate"></div>
        </div>
        <div className="barr">
        <div className="barr-animate"></div>
        </div>
        <div className="barr">
        <div className="barr-animate"></div>
        </div>

        </div>
       
      </div>
  )
}
export default RightSideSettingSkeleton;
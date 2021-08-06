const ShowTable = ({dataTable}) => {
      const d=new Date()
      const fullDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()   
     
    return (
        <div className='table'>
        <div className='data-container'>
              <div>DATE</div>
              <div>CLOCK IN</div>
              <div>CLOCK OUT</div>
              </div>
            {dataTable.map((time)=>(
                <div className='data-container'>
                  <div>{fullDate}</div>
                  <div>{time.before}</div>
                  <div>{time.after}</div> 
                </div>
            ))}
            
        </div>
    )
}

export default ShowTable

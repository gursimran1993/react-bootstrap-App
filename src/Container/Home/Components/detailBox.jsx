import React, {Fragment} from 'react'
function DetailBox({data}){
    return(
        <Fragment>
            {data.cardTitle.isValid ? <div className="card-title">{data.cardTitle.titleHeading}</div> :""}
             
     <div className={data.bgImage === true ? "content-block box" : "content-block"}>
    <h4 className="card-subtitle">{data.heading}</h4>
    <p>{data.content}</p>
        
    <p>{data.list.listHeading}</p>
             <ul>
             {data.list.listData.map((item, index) => (  
<li key={index}>{item}</li>
                 ))}
             </ul>
             
          <button type="button" className={!data.bgImage ? "btn-circle-half btn-circle" : "btn-circle"}>{data.button}</button> 
      </div>
       </Fragment>
    )
}
export default DetailBox
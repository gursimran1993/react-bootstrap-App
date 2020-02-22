import React, { Fragment } from 'react'
import DetailImg from './detailImg'
import DetailBox from './detailBox'
 
class DetailBlocks extends React.Component{

    render(){
        const {data} = this.props 
        var imgUrl = data.bgImage ? require('../../../assets/img/' + data.blockImg) : "";
        var bgImg = {
            backgroundImage: `url(${imgUrl})`
        }
return(
   <Fragment>
   <section className="section-bg-img"  style={bgImg}>
   <div className="container-fluid">
    <div className="row row-eq-height">
        <div className={data.position === "right" ? "col-md-7 pl-0" : data.bgImage ? "col-md-4 overlay" : "col-md-5 main-data-content"}>
         
         {data.position === "right" ? !data.bgImage ? <DetailImg data={data.blockImg}/> : "" : <DetailBox data={data}/>}
         
        </div>
        <div className={data.position === "right" ? data.bgImage ? "col-md-5 overlay" : "col-md-4" :"col-md-7 pr-0"}>
        {data.position === "right" ?  <DetailBox data = {data}/> : !data.bgImage ? <DetailImg data = {data.blockImg}/> : ""}
        </div>
    </div>
    </div>    
    </section> 
    
    </Fragment> 
    
)
}
}

export default DetailBlocks
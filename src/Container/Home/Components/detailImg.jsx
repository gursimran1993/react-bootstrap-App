import React, {Fragment} from 'react'
function DetailImg({data}){
    return(
        <Fragment>
       <img className="w-100" src={require('../../../assets/img/' + data)} alt={data}/>
       </Fragment>
    )
}
export default DetailImg
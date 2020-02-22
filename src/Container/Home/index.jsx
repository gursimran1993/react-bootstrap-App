import React, { Fragment } from 'react'
import Banner from './Components/banner'
import DetailBlocks from './Components/detailBlock'
function Home() {
   const blockPage = [
        {position:"left", 
        bgImage:false,
        blockImg:"2.png", 
        cardTitle:{isValid:true, titleHeading:"Brewery and Fine dining Restourant"}, 
        heading:"Order Online", 
        content:"Order food online from our restaurant in Bangalore", 
        list:{
            isValid:true, 
            listHeading:"Big Brewsky offers you",
            listData:[
                "Wide Range of food cuisines to taste", 
                "Home delivery", 
                "Online Payment"
            ]
        },
        button:"Order Now"  

    },
    {
    position:"right", 
    bgImage:true, 
    blockImg:"3.jpg",
    cardTitle:{isValid:false, titleHeading:""}, 
    heading:"Reservation", 
    content:"Big Brewsky also has a powerfull option that puts you in control of your table management and reservation earliar with our online reservation system", 
    list:{
        listHeading:"",
        listData:[]
    },
    button:"Book a table"  

},
      {position:"left", 
        bgImage:false,
        blockImg:"4.jpg", 
        cardTitle:{isValid:false, titleHeading:""}, 
        heading:"Party Packages", 
        content:"Big Brewsky is an ideal venue for hosting a fabulous party. We are happy to accommodate all your entertainment needs. Alternative & experimental musicians are playing & plan your evening accordingly.", 
        list:{
            listHeading:"",
            listData:[]
        },
        button:"Book a Package"  

    },
    {
        position:"right", 
        bgImage:true, 
        blockImg:"5.jpg",
        cardTitle:{isValid:false, titleHeading:""}, 
        heading:"Our Beers", 
        content:`Phenomenal beers brewed by overseleves, is what big brewsky built it's name on. To accompany them, we have a range of exquisite food from indian to Sushi. Our open air setup, let's you enjoy all the good things in life. The weather, great music and our very own hand creafted beers. ` , 
        list:{
            listHeading:"",
            listData:[]
        },
        button:"Know More"  
    
    },
    ]
        return(
            <Fragment>
                <Banner/>
                {blockPage.map((item, index) => (
                <DetailBlocks data= {item} key={index}/>
                ))}
            </Fragment>
        )
}
export default (Home)
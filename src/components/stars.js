import React from 'react';



const Stars=({starscolor,starsrate=( )=>{}, starcolor=( )=>{}}) => {

    let tabstars = []
   
    for(let i=0;i<5;i++){
    
 const Onclickhandle = () => {
      starsrate(i+1) 
      starcolor(i+1)
    }

      if(i < starscolor){
        tabstars.push(<i className="fas fa-star fa-2x isyellow" onClick={Onclickhandle} ></i>)
      }
      else
      tabstars.push(<i className="fas fa-star fa-2x"  onClick={Onclickhandle} ></i>)

    }
    return <div className="heart">{tabstars}</div>
    
  }

export default Stars 







 
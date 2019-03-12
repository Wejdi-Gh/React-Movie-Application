import React from 'react';
import film1 from '../Images/Film1.jpg'
import film2 from '../Images/Film2.jpg'
import film3 from '../Images/Film3.jpg'
import film4 from '../Images/Film4.jpg'
import film5 from '../Images/Film5.jpg'
import film6 from '../Images/Film6.jpg'
import film7 from '../Images/Film7.jpg'
import film8 from '../Images/Film8.jpg'
import Stars from './stars'
import Addfilm from './addfilm'
import Hocmovielist from './hocmovielist'

 const Card = (props)=> <div className="card" >
    <img src={props.film.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.film.title}</h5>
      <Stars starscolor={props.film.yellowstars}/>
      <a href="#" className="btn btn-warning" > Play </a>
      <a href="#" className="btn btn-danger" onClick={()=>props.remove(props.film)}> remove </a>
    </div>
  </div>
   


class Filmcard extends React.Component  {
  constructor(props) {
    super(props)
    this.state= {image :"", title:"", yellowstars:0 , display:false , tab: [
      {image:film1 , title : "ALIEN" , yellowstars: 3 },
      {image:film2 , title : "RED SPPAROW",yellowstars : 3 } ,
      {image:film3 , title : "TRUTH OR DARE",yellowstars : 2 },
      {image:film4 , title : "GLASS" ,yellowstars : 5 },
      {image:film5 , title : "ALL THE MONEY",yellowstars : 4  },
      {image:film6 , title : "THOR" ,yellowstars : 2 } ,
      {image:film7 , title : "BRIDGE OF SPIES",yellowstars : 3 },
      {image:film8 , title : "CHOOSE",yellowstars : 1 },
      ] }
   
     
   }

  

  duplicate = (el, index, arry) =>{ 
     return arry.indexOf(el) !== index }

  addnewfilm=(newimage,newtitle,newrate,newdisplay)=> {
    this.setState({image : newimage, title:newtitle, yellowstars:newrate,display:newdisplay}) }   
   
   
    removefilm= (el)=> { if (window.confirm("Are you sure you want to delete this task?"))
    { 
      let index= this.state.tab.indexOf(el)
      let tab6=[...this.state.tab]
      tab6.splice(index,1)
      this.setState({tab:tab6})}
     }
    
  
render () {


  if (this.state.display) {
     this.state.tab.push({image :this.state.image, title:this.state.title, yellowstars:this.state.yellowstars})
    
     this.setState({display : !this.state.display})
    }
    

   this.tab2=this.state.tab.filter(this.props.result)
   this.tab3=this.state.tab.filter(this.props.rateresult)
   this.tab4=this.tab2.concat(this.tab3).filter(this.duplicate)


 return ( <div className="filmlist"> 
 
   {this.tab4.map((el,i )=> <Card addevent={this.addevent} key={i} film={el} remove={this.removefilm}/>)}
   <Addfilm newfilm={this.addnewfilm} /> 
    
   </div>
  
  );
  
 }

}
    
    export default Hocmovielist(Filmcard)
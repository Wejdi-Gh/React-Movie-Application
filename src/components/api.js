import React from 'react';
import Stars from './stars'
import Addfilm from './addfilm'
import axios from "axios";

 const Card = (props)=> <div className="card" >
    <img src={`https://image.tmdb.org/t/p/w500/${props.film.poster_path}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.film.title}</h5>
      <Stars starscolor={Math.round(props.film.vote_average/2)}/>
      <p> {props.film.overview}</p>
      <a href="#" className="btn btn-warning" onClick={()=>props.play(props.film.id)}> Play </a>
    
    </div>
  </div>
   
   


class Apifilm extends React.Component  {
  constructor(props) {
    super(props)
    this.state= { image :"", title:"", yellowstars:0 , display:false , tab: [],apiincriment:1}
    
    this.apicharge=this.apicharge.bind(this)
    
   }



 updateapionclick = ()=> {this.setState({apiincriment: this.state.apiincriment+1})
 
 window.scrollTo(0, 0)
}

updateapionclickdecriment = ()=> {
  if (this.state.apiincriment > 1){
  this.setState({apiincriment: this.state.apiincriment-1})
 
window.scrollTo(0, 0)}
}


 componentDidUpdate=() => this.apicharge()

apicharge() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=${this.state.apiincriment}` 
      )
      .then(object => this.setState({ tab: object.data.results }))
 
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4ace3fe68ae5a10120b01abb692f8b4a&language=en-US&page=1` 
      )
      .then(object => this.setState({ tab: object.data.results }))
 
  }
  


  playmovie=(id)=> window.open(`https://www.themoviedb.org/movie/${id}`,'_blank' )

  duplicate = (el, index, arry) =>{ 
     return arry.indexOf(el) !== index }

  addnewfilm=(x,y,z,w)=> {
    this.setState({image :x, title:y, yellowstars:z,display:w}) }   
   
 
    
    

render () {
console.log(this.props.apidata)

  if (this.state.display) {
     this.state.tab.push({image :this.state.image, title:this.state.title, yellowstars:this.state.yellowstars})
    
     this.setState({display : !this.state.display})
    }
    

   const tab2=this.state.tab.filter(this.props.result)
   const tab3=this.state.tab.filter(this.props.rateresult)
   const tab4=tab2.concat(tab3).filter(this.duplicate)


 return ( <div > 
   <div className="filmlist"> 
 
   {tab4.map((el,i )=> <Card addevent={this.addevent} play={this.playmovie} key={i} film={el} />)}
   
   </div>

  
   <div class="prevnext"> 

   <div className="loadmore"> 
   <i class="fas fa-angle-double-left" onClick={this.updateapionclickdecriment}></i>
   <input type="button" value="Previous" className="next" onClick={this.updateapionclickdecriment}/> 
   </div>

   
   <div className="loadmore"> 
   <input type="button" value="Next" className="next" onClick={this.updateapionclick}/> 
   <i class="fas fa-angle-double-right" onClick={this.updateapionclick}></i>
   </div>

   </div>
    

    </div>
  
  );
  
 }

}
    
    export default Apifilm


  
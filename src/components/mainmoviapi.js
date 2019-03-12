import React, { Component } from 'react';
import Searchbar from './SearchBar'
import Apifilm from './api'
import axios from "axios";

class Mainmoviesapi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {dataresearch :"" , rateindex:0,tab:[]}
     
       }

    
       searchfilm =(el) => {
        if (el.title.toLowerCase().indexOf(this.state.dataresearch)!==-1) return el 
      
        }
 
      
      transferstate = (searchdata) => {
        this.setState({dataresearch : searchdata})
       }
        
    searchdelete =() => {
      this.setState({dataresearch : "", rateindex:0})
    }
    
    ratedata = (rate) => this.setState({rateindex: rate})
    
    searchrate= (el) => {
    if (this.state.rateindex === 0 ) return el
    if (Math.round(Math.round(el.vote_average/2)) === this.state.rateindex) return el
    }

     render() {
        return (<div>
<Searchbar transferdata={this.transferstate}  ratedatatransfer={this.ratedata} delete={this.searchdelete}/>
 <div className="margin"></div>
 <Apifilm result={this.searchfilm}  rateresult ={this.searchrate}  />
 </div>

) }
 }

export default Mainmoviesapi
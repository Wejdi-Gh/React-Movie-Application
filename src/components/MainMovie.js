import React, { Component } from 'react';
import Searchbar from './SearchBar'
import Filmcard from './filmcard'
import API from './api'


class Mainmovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {dataresearch :"" , rateindex:0}
     
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
    if (el.yellowstars === this.state.rateindex) return el
    }

     render() {
        return (<div>
<Searchbar transferdata={this.transferstate}  ratedatatransfer={this.ratedata} delete={this.searchdelete}/>
 <div className="margin"></div>
 <Filmcard result={this.searchfilm}  rateresult ={this.searchrate} />
 </div>

) }
        }

export default Mainmovies
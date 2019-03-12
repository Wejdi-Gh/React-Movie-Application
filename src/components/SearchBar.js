import React from 'react'
import Stars from './stars'

class Searchbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {filmsearch :"", counterstars : "" , starscolor:"" }
  this.datahandle=  this.datahandle.bind(this)

  
  
   }

  
datahandle =(e)=> {
this.setState({filmsearch: e.target.value})
this.props.transferdata(e.target.value.toLowerCase() )
}

changestarscolor = (colordata) => {
  this.setState({starscolor : colordata})
 }

 clearall=() =>{
  this.props.delete()
  this.setState({filmsearch:"", starscolor: 0})
 }

render () {
return (<nav className="navbar navbar-light bg-light">
<div className="title"><i className="fas fa-video fa-3x"></i>
<h1> EnJoy Watching </h1> </div>

<form className="form-inline">
  <input className="form-control mr-sm-2" value = {this.state.filmsearch} list="browsers" name="browser" type="search" placeholder="Search" aria-label="Search" 
  onChange={this.datahandle}/>
  <datalist id="browsers">
    <option value="ALIEN"/>
    <option value="RED SPPAROW"/>
    <option value="TRUTH OR DARE"/>
    <option value="GLASS"/>
    <option value="ALL THE MONEY"/>
    <option value="BRIDGE OF SPIES"/>
    <option value="CHOOSE"/>
    <option value="ALL THE MONEY"/>
  </datalist>
</form>
<Stars starscolor={this.state.starscolor} starsrate={this.props.ratedatatransfer} starcolor={this.changestarscolor}/>
<i className="fas  fa-reply-all fa-2x" onClick ={this.clearall} ></i>
</nav>);

}
}

export default Searchbar







 
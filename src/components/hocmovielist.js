import React from 'react';

const Hocmovielist =  (Movielistcomponent)=> {

return  class Hocmovielist extends React.Component { 
    
    constructor(props) {
        super(props)    
        
    this.state = {isspinner: true }
       }
       componentDidMount(){
        setTimeout (()=>this.setState({isspinner:false}),5000)

       }

     spinner () {
      return <div class="loading-container">
                <div class="spinner"></div>
                <div class="spinner-center"></div>
                <div class="loading-text"> Loading...</div>
               </div>       
        
       }
        render () {
        return (
          this.state.isspinner? this.spinner () : <Movielistcomponent {...this.props} />
           
        )}
        
 }

}

export default Hocmovielist
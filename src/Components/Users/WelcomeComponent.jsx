import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class WelcomeComponent extends Component{
   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                       Welcome {this.props.params.name}.
                       <div> You can view the users list by click <Link to='/users'>here</Link></div>
                       <button className='mt-3 btn btn-success btn-sm col-lg-3'>Get Message</button>
                   </div>
               </div>
           </div>
       )
   }
}

export default WelcomeComponent;
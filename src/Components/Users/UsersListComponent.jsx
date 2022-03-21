import React,{Component} from 'react';


class UsersListComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            usersList: [
                {id:1, name:"karthi", designation:"developer", doj: new Date(), status: false},
                {id:2, name:"sabari", designation:"developer", doj: new Date(), status: false},
                {id:3, name:"sathya", designation:"developer", doj: new Date(), status: false},
                {id:4, name:"venkat", designation:"developer", doj: new Date(), status: false},
            ]
        }
    }

   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                       <h4>Users List</h4>
                       <table className='table table-hover table-striped'>
                           <thead>
                               <tr>
                                   <th>ID</th>
                                   <th>Name</th>
                                   <th>Designation</th>
                                   <th>DOJ</th>
                                   <th>Status</th>
                                   <th>Update</th>
                                   <th>Edit</th>
                                   <th>Delete</th>
                               </tr>
                           </thead>
                           <tbody>
                               {this.state.usersList.map(
                                   users =>
                                   <tr key={users.id}>
                                       <td>{users.id}</td>
                                       <td>{users.name}</td>
                                       <td>{users.designation}</td>
                                       <td>{users.doj.toString()}</td>
                                       <td>{users.status.toString()}</td>
                                       <td><button className='btn btn-success btn-sm'>Update</button></td>
                                       <td><button className='btn btn-warning btn-sm'>Edit</button></td>
                                       <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                                   </tr>
                               )}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       )
   }
}

export default UsersListComponent;

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import BlockHeader from './BlockHeader';
import * as action from '../actions';
class UserDashboard extends Component{
    
    render(){
        var userId = this.props.match.params.id;
        var selectedUser =  this.props.users.filter(user => user._id ===  userId)[0];
        console.log(selectedUser);
        return(
            <section id="userContent" className="content">
                <BlockHeader header={selectedUser.name} photo={selectedUser.photo} />
                <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="card product-report">
                                    <div className="header">
                                    </div>
                                    <div className="body">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Activity</strong></h2>
                                        
                                    </div>
                                    <div className="body">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}
function mapStateToProps({selectedProject,users}){
    return {project : selectedProject,users};
}

export default connect(mapStateToProps, action)(UserDashboard);
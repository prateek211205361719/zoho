

import React,{ Component } from 'react';
import BlockHeader from './BlockHeader';
import UserCard from './projectDashboardChild/UserCard';
import {connect} from 'react-redux';
import * as action from '../actions';


class ProjectDashboard extends Component{
   
    componentDidMount(){
        var projectId = this.props.match.params.id;
        var selectedProject =  this.props.project.filter(item => item._id ===  projectId)[0];
        this.props.selectedProject(selectedProject);
    }

    render(){
       var projectId = this.props.match.params.id;
       var selectedProject =  this.props.project.filter(item => item._id ===  projectId)[0];
      
       return(
            <section className="content">
                    <BlockHeader header={selectedProject.name} subHeader="Dashboard" />
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
                                        <h2><strong>Team</strong>({selectedProject.Users.length})</h2>
                                        
                                    </div>
                                    <div className="body">
                                        <UserCard users={selectedProject.Users} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                        </div>
                    </div>
                </section>
       );
    }

}
function mapStateToProps({project}){
    return {project};
}
export default connect(mapStateToProps, action)(ProjectDashboard);
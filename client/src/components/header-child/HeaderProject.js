

import React,{Component} from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';
class HeaderProject extends Component{
    
   
    renderContent(){
        return this.props.project.map((item, index) => {
            return(
                <li key={`projectjskey${index}`}>
                    <Link  to={`/project/${item._id}`}>
                        <div className="progress-container progress-primary">
                            <span className="progress-badge">{item.name}</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{width: '86%'}}>
                                    <span className="progress-value">86%</span>
                                </div>
                            </div>      
                            <div>
                                 <p className="m-r-15"><small className="text-muted">Team</small></p>
                            </div>                  
                            <ul className="list-unstyled team-info">
                             
                               { 
                                 item.Users.map((user,index) => <li key={`projectjskeyUser${index}`}><img src={user.photo} /></li>)
                               }
                            </ul>
                        </div>
                    </Link>
                 </li>
            );
        });
    }
   

    render(){
        return(
            <ul className="dropdown-menu themeIcom pullDown leftIcon">
                <li className="header">Project</li>
                <li className="body" style={{"overflow":"scroll"}}>
                    <div className="slimScrollDiv" style={{"position": "relative", "width": "auto", "height": "300px"}}>
                        <ul style={{"width": "auto", "height": "300px"}} className="menu tasks list-unstyled">
                            
                            {this.renderContent()}
                        </ul>
                    </div>
                </li>
                <li className="footer">
                    <a href="javascript:void(0);">
                        View All
                    </a>
                </li>
            </ul>
        );
    };
}

function mapStateToProps(state){
    return {
        project: state.project
    }
}

export default connect(mapStateToProps, null)(HeaderProject);
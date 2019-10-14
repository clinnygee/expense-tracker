import React, { Component } from 'react';
import './sidebar.css'
import ThumbnailPicture from '../../../img/default-icon.jpeg';
import NoImage from '../../../img/no-image.jpeg'
import SidebarNavigation from './SidebarNavigation';
import {UserConsumer} from '../../../user-context';


class sidebar extends Component {
    render() {
        // Set up react router, i think every link should be included in a <Link /> which references one of the different options to display
        // in the content display
        return (
            <div className='sidebar-nav'  >
                <div className='sidebar-nav-head'>
                    {/* <div className='sidebar-nav-header-icon'>
                        <img src={ThumbnailPicture} alt='user-icon'/>
                    </div> */}
                    <SidebarUserPhoto />
                    <div className='sidebar-nav-header-username'>
                        <p>{this.props.username}</p>
                    </div>
                    <div className='sidebar-nav-header-settings'>
                        <i className='fas fa-camera'></i>
                    </div>
                </div>
                <div className='sidebar-nav-links'>
                    <UserConsumer>
                        {
                            context => (
                                <SidebarNavigation signOut={context.signOut} />
                            )
                        }
                    </UserConsumer>
                    
                </div>

                
            </div>
        );
    }
};



class SidebarUserPhoto extends Component {

    state = {
        upload: false,
        fileURL: null,
        file: null,
    };

    toggleOpenForm = () => {
        console.log('open the fucking modal')
        this.setState({upload: !this.state.upload});
    };

    handleFileChange = (e) => {
        this.setState({
            fileURL: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0],
        })
        setTimeout(3000, console.log(this.state.file));
    };

    onFileSubmit = () => {
        // send to the server,

        // when the server responds that it works,
        // retrieve user data from the server, so that the image update is displayed.

        // close the modal.
    }

    render(){
        if(this.state.upload){
            return (
                <React.Fragment>
                    <div className='sidebar-nav-header-icon' onClick={this.toggleOpenForm}>
                        <img src={ThumbnailPicture} alt='user-icon' onClick={this.toggleOpenForm}/>
                    </div>
                    <div className='modal-photo-upload'>
                        <div className='modal-photo-upload-content'>
                            <div className='modal-photo-upload-close'>
                                <button className='close' onClick={this.toggleOpenForm}>X</button>
                            </div>
                            <div className='modal-photo-upload-form-container'>
                                <form className='modal-photo-upload-form'>
                                    <div className='modal-photo-upload-preview'>
                                        <img src={this.state.fileURL ? this.state.fileURL : NoImage} alt='upload preview'/>
                                    </div>
                                    <input type='file' onChange={this.handleFileChange}>
                                    </input>
                                    <input type='submit' value='Upload' className='btn btn-primary btn-lg'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                
                
            )
        } else {
            return (
                <div className='sidebar-nav-header-icon' onClick={this.toggleOpenForm}>
                    <img src={ThumbnailPicture} alt='user-icon' onClick={this.toggleOpenForm}/>
                </div>
            )
        }
        
    }
}

export default sidebar;
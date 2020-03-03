import React, { Component } from 'react';
import './sidebar.css'

import NoImage from '../assets/no-image.jpeg'
import SidebarNavigation from './SidebarNavigation';
import {UserConsumer} from '../../user-context';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



class sidebar extends Component {

    
    
    state = {
        mobileView : null, 
    }

     checkMobile = () => {
        const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width; 

        let mobile = false;

        width <= 768 ? mobile = true : mobile = false;

        this.setState({mobileView: mobile});

        
     }

     componentWillMount(){
        
        this.checkMobile();

         window.addEventListener('resize', this.checkMobile);
     }

     componentWillUnmount(){
         console.log('removed mobile listener')
         window.removeEventListener('resize', this.checkMobile);
     }

    

    

    render() {
        // Set up react router, i think every link should be included in a <Link /> which references one of the different options to display
        // in the content display
        

       

        
        if(this.state.mobileView){
        return (
            <MobileSidebar />
        )} else {
            return (
                <SidebarDisplay />
            )
        }
    }
};

class MobileSidebar extends Component {
    state = {
        open: false,
    }

    onHamburgerClick = () => {
        this.toggleNav();
    };

    toggleNav = () => {
        this.setState({open: !this.state.open})
    }

    render(){
        if(this.state.open){
            return (
                <div className="mobile-nav nav-open">
                    <div className="hamburger" onClick={this.onHamburgerClick}>
                        <h1><FontAwesomeIcon icon={faBars} /></h1>
                    </div>
                    <SidebarDisplay />                    
                </div>
            )
        } else {
            return (
                <div className="mobile-nav">
                    <div className="hamburger" onClick={this.onHamburgerClick}>
                        <h1><FontAwesomeIcon icon={faBars} /></h1>
                    </div>                    
                </div>
            )
        }
        
    }
};

const SidebarDisplay = (props) => {
 
    return (
        <div className='sidebar-nav'  >
                <div className='sidebar-nav-head'>
                    {/* <div className='sidebar-nav-header-icon'>
                        <img src={ThumbnailPicture} alt='user-icon'/>
                    </div> */}
                    <UserConsumer>
                        {
                            context => (
                                <SidebarUserPhoto requestUpdate={context.requestUpdate} imageHex={context.imageHex}/>
                            )
                        }
                    </UserConsumer>
                    
                    <div className='sidebar-nav-header-username'>
                        <p>{props.username}</p>
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
    )
}



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
        
    };

    onFileSubmit = async (e) => {

        e.preventDefault();

        const token = sessionStorage.getItem('jwt');
        console.log(this.state.file);

        const formData = new FormData();

        formData.append('profile-image', this.state.file);
        
        // send to the server,
        const res = await fetch('/user/photo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                
                'Authorization': `Bearer ${token}`,
            },
            body: formData,

        });

        if(res.status === 200){
            // close modal
            this.setState({upload: !this.state.upload});
            // request context to update.
            this.props.requestUpdate();


        }

        console.log(res);

        // when the server responds that it works,
        // retrieve user data from the server, so that the image update is displayed.

        // close the modal.
    }

    render(){
        if(this.state.upload){
            return (
                <React.Fragment>
                    <div className='sidebar-nav-header-icon' onClick={this.toggleOpenForm}>
                        <img src={this.props.imageHex != null ? arrayBufferToBase64(this.props.imageHex): 'https://images.unsplash.com/photo-1526913299589-f35a3ddeb7ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'} alt='user-icon' onClick={this.toggleOpenForm}/>
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
                                    <input type='submit' value='Upload' className='btn btn-primary btn-lg' onClick={this.onFileSubmit}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                
                
            )
        } else {
            return (
                <div className='sidebar-nav-header-icon' onClick={this.toggleOpenForm}>
                    <img src={this.props.imageHex != null ? arrayBufferToBase64(this.props.imageHex): 'https://images.unsplash.com/photo-1526913299589-f35a3ddeb7ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'} alt='user-icon' onClick={this.toggleOpenForm}/>
                </div>
            )
        }
        
    }
};

const arrayBufferToBase64 = (buffer) => {
    const base64flag =  'data:image/jpeg;base64,';
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return base64flag + window.btoa(binary);
};

export default sidebar;
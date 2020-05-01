import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import '../../resources/styles.css';
import Sidedrawer from './Sidedrawer';

class Header extends Component {

    state={
        drawerOpen:false,
        headershow:false

    }
    toggledrawer=(value)=>{
        this.setState({drawerOpen:value})
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handlescroll)
    }
    handlescroll=()=>{
        if(window.scrollY >0){
            this.setState({headershow:true})
        }
        else{
            this.setState({headershow:false})  
        }
    }
    render() {
        return (
            <AppBar position='fixed' style={{
                backgroundColor:this.state.headershow?'#2f2f2f':'transparent',
                boxShadow:'none',
                padding:'10px 0 px'
            }}>
            <Toolbar>
            <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Event</div>
            <div className='header_logo_title'>Career in Machine Learning</div>
            </div>
            <IconButton 
            aria-label='Menu'
            color='inherit'
            onClick={()=>{this.toggledrawer(true)}}
            >
            <MenuIcon/>
            </IconButton>
            </Toolbar>
           
          <Sidedrawer 
          open={this.state.drawerOpen}
          onClose={(value)=>this.toggledrawer(value)}
          />

            </AppBar>
        );
    }
}

export default Header;
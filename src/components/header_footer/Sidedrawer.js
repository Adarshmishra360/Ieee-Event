import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Sidedrawer = (props) => {
   const scrolltoelement=(element)=>{
       scroller.scrollTo(element,{
           duration:1500,
           delay:100,
           smooth:true,
           
       })
       props.onClose(false); 
   }

    return (
        <Drawer
        anchor='right'
        open={props.open}
        onClose={()=>{props.onClose(false)}}
        >
        <List component='nav'>
        <ListItem button onClick={()=>{scrolltoelement('home')}}>Event Start in</ListItem>
        <ListItem button onClick={()=>{scrolltoelement('event_info')}}>Event NFO</ListItem>
        
        </List>
        </Drawer>
    );
};

export default Sidedrawer;
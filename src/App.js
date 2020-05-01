import React from 'react';
import {Element} from 'react-scroll'
import Header from './components/header_footer/header'
import Featured from './components/featureds';
import Venuinfo from './components/venuinfo';
import Footer from './components/header_footer/footer'
class App extends React.Component{
    render(){
        return(
            <div className='App' style={{height:'1500px',background:'cornflowerblue'}}>
           <Element name='home'> <Header/></Element>
            <Featured/>
            <Element name='event_info'><Venuinfo/></Element>
            
            <Footer/>
            </div>
        )
    }
}
export default App;
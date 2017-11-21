import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';

window.mainHeaderState = {
    isAdmin: false,
    showLogin: false,
    userName: ''
}

class MainHeader extends Component {
    constructor(props) {
        super(props)

        this.state = window.mainHeaderState
        //bind shit here
        this.updateShowLogin = this.updateShowLogin.bind(this);
        this.updateIsAdmin = this.updateIsAdmin.bind(this);
    }

    componentWillUnmount(){
        window.mainHeaderState = this.state;
    }

    updateShowLogin(){
        let val = this.state.showLogin ? false : true;
        this.setState({
            showLogin: val
        })
    }

    updateIsAdmin(val, name){
        this.setState({
            isAdmin:val,
            userName: name
        })
    }

    render() {
        let headerName = {
            "transform": "scale(1, .6)",
            "font-weight": "bolder",
            "letter-spacing": "-1px",
            "font-size": "20px"
        }

        let adminProtalLink = this.state.isAdmin ?
            <Link to='/admin' className='navTextMedium'>ADMIN PORTAL</Link> :
            null;
        
        let loginIcon = this.state.userName === '' ?
            <img onClick={this.updateShowLogin} className='aLink' style={{ "height": "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETV_iGZaujVjXGEEhzClQMErGjomXPTr7XfTj_qIltNDzqUwmAQ" alt="" />:
            <h1 onClick={this.updateShowLogin} className='aLink' style={{"height": "20px"}}>{this.state.userName}</h1>
        let navStyle = {
            "width":"700px",
            "marginRight":"30px"
        }
        return (
            <section>
                <div className="mainHeaderWrapper">
                    <Link to='/' className='flexRow aLink'>
                        <h1 className='aLink GcpLogo' style={{ "height": "40px" }}>CP</h1>
                        {/*<ul style={headerName} >Native Instruments</ul>*/}
                    </Link>
                    <div style={navStyle} className='flexRow'>
                        <Link to='/products' className='GnavTextMedium'>VIDEO GALLARY</Link>
                        <Link to='/' className='GnavTextMedium'>PHOTOGRAPHY</Link>
                        <Link to='/' className='GnavTextMedium'>PRICING</Link>
                        <Link to='/' className='GnavTextMedium'>ABOUT</Link>
                        <Link to='/' style={{"border":"3px solid black"}} className='contactButton'>CONTACT</Link>
                        {adminProtalLink}
                    </div>
                </div>
            </section>
        );
    }
}


export default MainHeader;
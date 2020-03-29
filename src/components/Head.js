import React from 'react'
import { Layout, Header, Drawer, Content, Footer } from 'react-mdl';
import SideMenu from './SideMenu';
import Search from './Search';
import Cards from './Cards';
import Modal from 'react-modal'
import Lyrics from './Lyrics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './Head.css';
import { Animated } from "react-animated-css";
const customStyles = {
    content: {
        backgroundColor: 'rgba(90, 90, 90, .95)'
    }
};
Modal.defaultStyles.overlay.zIndex = 9
function Head(props) {
    return (
        <div>
            <Layout fixedHeader>
                <Header style={{backgroundColor: '#181818'}} title={<span styles={`font-family: Raleway !important`}>Music Search</span>}>
                    {/* <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation> */}
                </Header>
                <Drawer title="">
                    <SideMenu />
                </Drawer>
                <Content style={{ minHeight: '95vh' }}>
                    <Search bar={props.bar} api={props.api} keyword={props.keyword} key_change={props.key_change} />
                    <Cards lyrics={props.lyrics} data={props.data} />
                    <Modal
                        isOpen={props.modal}
                        onRequestClose={props.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal" >
                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                            <Lyrics closeModal={props.closeModal} data={props.song} className="modal" />
                        </Animated>
                    </Modal>
                </Content>
                <Footer size="mini" style={{ backgroundColor: '#181818' }}>
                    <div className="row justify-content-center align-items-center footer">
                        <FontAwesomeIcon icon={faCode} className="mx-2" /> 
                        with
                        <FontAwesomeIcon icon={faHeartbeat} className="mx-2 text-danger" />
                        by <a href="https://tanaytoshniwal.me" rel="noopener noreferrer" target="_blank" style={{color: '#fff', textDecoration: 'none'}} className="mx-2 foot-text">Tanay Toshniwal</a>
                    </div>
                </Footer>
            </Layout>
        </div>
    )
}

export default Head

import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import styles from './Head.module.css';
import SideMenu from './SideMenu';
import Search from './Search';
import Cards from './Cards';
function Head(props) {
    return (
        <div className={styles.height}>
            <Layout fixedHeader>
                <Header title={<span><strong>Search Music</strong></span>}>
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
                <Content>
                    <Search api={props.api} keyword={props.keyword} key_change={props.key_change}/>
                    <Cards data={props.data} />
                </Content>
            </Layout>
        </div>
    )
}

export default Head

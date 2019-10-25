import React from 'react';
import {Menu, Input} from 'antd/lib';

const AppLayout = () => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key = "home">노드버드</Menu.Item>
                <Menu.Item key = "profile">프로필</Menu.Item>
                <Menu.Item key = "mail">
                    <Input.Search enterßButton style={{verticalAlign:'middle'}}/>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default AppLayout;
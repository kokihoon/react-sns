import React from 'react';
import { Button, List} from 'antd/lib';
import { Card, Icon } from 'antd/lib';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    return (
        <>
            <NicknameEditForm />
            <List
                style={{marginBottom: '20px'}}
                grid={{gutter: 4, xs:2, md:3}}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore= {<Button style={{width:'100%'}}>더보기</Button>}
                bordered
                dataSource={['제로초', '타보', '노드버드오피셜']}
                renderItem={item=> (
                    <List.Item style={{marginTop:'20px'}}>
                        <Card actions={[<Icon key="stop" type='stop' />]}><Card.Meta description={item}/></Card>
                    </List.Item>
                )}
            />

            <div>내 프로필</div>
        </>
    );
};

export default Profile;
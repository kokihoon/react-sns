import React, {useCallback} from 'react';
import {Button, Form, Input} from 'antd/lib';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {useInput} from '../pages/signup';
import { loginAction } from '../reducers/user';
 
const LoginForm = () => {
    const [id, setId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction);
    }, [id, password]);
    return (
        <Form onSubmit={onSubmitForm}>
        <div>
            <label htmlFor="user-id">아이디</label>
            <br/>
            <Input name="user-id" value={id} onChange={setId} required />
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label>
            <br/>
            <Input name="user-password" value={password} onChange={onChangePassword} type="password"  required />
        </div>
        <div style={{marginTop: '10px'}}>
            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </div>

    </Form>
    );
};

export default LoginForm;
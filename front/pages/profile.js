import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
            </Head>
            <AppLayout>
                내 프로필
            </AppLayout>
        </>
    );
};

export default Profile;
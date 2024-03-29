import React, { useEffect, useState } from 'react';
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";

// link를 쓰면 다시 랜더링 하지 않음 (깜박이면서 화면전환 X)
import { Link } from 'react-router-dom';

import { API_BASE_URL } from '../config/host-config';

const Header = () => {

    //프로필 사진 상태관리
    const [profile, setProfile] = useState(null);

    const USERNAME = localStorage.getItem('LOGGIN_USERNAME');

    //로그아웃 핸들러
    const logoutHandler = e => {
        //로컬스토리지 데이터 제거
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('LOGGIN_USERNAME');
        window.location.href='/login';
    };
    
    const button = USERNAME 
        ? (<Button color="inherit" onClick={logoutHandler}>로그아웃</Button>) 
        : (
            <>
                <Link to='/login' style={{ color: '#fff', marginRight: 20, textDecoration: 'none' }}>로그인</Link>
                <Link to='/join' style={{ color: '#fff', textDecoration: 'none' }}>회원가입</Link>
                {/* <Button color="inherit" onClick={() => { window.location.href='/login' }}>로그인</Button>
                <Button color="inherit" onClick={() => { window.location.href='/join' }}>회원가입</Button> */}
            </>
        )

        useEffect(() => {
            // 요청 URL
            const url = API_BASE_URL + '/auth/load-profile';
            // 액세스 토큰
            const token = localStorage.getItem('ACCESS_TOKEN');
    
            // 화면이 렌더링될 때 서버에서 프로필사진을 요청해서 가져옴
            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                if(res.status === 200) {
                    return res.blob();
                }
                return setProfile(null);
            })
            .then(imageData => {
                //서버가 보낸 순수 이미지 파일을 URL형식으로 변환
                const imgUrl = window.URL.createObjectURL(imageData);
                setProfile(imgUrl);
            })
        }, []);

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid justify="space-between" container>
                    <Grid item flex={9} style={{display:'flex', alignItems:'center'}}>
                        <Typography variant="h6">{USERNAME ? USERNAME : '오늘'}의 할일</Typography>

                        {/* 프로필 이미지 추가 */}
                        <img className='welcome-profile' src={profile ? profile: require('../assets/img/anonymous.jpg')} alt='웰컴 프로필 사진'/>

                    </Grid>
                    <Grid item>
                        {button}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

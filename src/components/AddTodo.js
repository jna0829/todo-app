import React, {useState} from 'react';
import {TextField, Paper, Button, Grid} from "@mui/material";

function AddTodo({ add }) {

    // 사용자의 입력을 저장할 객체
    const [item, setItem] = useState({ title : '' })

    //입력창 값이 변할 때마다 item객체 안에 title값 자동 저장
    const changeHendler = e => {
        // console.log(e.target.value);
        setItem({ title : e.target.value });
    };

    // 입력버튼 클릭 이벤트 핸들러
    const addClickHandler = e => {
        // console.log('버튼 클릭');
        add(item); //item은 setItem의 title value를 넣어준 것
    };

    // 엔터버튼 클릭 이벤트 핸들러
    const enterHendler = e => {
        if (e.key === 'Enter') {
            addClickHandler();
        }
    };


    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                    <TextField placeholder="Add Todo Here" fullWidth onChange={changeHendler} onKeyUp={enterHendler} value={item.title} />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth color="secondary" variant="outlined" onClick={addClickHandler} >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;
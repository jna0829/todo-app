import React, {useState} from 'react';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';

const Todo = ({ item, remove }) => {

    console.log(item);

    const {id, title, done} = item;

    // const [state, setState] = useState({ item: props.item });

    // const {id, title, done} = state.item;

    //삭제 이벤트 핸들러
    const removeHandler = e => {
        console.log(item);
        remove(item);
    };

    return (
        <ListItem>
            <Checkbox checked={done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={id}
                    name={id}
                    value={title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            {/* 삭제버튼 */}
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={removeHandler}>
                    <DeleteOutline/>
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
}

export default Todo;
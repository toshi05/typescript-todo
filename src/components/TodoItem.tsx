import React, { useState,FC } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

export type Todo = {
    id:number,
    content:string,
    done:boolean
};

type contProp = {
    cont: Todo;
};

const TodoItem : FC<contProp> = (props) => {
    const [flag,setFlag] = useState(props.cont.done);

    return (
        <>
        <ul key={props.cont.id}>
                <li>{props.cont.id}</li>
                <li>{props.cont.content}</li>
                <ToggleButton
                    value="check"
                    selected={flag}
                    onChange={() => {
                        setFlag(!flag);
                    }}
                >
                <CheckIcon />
                </ToggleButton>
        </ul>
        </>
    )
}
export default TodoItem;
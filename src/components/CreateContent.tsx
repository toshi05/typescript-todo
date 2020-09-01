import React, { Component,FC,useState } from 'react';
import {Todo} from './TodoItem'
import Button from '@material-ui/core/Button';
type getFuncProps = {
    func : (con : string) => void;
}

const InputTodoName: FC = () => {
    return (<input type="text" />);
};

/*const RegistButton: FC<Props> = (props) => {
    return <button onClick={props.addTodo(returntodo)}>登録</button>
};*/


const CreateContent :FC<getFuncProps> = (props) =>  {
    const [inputText,setText] = useState("");
        return(
            <>
            <input type="text" onChange={ (e) => setText(e.target.value)}/>
            <Button
                variant="contained"
                color="primary"
                onClick={ () => props.func(inputText)}
                >
                    登録
                </Button>
            </>
            );
}
export default CreateContent;

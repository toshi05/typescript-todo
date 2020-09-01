import React, { Component,FC } from 'react';

type Props = {
    title: string;
    func?: (str : string) => void;
}

class Header extends Component<Props> {
    render(){
        const title: string = this.props.title;
        return(
        <>
        <HeaderContent title={title} />
        </>
        );
    }
}
export default Header;

const HeaderContent: React.FC<Props> = (props) => {
return <h1>{props.title}</h1>
}

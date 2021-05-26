import React, {Component} from 'react';
import { Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {getImage} from '../../helpers/resource';

interface IProps {
    image: string;
    width?: number;
    height?: number;
    resizeMode?: string;
}

interface IState {
    source: any;
}

export default class Img extends Component<IProps, IState> {
    constructor(props) {
        super(props)

        this.state = {
            source: null
        }
    }
    
    componentDidMount(){
        this.setState({source: getImage(this.props.image)})
    }

    render(){
        const {source} = this.state;
        const {width, height} = this.props;

        if (!source) {
            return null;
        }

        const size: {width?: number, heigth?: number} = {};
        if (width){
            size.width = width;
        }
        if (height){
            size.heigth = height;
        }

        if (source.type === 'svg'){
            return (<SvgUri 
                source={{uri: source.localUri}}
                width={width ? width : 'auto'}
                height={height ? height : 'auto'}
            />)
        }
    
        return <Image source={source} {...size}/>
    }

   
};
import React from 'react';
import Svg, { Use, Path, ClipPath, Rect } from 'react-native-svg';

interface IState {
  count: number;
}
export class AnimationFlop extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  timer: any;
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.count === 400) {
        this.clearInterval();
      }
      this.setState({ count: this.state.count + 1 });
    }, 50);
  }
  clearInterval = () => {
    if (this.timer){
      clearInterval(this.timer);
    }
  };

  componentWillUnmount(){
    this.clearInterval();
  }

  render() {
    let { count } = this.state;
    if (count < 399) {
      return (
        <Svg width='64' height='94' style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, backgroundColor: 'transparent' }}>
          <Rect
            rx='6'
            stroke='#9bee15'
            id='svg_3'
            height='94'
            width='64'
            y='0'
            x='0'
            strokeDasharray={[count, 600]}
            fillOpacity='null'
            strokeOpacity='null'
            strokeWidth='6'
            fill='transparent'
          />
        </Svg>
      );
    } else {
      return null;
    }
  }
}

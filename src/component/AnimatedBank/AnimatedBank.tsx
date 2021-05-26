import React from 'react';
import { Animated } from 'react-native';
import { chipRateStyles, chipAnimateStyles } from '../../helpers/playerStyles';
// import { ChipIcon } from '../../helpers/icons';

interface IProps {
  placeNumber: number;
  tableSize: number;
}
interface IState {
  startTop: any;
  startBottom: any;
  startRight: any;
  startLeft: any;
  opas: number;
}
export class AnimatedBank extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    let b = chipAnimateStyles(this.props.placeNumber);
    this.state = {
      startBottom: new Animated.Value(!!b.bottom ? b.bottom : 0),
      startTop: new Animated.Value(!!b.top ? b.top : 0),
      startRight: new Animated.Value(!!b.right ? b.right : 0),
      startLeft: new Animated.Value(!!b.left ? b.left : 0),
      opas: 1,
    };
  }
  componentDidMount() {
    let { startBottom, startLeft, startRight, startTop, opas } = this.state;
    let br = chipRateStyles(this.props.placeNumber, this.props.tableSize);
    setTimeout(() => {
      if (!!startBottom && !!br.bottom) {
        Animated.timing(startBottom, {
          toValue: br.bottom,
          duration: 500,
          
        }).start(() => {
          this.setState({ opas: 0 });
        });
      }
      if (startTop && !!br.top) {
        Animated.timing(startTop, {
          toValue: br.top,
          duration: 500,
          
        }).start();
      }
      if (!!startRight && !!br.right) {
        Animated.timing(startRight, {
          toValue: br.right,
          duration: 500,
          
        }).start();
      }
      if (startLeft && br.left) {
        Animated.timing(startLeft, {
          toValue: br.left,
          duration: 500,
          
        }).start();
      }
    }, 900);
  }
  render() {
    let brit = chipRateStyles(this.props.placeNumber, this.props.tableSize);
    let { startBottom, startLeft, startRight, startTop, opas } = this.state;
    return (
      <Animated.View
        style={[
          {
            width: 40,
            height: 15,
            position: 'absolute',
            opacity: opas,
          },
          brit.top ? { top: startTop } : {},
          brit.bottom ? { bottom: startBottom } : {},
          brit.right ? { right: startRight } : {},
          brit.left ? { left: startLeft } : {},
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

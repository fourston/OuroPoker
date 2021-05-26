import React from 'react';
import { Animated } from 'react-native';
import { chipRateStyles, chipAnimateStyles } from '../../helpers/playerStyles';
import { ChipIcon } from '../../helpers/icons';

interface IProps {
  placeNumber: number;
  tableSize: number;
  onFinish?: () => void;
}
interface IState {
  startTop: any;
  startBottom: any;
  startRight: any;
  startLeft: any;
  opas: number;
}
export class AnimateChip extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    let b = chipRateStyles(this.props.placeNumber, this.props.tableSize);
    // let b = chipAnimateStyles(this.props.placeNumber);

    this.state = {
      startBottom: new Animated.Value(!!b.bottom ? b.bottom : 0),
      startTop: new Animated.Value(!!b.top ? b.top : 0),
      startRight: new Animated.Value(!!b.right ? b.right : 0),
      startLeft: new Animated.Value(!!b.left ? b.left : 0),
      opas: 1,
    };
  }
  componentDidMount() {
    let { startBottom, startLeft, startRight, startTop } = this.state;
    let br = chipAnimateStyles(this.props.placeNumber);
    if (!!startBottom && !!br.bottom) {
      Animated.timing(startBottom, {
        toValue: br.bottom,
        duration: 500,
        
      }).start();
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
    setTimeout(() => {
      this.props.onFinish();
    }, 700);
  }
  componentWillUnmount() {
    // console.log('redians')
  }
  render() {
    let brit = chipRateStyles(this.props.placeNumber, this.props.tableSize);
    let { startBottom, startLeft, startRight, startTop, opas } = this.state;
    return (
      <Animated.View
        style={[
          {
            opacity: 0.5,
            width: 40,
            height: 15,
            // backgroundColor: 'red',

            position: 'absolute',
          },
          brit.top ? { top: startTop } : {},
          brit.bottom ? { bottom: startBottom } : {},
          brit.right ? { right: startRight } : {},
          brit.left ? { left: startLeft } : {},
        ]}
      >
        <ChipIcon width={14} height={14} />
      </Animated.View>
    );
  }
}

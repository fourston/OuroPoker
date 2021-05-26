import React from 'react';
import { Animated, Image } from 'react-native';
// import { chipRateStyles, chipAnimateStyles } from '../../helpers/playerStyles';
// import { close_cards } from '../../helpers/icons';
import { RedCards } from '../RedCards';

interface IProps {
  onFinish?: () => void;
  placeNumber: number;
  tableSize: number;
}
interface IState {
  startTop: any;
  startRight: any;
  opas: any;
}
export let cardStyles = (placeNumber: number) => {
  switch (placeNumber) {
    case 0:
      return {
        top: -120,
        right: 85,
      };
    case 1:
      return {
        top: -116,
        right: -85,
      };
    case 2:
      return {
        right: -149,
        top: -25,
      };
    case 3:
      return {
        top: 94,
        right: -135,
      };
    case 4:
      return {
        top: 110,
        right: -15,
      };
    case 5:
      return {
        top: 110,
        right: 130,
      };
    case 6:
      return {
        top: 90,
        right: 230,
      };
    case 7:
      return {
        top: -10,
        right: 282,
      };
    case 8:
      return {
        top: -111,
        right: 204,
      };

    default:
      return {};
  }
};
export class AnimatedCard extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    let { right, top } = cardStyles(this.props.placeNumber);

    this.state = {
      startTop: new Animated.Value(top),
      startRight: new Animated.Value(right),
      opas: new Animated.Value(1),
    };
  }
  componentDidMount() {
    let { startRight, startTop, opas } = this.state;
    Animated.parallel([
      Animated.timing(startRight, {
        toValue: this.props.placeNumber === 0 ? 20 : -20,
        duration: 1000 + this.props.placeNumber * 100,
        
      }),
      Animated.timing(startTop, {
        toValue: 20,
        duration: 1000 + this.props.placeNumber * 100,
        
      }),
    ]).start();
  }

  render() {
    let { startRight, startTop, opas } = this.state;
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            opacity: opas,
            top: startTop,
            right: startRight,
          },
        ]}
      >
        <RedCards />
      </Animated.View>
    );
  }
}

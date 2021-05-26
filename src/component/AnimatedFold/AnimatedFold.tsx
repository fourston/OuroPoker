import React from 'react';
import { Animated, Image } from 'react-native';
// import { chipRateStyles, chipAnimateStyles } from '../../helpers/playerStyles';
// import { close_cards } from '../../helpers/icons';
import playSound from '../../sound';
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
let cardStyles = (placeNumber: number) => {
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
export class AnimatedFold extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startTop: new Animated.Value(20),
      startRight: new Animated.Value(-20),
      opas: new Animated.Value(1),
    };
  }
  componentDidMount() {
    let { startRight, startTop, opas } = this.state;
    let { right, top } = cardStyles(this.props.placeNumber);

    playSound('cards');

    Animated.timing(startTop, {
      toValue: top,
      duration: 1000,
      
    }).start();
    Animated.timing(startRight, {
      toValue: right,
      duration: 1000,
      
    }).start();
    Animated.timing(opas, {
      toValue: 0,
      duration: 800,
      
    }).start();
    setTimeout(() => {}, 5000);
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

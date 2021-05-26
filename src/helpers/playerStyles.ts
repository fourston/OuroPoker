import { ViewStyle, StyleProp } from 'react-native';

export let styleNumber = (placeNumber: number, tableSize: number): StyleProp<ViewStyle> => {
  switch (placeNumber) {
    case 0:
      return {
        bottom: 0,
        left: 224,
      };
    case 1:
      if (tableSize === 9) {
        return {
          bottom: 4,
          
          left: 84,
        };
      } else {
        return {
          bottom: 40,
          left: 34,
        };
      }
    case 2:
      return {
        bottom: 95,
        left: 20,
      };
    case 3:
      return {
        top: 20,
        left: 34,
      };
    case 4:
      return {
        top: 0,
        left: 154,
      };
    case 5:
      return {
        top: 0,
        left: 300,
      };
    case 6:
      return {
        top: 20,
        left: 400,
      };
    case 7:
      return {
        top: 120,
        right: 0,
      };
    case 8:
      if (tableSize === 9) {
        return {
          bottom: 10,
          right: 60,
        };
      } else {
        return {
          bottom: 40,
          right: 20,
        };
      }
  }
};
export let dilerStyles = (placeNumber: number): StyleProp<ViewStyle> => {
  switch (placeNumber) {
    case 0:
      return {
        position: 'absolute',
        top: -30,
        right: 30,
      };
    case 1:
      return {
        position: 'absolute',
        right: -10,
        top: -40,
      };
    case 2:
      return {
        position: 'absolute',
        top: 15,
        right: -40,
      };
    case 3:
      return {
        position: 'absolute',
        bottom: -35,
        right: -30,
      };
    case 4:
      return {
        position: 'absolute',
        bottom: -40,
        left: 20,
      };
    case 5:
      return {
        position: 'absolute',
        bottom: -40,
        left: 20,
      };
    case 6:
      return {
        position: 'absolute',
        bottom: -40,
        left: -20,
      };
    case 7:
      return {
        position: 'absolute',
        top: 55,
        left: -60,
      };
    case 8:
      return {
        position: 'absolute',
        top: -40,
        right: 60,
      };
    case 9:
      return {
        position: 'absolute',
        bottom: -40,
      };
    default:
      return {};
  }
};
export let chipRateStyles = (placeNumber: number, tableSize: number) => {
  switch (placeNumber) {
    case 0:
      return {
        position: 'absolute',
        top: -25,
        right: 70,
      };
    case 1:
      if (tableSize === 9) {
        return {
          position: 'absolute',
          top: -20,
          right: 1,
        };
      } else {
        return {
          position: 'absolute',
          top: -10,
          right: -30,
        };
      }

    case 2:
      return {
        position: 'absolute',
        right: -40,
        top: 40,
      };
    case 3:
      return {
        position: 'absolute',
        bottom: -10,
        right: -30,
      };
    case 4:
      return {
        position: 'absolute',
        bottom: -20,
        left: 20,
      };
    case 5:
      return {
        position: 'absolute',
        bottom: -20,
        left: 20,
      };
    case 6:
      return {
        position: 'absolute',
        bottom: -20,
        left: -30,
      };
    case 7:
      return {
        position: 'absolute',
        bottom: 40,
        left: -60,
      };
    case 8:
      if (tableSize === 9) {
        return {
          position: 'absolute',
          top: -20,
          right: 50,
        };
      } else {
        return {
          position: 'absolute',
          top: -10,
          left: -40,
        };
      }

    case 9:
      return {
        position: 'absolute',
        bottom: -20,
      };
    default:
      return {};
  }
};

export let chipAnimateStyles = (placeNumber: number) => {
  switch (placeNumber) {
    case 0:
      return {
        top: -120,
        right: 70,
      };
    case 1:
      return {
        top: -116,
        right: -130,
      };
    case 2:
      return {
        right: -195,
        top: -25,
      };
    case 3:
      return {
        bottom: -13,
        right: -180,
      };
    case 4:
      return {
        bottom: -32,
        left: 85,
      };
    case 5:
      return {
        bottom: -32,
        left: -61,
      };
    case 6:
      return {
        bottom: -12,
        left: -160,
      };
    case 7:
      return {
        bottom: 86,
        left: -215,
      };
    case 8:
      return {
        top: -111,
        right: 180,
      };

    case 9:
      return {
        bottom: -20,
      };
    default:
      return {};
  }
};

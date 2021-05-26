import React, { Component } from 'react';
import {
    LayoutChangeEvent,
    PanResponder,
    PanResponderGestureState,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Img from '../Img';

interface IProps {
    onChange?: (value: number) => void;
    value?: number;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
}

interface IState {
    barHeight: number | null;
    deltaValue: number;
    value: number;
}

const initialValue = 0;
const SLIDER_HEIGHT = 30;

export default class VerticalSlider extends Component<IProps, IState> {
    state = {
        barHeight: null,
        deltaValue: 0,
        value: initialValue,
    };

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
        onPanResponderRelease: () => this.onEndMove(),
        onPanResponderTerminationRequest: () => true,
    });

    onChange(value: number) {
        this.props.onChange(Math.floor(value));
    }
    onMove(gestureState: PanResponderGestureState) {
        const { minimumValue, maximumValue } = this.props;
        const { barHeight } = this.state;

        const newDeltaValue = this.getValueFromBottomOffset(
            -gestureState.dy,
            barHeight,
            minimumValue,
            maximumValue,
        );

        this.setState({
            deltaValue: newDeltaValue,
        });

        return true;
    }
    onEndMove() {
        const { minimumValue, maximumValue } = this.props;
        const { value, deltaValue } = this.state;
        this.setState({ value: value + deltaValue, deltaValue: 0 });
        this.onChange(this.capValueWithinRange(value + deltaValue, [minimumValue, maximumValue]));
        return true;
    }

    onBarLayout = (event: LayoutChangeEvent) => {
        const { height: barHeight } = event.nativeEvent.layout;
        this.setState({ barHeight });
    };

    capValueWithinRange = (value: number, range: number[]) => {
        if (value < range[0]) return range[0];
        if (value > range[1]) return range[1];
        return value;
    };

    getValueFromBottomOffset = (
        offset: number,
        barHeight: number | null,
        rangeMin: number,
        rangeMax: number,
    ) => {
        if (barHeight === null) return 0;
        return ((rangeMax - rangeMin) * offset) / barHeight;
    };

    getBottomOffsetFromValue = (
        value: number,
        rangeMin: number,
        rangeMax: number,
        barHeight: number | null,
    ) => {
        if (barHeight === null) return 0;
        const valueOffset = value - rangeMin;
        const totalRange = rangeMax - rangeMin;
        const percentage = valueOffset / totalRange;
        return barHeight * percentage;
    };

    handleButton(direction: number) {
        const { value, minimumValue, maximumValue } = this.props;
        let result = value + direction;

        if (result < minimumValue || result > maximumValue) {
            return;
        }
        this.setState({ value: result });
        this.props.onChange(result);
    }

    renderButton(type: 'up' | 'down') {
        const { step, value } = this.props;

        const default_config = {
            up: {
                icon: 'up',
            },
            down: {
                icon: 'down',
            },
        };
        const config = this.props[`${type}Button`] || {};

        const btn = { ...default_config[type], ...config };
        const direction = type === 'up' ? 1 : -1;

        return (
            <TouchableOpacity onPress={() => this.handleButton(direction)} style={styles.button}>
                <LinearGradient
                    colors={['#B0D86F', '#75A627']}
                    start={[1, 0]}
                    end={[1, 1]}
                    style={styles.gradient}
                />
                <Img image={btn.icon} width={12} height={12} />
            </TouchableOpacity>
        );
    }

    render() {
        const { minimumValue, maximumValue } = this.props;
        const { value, deltaValue, barHeight } = this.state;

        const cappedValue = this.capValueWithinRange(value + deltaValue, [
            minimumValue,
            maximumValue,
        ]);

        const bottomOffset = this.getBottomOffsetFromValue(
            cappedValue,
            minimumValue,
            maximumValue,
            barHeight,
        );
        return (
            <View style={styles.wrapper}>
                {this.renderButton('up')}
                <View style={styles.container}>
                    <View style={styles.barContainer}>
                        <View style={styles.bar} onLayout={this.onBarLayout}>
                            {[...Array(Math.round(barHeight / 5))].map((e, i) => (
                                <View
                                    key={i}
                                    style={{
                                        height: 2,
                                        backgroundColor: '#ffffff',
                                        marginBottom: 3,
                                        opacity: 0.2,
                                        width: 12,
                                    }}
                                />
                            ))}
                        </View>
                        <View
                            style={[styles.slider, { bottom: bottomOffset }]}
                            {...this.panResponder.panHandlers}
                        >
                            <Text style={styles.slider_text}>{this.props.value}</Text>
                        </View>
                    </View>
                </View>
                {this.renderButton('down')}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingVertical: 10,
    },
    container: {
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        borderWidth: 1,
        borderColor: '#3E66A1',
        position: 'relative',
        zIndex: 2,
        width: 30,
        height: 30,
        backgroundColor: '#355D9C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        overflow: 'hidden',
    },
    barContainer: {
        width: SLIDER_HEIGHT,
        alignItems: 'center',
        paddingVertical: SLIDER_HEIGHT / 2,
        marginHorizontal: 20,
    },
    bar: {
        // width: 2,
        // backgroundColor: '#B0D86F',
        flexGrow: 1,
    },
    slider: {
        alignItems: 'center',
        backgroundColor: '#1A3969',
        borderColor: '#3E66A1',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        width: 106,
        height: SLIDER_HEIGHT,
        position: 'absolute',
    },
    slider_text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
    },
});

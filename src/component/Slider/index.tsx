import React, { Component } from "react";
import { Text, View, StyleSheet, Slider, TouchableOpacity } from "react-native";
import Img from "../../component/Img";
import { LinearGradient } from "expo-linear-gradient";

interface IButtons {
    icon?: any;
    title?: string;
    step?: number;
}

interface IProps {
    buttons: boolean;
    onChange?: (value: number) => void;
    leftButton?: IButtons;
    rightButton?: IButtons;
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    thumbTouchSize?: {};
    // onValueChange:	(value: number) => void;
    onSlidingStart?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
    style?: {};
    trackStyle?: {};
    thumbStyle?: {};
    thumbImage?: string;
}

interface IState {
    sliderHeight: number;
}

export default class CustomSlider extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getSliderHeight = this.getSliderHeight.bind(this);
    }

    state = {
        sliderHeight: 0,
    };

    public static defaultProps = {
        buttons: true,
        minimumValue: 0,
        maximumValue: 1,
        step: 0.1,
        style: {},
    };

    getSliderHeight = (event) => {
        this.setState({
            sliderHeight: event.nativeEvent.layout.width,
        });
    };

    onChange(value: number) {
        this.props.onChange(value);
    }

    handleButton(direction: number) {
        const { step, value, minimumValue, maximumValue } = this.props;
        let result = value + step * direction;

        if (result < minimumValue || result > maximumValue) {
            return;
        }

        this.onChange(result);
    }

    renderButton(type: "left" | "right") {
        const { step, value } = this.props;

        const default_config = {
            left: {
                icon: "minus",
            },
            right: {
                icon: "plus",
            },
        };
        const config = this.props[`${type}Button`] || {};

        const btn = { ...default_config[type], ...config };
        const direction = type === "left" ? -1 : 1;

        return (
            <TouchableOpacity
                onPress={() => this.handleButton(direction)}
                style={[styles.button]}
            >
                <LinearGradient
                    colors={["#5597FA", "#355D9C"]}
                    start={[1, 0]}
                    end={[1, 1]}
                    style={styles.gradiend}
                />
                <Img image={btn.icon} width={12} height={12} />
            </TouchableOpacity>
        );
    }

    render() {
        const {
            buttons,
            onChange,
            leftButton,
            rightButton,
            thumbImage,
            minimumValue,
            maximumValue,
            step,
            style,
            ...rest
        } = this.props;

        return (
            <View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        marginVertical: 10,
                        height: 25,
                    }}
                >
                    {!!buttons && this.renderButton("left")}
                    <View style={{ flex: 1 }} onLayout={this.getSliderHeight}>
                        <View
                            style={[
                                style,
                                {
                                    width: this.state.sliderHeight,
                                },
                            ]}
                        >
                            <Slider
                                minimumValue={minimumValue}
                                maximumValue={maximumValue}
                                minimumTrackTintColor="#B0D86F"
                                maximumTrackTintColor="#1A3969"
                                step={step}
                                onValueChange={this.onChange}
                                thumbTintColor="#75A627"
                                thumbStyle={styles.thumb}
                                trackStyle={styles.track}
                            />
                        </View>
                    </View>

                    {!!buttons && this.renderButton("right")}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20,
        zIndex: 1,
        flex: 1,
        padding: 0,
    },
    buttonsTitles: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    button: {
        position: "relative",
        zIndex: 2,
        width: 30,
        height: 30,
        backgroundColor: "#355D9C",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        overflow: "hidden",
    },
    button_left: {
        marginLeft: -4,
    },
    button_right: {
        marginRight: -4,
    },

    thumb: {},
    track: {},

    flex: {
        display: "flex",
        flexDirection: "row",
    },
    gradiend: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
    },
});

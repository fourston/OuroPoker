import React from "react";
import { View, StyleSheet } from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { MenuCard, ProfileCard, SingInCard } from "./components";
import { authAction } from "../../redux/action";
import { connect } from "react-redux";
import { IAplicationState } from "../../redux/reduser";
import { IAuth } from "../../redux/types";
import { getUserInfo } from "../../redux/action/userActions";
import { IUser } from "../../helpers/types";
// import { redCard } from '../../helpers/icons';
import Wrapper from "../../component/Wrapper";

interface IState {
    isLogin: boolean;
    loadingLogin: boolean;
}
interface IStateProps {
    auth: IAuth.Reduser;
    user: IUser;
}
interface IDispatchProps {
    logOut: () => void;
    getUser: () => void;
}

interface IProps extends NavigationInjectedProps, IStateProps, IDispatchProps {}

class MainScreen extends React.Component<IProps, IState> {
    render() {
        const { navigation, logOut, user, auth } = this.props;

        return (
            <Wrapper>
                <View style={styles.content}>
                    {user.uuid ? (
                        <ProfileCard navigation={navigation} />
                    ) : (
                        <SingInCard navigation={navigation} auth={auth} />
                    )}
                    <MenuCard
                        logOut={logOut}
                        navigation={navigation}
                        auth={auth}
                    />
                </View>
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        height: "100%",
        flex: 1,
        paddingTop: 12,
    },
});

const mapStateToProps = ({ auth, user }: IAplicationState): IStateProps => ({
    auth,
    user,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
    logOut: () => dispatch(authAction.logOut()),
    getUser: () => dispatch(getUserInfo()),
});

export default withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(MainScreen)
);

import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { SignInEmailCard } from './EmailCard';
import { SignInPhoneCard } from './PhoneCard';
import { authAction } from '../../../../redux/action';
import { IAuth } from '../../../../redux/types';
import {ResetModal} from '../../../../component/ModalContainer/ResetModal';
import api from '../../../../api';
import { UnSelectedIcon, SelectedIcon } from '../../../../helpers/icon';
import { connect } from 'react-redux';

interface IDispatchProps {
  signIn: (type: string, value: string | object) => void;
}

interface IProps extends IDispatchProps {
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
  auth: IAuth.Reduser;
}

interface IState {
  isEmail: boolean;
  resetVisible: boolean;
  resetSent: boolean;
}

class SingInCard extends Component<IProps, IState>{
  constructor(props) {
    super(props);
  
    this.state = {
      isEmail: true,
      resetVisible: false,
      resetSent: false
    };

    this.emailSubmit = this.emailSubmit.bind(this);
    this.phoneSubmit = this.phoneSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  };

  toggleResetModal(value: boolean = false){
    this.setState({resetVisible: value});
    
    if (!value){
      this.setState({resetSent: false});
    }
  };

  toggleAuthMode(value: boolean = false) {
    this.setState({isEmail: value});
  };

  onReset(value: string){
    api('auth', 'recovery_password')
      .data({email: value})
      .post()
      .then(()=>{
        this.setState({resetSent: true});
      })
      .catch(e => {
        console.log(e);
      });
  };

  emailSubmit(email: string, password: string){
    this.props.signIn('LOGIN', {email, password});
  };

  phoneSubmit(type: string, value: string | object){
    this.props.signIn(type, value);
  }

  render(){
    const {navigation, auth } = this.props;
    const { isEmail, resetVisible, resetSent } = this.state;

    return (
      <View style={{ flex: 3, paddingBottom: 20, marginRight: 20 }}>
        <Text style={styles.cartTitle}> Вход и регистрация</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardContainerBlock}>
            {auth && auth.error && <Text style={[styles.cartTitle, { textAlign: 'center', color: 'orange' }]}>{auth.errorText}</Text>}

            <View style={styles.chekboxContainer}>
              <TouchableOpacity style={styles.flexCenter} onPress={() => this.toggleAuthMode(true)}>
                {isEmail ? <SelectedIcon /> : <UnSelectedIcon />}
                <Text style={[styles.text_small, { marginLeft: 8 }]}>E-mail</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.flexCenter} onPress={() => this.toggleAuthMode(false)}>
                {!isEmail ? <SelectedIcon /> : <UnSelectedIcon />}
                <Text style={[styles.text_small, { marginLeft: 8 }]}>Телефон</Text>
              </TouchableOpacity>
            </View>
            
            {auth.loading && <ActivityIndicator />}
            {!auth.loading && isEmail && <SignInEmailCard submit={this.emailSubmit}/>}
            {!auth.loading && !isEmail && <SignInPhoneCard submit={this.phoneSubmit} awaitCode={auth.phone}/>}
          </View>

          {!auth.loading &&
            <View style={styles.cardContainerBlock}>
              <TouchableOpacity onPress={() => this.toggleResetModal(true)}>
                <Text style={[styles.text_small, styles.text_link]}>Забыл пароль</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.text_small, styles.text_link]}>Регистрация</Text>
              </TouchableOpacity>
            </View>
          }
        </View>

        <ResetModal
          open={resetVisible}
          onCancel={() => this.toggleResetModal()}
          onSubmit={this.onReset}
          sent={resetSent}
        />
      </View>
    );
  }
};

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  signIn: (type, value) => dispatch(authAction.singIn(type, value))
});

export default connect(null, mapDispatchToProps)(SingInCard);

const styles = StyleSheet.create({
  cartTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 6,
  },
  cardContainer: {
    backgroundColor: 'rgba(62, 102, 161, 0.8)',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingBottom: 12,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardContainerBlock: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  text_small: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12,
  },
  text_link: {
    lineHeight: 24,
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chekboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

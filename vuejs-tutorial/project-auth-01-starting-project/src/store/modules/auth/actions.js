import * as types from '../../mutations-type';

let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    const url =
      mode === 'signup'
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkP9veU53caZN__Hx42jjTNjWh8I2_ig4'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkP9veU53caZN__Hx42jjTNjWh8I2_ig4';

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(res.message || 'Failed to authenticate...');
    }

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit(types.SET_USER, {
      token: responseData.idToken,
      userId: responseData.localId
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    // if expires, no need to auto login
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit(types.SET_USER, {
        token: token,
        userId: userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit(types.SET_USER, {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit(types.SET_AUTO_LOGOUT);
  }
};

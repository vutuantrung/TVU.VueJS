export default {
  async login(context, payload) {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkP9veU53caZN__Hx42jjTNjWh8I2_ig4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      console.log(responseData);
      throw new Error(res.message || 'Failed to authenticate...');
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });

    console.log('login successfully');
  },
  async signup(context, payload) {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkP9veU53caZN__Hx42jjTNjWh8I2_ig4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      console.log(responseData);
      throw new Error(res.message || 'Failed to authenticate...');
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });

    console.log('signup successfully');
  }
};

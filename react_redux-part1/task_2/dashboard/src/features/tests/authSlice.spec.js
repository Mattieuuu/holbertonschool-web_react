import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual({
      user: {
        email: '',
        password: '',
      },
      isLoggedIn: false,
    });
  });

  test('should handle login', () => {
    const previousState = {
      user: {
        email: '',
        password: '',
      },
      isLoggedIn: false,
    };

    const action = login({
      email: 'test@test.com',
      password: '123456',
    });

    expect(authReducer(previousState, action)).toEqual({
      user: {
        email: 'test@test.com',
        password: '123456',
      },
      isLoggedIn: true,
    });
  });

  test('should handle logout', () => {
    const previousState = {
      user: {
        email: 'test@test.com',
        password: '123456',
      },
      isLoggedIn: true,
    };

    const action = logout();

    expect(authReducer(previousState, action)).toEqual({
      user: {
        email: '',
        password: '',
      },
      isLoggedIn: false,
    });
  });
});

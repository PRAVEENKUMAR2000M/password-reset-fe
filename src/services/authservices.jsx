import instance from './instance';

// define the authentication service
const authService = {
    signup: async (user) => {
        try {
            console.log('Registering user...');
            const res = await instance.authInstance.post('/signup', user);
            console.log(res.data)
            if (res.data.message == 'user created') {
                console.log('User registered successfully');
                return res.data;
            } else {
                console.log('Error registering user');
                return res.data;
            }
        } catch (error) {
            return error.response.data;
        }
    },

    signin: async (user) => {
        try {
            console.log('Authenticating user...');
            const res = await instance.authInstance.post('/signin', user);

            console.log(res.data);

            if (res.data.message == 'Login successful') {
                console.log('User authenticated successfully');

                // store the token in the session storage
                sessionStorage.setItem('token', res.data.token);

                // store the user in the session storage
                sessionStorage.setItem('user', JSON.stringify({
                    userName: res.data.userName, name: res.data.name
                }));

                return res.data;
            } else {
                console.log('Error authenticating user');
                return res.data;
            }
        } catch (error) {
            console.log('Error authenticating user');
            return error.response.data;
        }
    },

    generateOtp: async (user) => {
        console.log('Generating OTP..');

        const res = await instance.authInstance.post('/resetPwd', user);

        console.log('OTP sent via mail..');
        return res.data;
    },

    validateOtp: async (user) => {
        console.log('Validating OTP...')

        const res = await instance.authInstance.post('/enterNewPwd', user)

        return res.data

    },

    getuser: async () => {
        console.log('fetching the user')
        const res = await instance.protectedInstance.get('/getuser')
        return res.data
    }

}

export default authService;
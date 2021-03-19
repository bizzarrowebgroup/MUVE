// import auth from '@react-native-firebase/auth';
// import { appleAuth } from '@invertase/react-native-apple-authentication';
// import { GoogleSignin } from '@react-native-community/google-signin';
const configureSocialProviders = async () => {
    // GoogleSignin.configure({
    //     webClientId: '',
    // });
    // init firebase auth on main App.js
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
    
    // // Handle user state changes
    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;
    // if (!user) {
    //     return <LoginNavigatior />;
    // }
    // return <UserLoggedNavigator />;
}
const onAppleButtonPress = async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    console.warn('Beginning Apple Authentication');

    // start a login request
    //   try {
    //     const appleAuthRequestResponse = await appleAuth.performRequest({
    //       requestedOperation: appleAuth.Operation.LOGIN,
    //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    //     });

    //     console.log('appleAuthRequestResponse', appleAuthRequestResponse);

    //     const {
    //       user: newUser,
    //       email,
    //       nonce,
    //       identityToken,
    //       realUserStatus /* etc */,
    //     } = appleAuthRequestResponse;

    //     user = newUser;

    //     fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
    //       updateCredentialStateForUser(`Error: ${error.code}`),
    //     );

    //     if (identityToken) {
    //       // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
    //       console.log(nonce, identityToken);
    //     } else {
    //       // no token - failed sign-in?
    //     }

    //     if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
    //       console.log("I'm a real person!");
    //     }

    //     console.warn(`Apple Authentication Completed, ${user}, ${email}`);
    //   } catch (error) {
    //     if (error.code === appleAuth.Error.CANCELED) {
    //       console.warn('User canceled Apple Sign in.');
    //     } else {
    //       console.error(error);
    //     }
    //   }

    // Sign the user in with the credential
    return auth().signInWithCredential(appleCredential);
}

const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

const isAppleButtonEnabled = () => appleAuth.isSupported;

const signOut = async () => {
    return await auth().signOut()
}



export {
    configureSocialProviders,
    onAppleButtonPress,
    onGoogleButtonPress,
    isAppleButtonEnabled,
    signOut
}
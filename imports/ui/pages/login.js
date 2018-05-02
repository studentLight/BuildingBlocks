import './login.html';
import '../components/header.js';


AccountsTemplates.configure({
    onSubmitHook: ( error, state ) => {
        if ( !error && state === 'signIn' ) {
            // login successful, route to index
            FlowRouter.go('homePage');
        }
        if ( !error && state === 'signUp'){
          FlowRouter.go('homePage');
        }
    },
    onLogoutHook: ( error, state ) => {
        FlowRouter.go('login');
    }
});

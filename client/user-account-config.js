

var myLogoutFunc = function(){
  FlowRouter.go('login');

}

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      FlowRouter.go('homePage');
    }
    if (state === "signUp") {
      // Successfully registered
      FlowRouter.go('homePage');
    }
  }
};


T9n.map('en', {
        'Required Field': 'Fältet är tomt!',
        'usernameOrEmail': "Användarnamn eller Email",
        'passwordAgain': "Bekräfta Lösenord",
        error: {
            accounts: {
                'Login forbidden': 'Vi hittade inget konto med de givna detaljerna!',
                'User not found': 'Vi hittade inget konto med de givna detaljerna!',
                'Incorrect password': 'Felaktigt Lösenord!',
            },
        }
    });

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: 'homePage',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Gå med!"
      },
      socialSignUp: "Registrera",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
    },
});

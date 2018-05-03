

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
        signUp: "Skapa konto!",
        signIn: "Logga in!",
      },

      errors: {
        cannotRemoveService: "Du kan inte inaktivera din enda aktiva tjänst!",
        captchaVerification: "Captcha verifering misslyckades",
        loginForbidden: "Vi hittade inget konto med de givna detaljerna!",
        mustBeLoggedIn: "Du måste vara inloggad!",
        pwdMismatch: "Dina lösenord matchade inte!",
        validationErrors: "Ett fel skedde i valideringen.",
        verifyEmailFirst: "Var god verifiera din email först. Kolla din mail!",
      },

      /**
      *   Advanced Texts Settings:
      **/
      navSignIn: "Logga in",
      navSignOut: "Logga ut",
      optionalField: "valfritt",
      pwdLink_pre: "",
      pwdLink_link: "Har du glömt ditt lösenord?",
      pwdLink_suff: "",
      resendVerificationEmailLink_pre: "Fick du inget verifieringsmail?",
      resendVerificationEmailLink_link: "Skicka igen",
      resendVerificationEmailLink_suff: "",
      sep: "", //Eller logga in med: removed during alpha
      signInLink_pre: "Har du redan ett konto?",
      signInLink_link: "Logga in",
      signInLink_suff: "",
      signUpLink_pre: "Har du inget konto?",
      signUpLink_link: "Skapa ett konto",
      signUpLink_suff: "",
      socialAdd: "Koppla",
      socialConfigure: "",
      socialSignUp: "",

      socialSignUp: "Registrera",
      socialIcons: {
          facebook: "fab fa-facebook-f",
          google: "fab fa-google",
      },
    }
});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Felaktig Email!',
  },
  {
      _id: "password",
      type: "password",
      displayName: "Lösenord",
      required: true,
      minLength: 3,
  },
]);

import './navbarView2.html';

function pageInit() {
    /**
    *      NAV INITIALIZATION
    **/
    // Initialize sidenav button
     $(".button-collapse").sideNav({'closeOnClick': true});
}

Template.navbar.rendered = function(){
    pageInit();
};

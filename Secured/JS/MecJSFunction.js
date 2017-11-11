﻿    $(document).ready(function () {
        $(".LoginBtn, .BackToLoginBtn").click(function () {
            allHide();
            $('.loginPanel').show();
        });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $(".SignupBtn").click(function () {
            allHide();
            $('.signupPanel').show();
        });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $(".PasswordRecoveryBtn").click(function () {
            allHide();
            $('.PasswordRecoveryPanel').show();
        });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function allHide() {
            $('.loginPanel').hide();
            $('.signupPanel').hide();
            $('.PasswordRecoveryPanel').hide();
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.loginPanel, .PasswordRecoveryPanel').hide();
    });

export function init(){
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "104282139122740");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v15.0'
        });
    };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
}


export function cleanup(){
    (function (d, id) {
        var target = d.getElementById(id);
        if (target) {
          target.parentNode.removeChild(target);
        }
      })(document, "facebook-jssdk");
}
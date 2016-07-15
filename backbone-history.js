// let's track url change history, because backbone does not do it:
import Backbone from 'Backbone'; // or comment this line and assume Backbone is a global variable
// we'll extend Backbone.history with jnHistory object, that will keep history of route changes:
Backbone.history.jnHistory = [];
Backbone.history.jnPrevious = () => Backbone.history.jnHistory[ Backbone.history.jnHistory.length - 2 ];
Backbone.history.on('route', function (router, name, args) {
    let histObj = {
        name: name,
        args: args,
        fragment: Backbone.history.fragment
    }
    Backbone.history.jnHistory.push(histObj);
    Backbone.history.trigger('jnRoute', router, name, args); // making sure this will be always after history is updated.
});

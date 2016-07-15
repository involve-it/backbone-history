# backbone-history
Small code to keep track of routes history, which original backbone is missing

# Usage (see my other Backbone extension 'QueryStringModel'):

`
someViewOrModel.listenTo(Backbone.history, 'jnRoute', function(attr) {

  let prevUrl = Backbone.history.jnPrevious() && Backbone.history.jnPrevious().fragment;
  
}
`

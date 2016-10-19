var wilddog = require('wilddog-weapp-all')
//app.js
App({
  onLaunch: function () {
    var config = {
      syncURL: 'https://test123.wilddogio.com'
    }
    wilddog.initializeApp(config)
    this.ref = wilddog.sync().ref('todo') 
    
  },
  addItem:function(text){
    this.ref.push(text)
  },
  getTodoRef:function(){
    return this.ref
  }
})
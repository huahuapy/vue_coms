const { call } = require("file-loader")

(function(window){
  const EventBus = {}
  const listenerContainer = {}
  let id = 0
  /* 
    {
      "add": [callback1, callback2]
    }
  */

  EventBus.on = function(eventName, listener){
    let listeners = listenerContainer[eventName]

    if(!listeners){
      listeners = []
      listenerContainer[eventName] = listeners
    }
  }

  EventBus.emit = function(eventName, data){

  }

  EventBus.off = function(eventName){

  }

})(window)
/* 定义pubsub模块 */
/* 
  要有保存所有回调函数的容器：数据结构是这样：
  {
    "add": {
      uid_1: callback1,
      uid_2: callback2
    }
  }
*/

(function(window){

  /* 1.pubsub对象 */
  const PubSub = {}

  /* 2. 存储回调函数的容器 以及 每个容器内的uid */
  const callbackContainer = {}
  let id = 0

  /* 3. 订阅 */
  PubSub.subscribe = function(msg, callback){

    /* 3.1 读取保存callback的容器 */
    let callbacks = callbackContainer[msg]
    if(!callbacks){
      callbacks = {}
      callbackContainer[msg] = callbacks
    }

    /* 3.2 将callback存进对应的callbacks中 */
    const token = 'uid' + ++id
    callbacks[token] = callback

    /* 3.3 返回token */
    return token

  }

  /* 4.发布（异步） */
  PubSub.publish = function(msg, data){

    /* 4.1 得到对应的callback容器 */
    const callbacks = callbackContainer[msg]

    /* 4.2 如果这个callbacks已经存在， 就遍历它并异步执行其中的callback */
    if(callbacks){
      Object.values(callbacks).forEach(callback => {
        setTimeout(() => callback(msg, data))
      })
    }

  }

  /* 5.发布(同步) */
  PubSub.publishSync = function(msg, data){

     /* 5.1 得到对应的callback容器 */
     const callbacks = callbackContainer[msg]

     /* 5.2 如果这个callbacks已经存在， 就遍历它并同步执行其中的callback */
     if(callbacks){
       Object.values(callbacks).forEach(callback => callback(msg, data))
     }

  }

  /* 6. 取消订阅 */
  /* 
    两种情况，没有指定的flag，就取消所有的
    有flag： flag是一个token---取消对应的一个；  flag是一个name---取消相应名称对应的所有
  */
 PubSub.unsubscribe = function(flag){

    /* 判断flag */
    if(flag===undefined){
      callbackContainer = {}
    }else if(typeof flag === String && flag.indexOf('uid_') === 0){
      Object.values(callbackContainer).forEach(callbacks => {
        delete callbacks[flag]
      })
    }else{
      delete callbackContainer[flag]
    }
 }

})(window)
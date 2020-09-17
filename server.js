const express = require('express')
const axios = require('axios')
const app = express()

/* 可以解析urlencoded格式的请求体参数 */
app.use(express.urlencoded())
/* 可以解析json格式的请求体参数 */
app.use(express.json())


app.get('/search/users', (req,res) => {
  const q = req.query.q

  axios.get('https://api.github.com/search/users', {
      params: {q}
    })
    .then(response => {
      const result = response.data
      res.send(result)
    })
    .catch(error => {
      console.log(error.message)
    })
})



app.listen(4000, ()=>{
  console.log('run at 4000')
})
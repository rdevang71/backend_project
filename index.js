require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


const githubData= {
  "login": "rdevang71",
  "id": 189569170,
  "node_id": "U_kgDOC0yYkg",
  "avatar_url": "https://avatars.githubusercontent.com/u/189569170?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rdevang71",
  "html_url": "https://github.com/rdevang71",
  "followers_url": "https://api.github.com/users/rdevang71/followers",
  "following_url": "https://api.github.com/users/rdevang71/following{/other_user}",
  "gists_url": "https://api.github.com/users/rdevang71/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rdevang71/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rdevang71/subscriptions",
  "organizations_url": "https://api.github.com/users/rdevang71/orgs",
  "repos_url": "https://api.github.com/users/rdevang71/repos",
  "events_url": "https://api.github.com/users/rdevang71/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rdevang71/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Devang Rajput",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-25T01:40:08Z",
  "updated_at": "2025-05-30T17:42:34Z"
}

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter URL')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please give your data in input<h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})
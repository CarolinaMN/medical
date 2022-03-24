const express = require("express")
const cors = require("cors")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express();
app.use(cors());


app.use('/*',  createProxyMiddleware({
    target: 'http://stream.worlgamer.com:8080',
    onProxyRes: function(proxyRes, req, res){
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.listen(5000)

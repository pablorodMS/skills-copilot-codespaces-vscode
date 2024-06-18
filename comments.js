// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/comment') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(comments.getComments()
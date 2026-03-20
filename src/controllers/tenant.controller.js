const data = require('../data/mockData');

exports.requestPage = (req, res) => {
    res.render('tenant/request', {
        requests: data.requests
    });
};

exports.createRequest = (req, res) => {
    const { type, priority, title, description } = req.body;

    const newRequest = {
        id: data.requests.length + 1,
        type,
        title,
        description,
        priority,
        status: "In Progress",
        created_at: new Date().toISOString().split('T')[0]
    };

    data.requests.push(newRequest);

    res.redirect('/tenant/request');
};
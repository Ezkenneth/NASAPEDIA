const router = require('express').Router();
const axios = require('axios');

router.get('/images', async (req, res) => {
    axios({
        method: 'GET',
        url: `https://images-api.nasa.gov/search?q=${req.query.title}&media_type=image`
    }).then(function (response) {
        res.json(response.data.images.map(el => (
            {
                id: el.nasa_id,
                title: el.title,
                image: el.href,
                date: el.date_created
            }
        )));
    }).catch(function (error) {
        res.json(error);
    })
});
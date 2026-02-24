const routes = (app) => {
    app.route('/categories')
    .get((req, res) => {
        res.send('get successful');
        console.log('get categories success');
        
    })
    .post((req, res) => {
        res.send('post successful');
        console.log('post categories success');
    });


    app.get('/categories', (req, res) => {
        res.send('get by id successful');
        console.log('get success');
    });

    app.post('/categories', (req, res) => {
        res.send('post by id successful');
        console.log('post success');
    });


    app.put('/categories/:categoryId',(req,res) => {
        res.send('put successful');
        console.log(`${req.params.categoryId} success`);
    })

    app.delete('/categories/:categoryId',(req,res) => {
        res.send('delete successful');
        console.log(`${req.params.categoryId} success`);
    });
}


module.exports = routes;

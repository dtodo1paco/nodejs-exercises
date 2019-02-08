module.exports = {
    getHomePage: (req, res) => {
        let query = "select O.datetime, P.name, O.quantity from foodsaver.order O, product P WHERE O.product_id = P.id order by O.datetime DESC LIMIT 10";

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('list', {
                title: "Welcome to Foodsaver | View Last 10 Orders"
                ,orders: result
            });
        });
    },
};

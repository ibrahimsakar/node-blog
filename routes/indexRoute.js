const express = require('express');

const router = express.Router();

const data = [
    {
        postTitle: 'Responsive Menü Yapımı',
        postCategory: 'HTML - CSS',
        postContent: 'Merhaba, daha önce HTML ve CSS ile basit menü yapmıştık, ancak aradan uzun süre geçti bende bu yazımda sizlere Responsive Menü Yapımı&nbsp;`nı anlatmak istedim. Kısa bir süre sonra videolu olarak […]',
        image: 'images/css.jpg',
    },
    {
        postTitle: 'Responsive Menü Yapımı',
        postCategory: 'HTML - CSS',
        postContent: 'Merhaba, daha önce HTML ve CSS ile basit menü yapmıştık, ancak aradan uzun süre geçti bende bu yazımda sizlere Responsive Menü Yapımı&nbsp;`nı anlatmak istedim. Kısa bir süre sonra videolu olarak […]',
        image: 'images/css2.jpg',
    },
    {
        postTitle: 'Responsive Menü Yapımı',
        postCategory: 'HTML - CSS',
        postContent: 'Merhaba, daha önce HTML ve CSS ile basit menü yapmıştık, ancak aradan uzun süre geçti bende bu yazımda sizlere Responsive Menü Yapımı&nbsp;`nı anlatmak istedim. Kısa bir süre sonra videolu olarak […]',
        image: 'images/css.jpg',
    },
    {
        postTitle: 'Responsive Menü Yapımı',
        postCategory: 'HTML - CSS',
        postContent: 'Merhaba, daha önce HTML ve CSS ile basit menü yapmıştık, ancak aradan uzun süre geçti bende bu yazımda sizlere Responsive Menü Yapımı&nbsp;`nı anlatmak istedim. Kısa bir süre sonra videolu olarak […]',
        image: 'images/css2.jpg',
    },
];

router.get('/', (req, res) => {
    res.render('home', { data: data });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});


module.exports = router;

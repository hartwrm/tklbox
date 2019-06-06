const express = require('express');
const router = express.Router()
const Lure = require('../models/lures.js')



////////
//INDEX
/////////
router.get('/', (req, res) => {
  res.render('index.ejs')
})

/////////
//NEW
////////
router.get('/new', (req, res) => {
  res.render('new.ejs')
})
///////////
//plastic page
/////////////
router.get('/plastics', (req, res) => {
  Lure.find({type: 'Plastic'}, (err, lures) => {
    console.log(err);
    if (err) {
      res.send('problem')
    } else {
      res.render('plastics.ejs',{
        lures: lures
      })
    }
  })
})

//////////
//TOP WATER
//////////
router.get('/top', (req, res) => {
  Lure.find({type: "Top water"}, (err, lures) => {
    console.log(err);
    if (err) {
      res.send('X')
    } else {
      res.render('top.ejs',{
        lures: lures
      })
    }
  })
})

//////////////
//SEED ROUTE
/////////////
router.get('/seed', (req, res) => {
  Lure.create([
    {
    type: 'Plastic',
    name:'Senko worm',
    conditions:['any'],
    img: 'https://www.tournamenttackle.com/image/cache//Website%20images/Product%20Images/Yamamoto/Senko/Senko%20Black_W%20Large%20Blue%20Flake-800x800.JPG',
    color: 'black',
    qty: 10
  },
  {
    type: 'Plastic',
    name: 'Lizard',
    conditions:['wooded area', 'heavy cover'],
    img: 'https://images-na.ssl-images-amazon.com/images/I/31FjUt3rAgL._SX425_.jpg',
    color: 'green',
    qty: 8
  },
  {
    type: 'Top water',
    name: 'Frog',
    conditions:['calm water', 'matted vegetation', 'lily pads'],
    img: 'https://i5.walmartimages.com/asr/514ca685-b0ee-4b57-856e-b4d3ed5e0047_1.4e56e2e0e3ab1f413370d35746317728.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    color:'bullfrog',
    qty: 2
  },
  {
    type: 'Top water',
    name: 'Walking Stick',
    conditions:['open water', 'calm', 'grass'],
    img: 'http://www.ganis.co.za/images/photos/640_122672.jpg',
    color: 'bluegill',
    qty: 1
  },
  {
    type: 'Crank Bait',
    name: 'Wiggle wart',
    conditions:['medium depth', 'shallow depth', 'rip-rap', 'docks'],
    img: 'https://www.rapala.com/dw/image/v2/aagv_prd/on/demandware.static/-/Sites-rapala-master/default/dw5b9da3a5/storm/hero/original_wiggle_wart_hero.jpg?sw=1000',
    color: 'crawfish',
    qty: 2
  },
  {
    type: 'Jerkbait',
    name: 'Tenkuu',
    conditions:['low water temps', 'shallow water', 'cloudy skies'],
    img: 'https://dks.scene7.com/is/image/dkscdn/15GYAUJRKBTTNK76SLUR_is/?$searchGrid$&wid=180&hei=180',
    color: 'sexy shad',
    qty: 3
  },
  {
    type: 'Swim Bait',
    name: 'Keitech',
    conditions:['deep water', 'deep structure', 'clear water', 'stained water'],
    img: 'https://img.tacklewarehouse.com/watermark/rs.php?path=KSIF-ALW-1.jpg&nw=302',
    color:'rainbow minnow',
    qty: 8
  },
  {
    type: 'Swim Bait',
    name: 'Live Target',
    conditions:['deep water', 'deep structure', 'clear water', 'stained water'],
    img: 'https://cdn.shopify.com/s/files/1/1241/7562/products/BBS_116MS_703_1000x.png?v=1522348082',
    color: 'blue herring',
    qty: 1
  },
  {
    type: 'Jig',
    name: 'Trashmaster',
    conditions:['heavy cover', 'grass', 'docks', 'submerged trees'],
    img: 'https://img.tacklewarehouse.com/watermark/rs.php?path=GCLTJ-BKB-1.jpg&nw=302',
    color: 'shad',
    qty: 2
  },
  {
    type: 'Jig',
    name: 'Football head',
    conditions:['gravel', 'cold water', 'deep water', 'windy', 'ledges'],
    img: 'https://i.tackledirect.com/images/itemlargec/all-terrain-tackle-football-head-jig-lures.jpg',
    color: 'bluegill',
    qty: 5
  }
], (err, Lure) => {
  res.redirect('/lures')
})
})

///////////
//SHOW ROUTE
////////////
router.get('/:id', (req, res) => {
  Lure.findById(req.params.id, (err, lures) => {
    res.render('show.ejs', {
      lures: lures
    })
  })
})

/////////////
//CREATE
/////////////
router.post('/', (req, res) => {
})



module.exports = router;

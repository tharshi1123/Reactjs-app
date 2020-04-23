import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './Common/main.component.jsx'
import Home from './Common/home.component.jsx'
import About from './Common/about.component.jsx'
import Car from './Car/car.component.jsx'
import CarDetail from './Car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'Acer A315',
        year: '2010',
        model: 'I3',
        make: 'Acer',
        media: 'https://www.laptopstore.lk/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/7/1/711ms4zygrl._sx466_.jpg',
        price: 'Rs 88 000'

    },
    {
      id: 2,
      name: 'HP',
      year: '2016',
      model: 'I3',
      make: 'HP',
      media: 'https://i0.wp.com/abansit.lk/wp-content/uploads/2019/11/10210U.jpg?fit=400%2C400&ssl=1',
      price: 'Rs 87 000'

    },
    {
        id: 3,
        name: 'Dell inspiron 3598',
        year: '2016',
        model: 'I3',
        make: 'Dell',
        media: 'https://www.singersl.com/images/products/computers/DEL_DELL3576-I3W10B-01_zoom.jpg',
        price: '100 000'
    },
    {
      id: 4,
      name: 'Levono',
      year: '2016',
      model: 'I5',
      make: 'Levono',
      media: 'https://static.toiimg.com/photo/57865875/Lenovo-V310-80SX004JIH-Laptop-Core-i3-6th-Gen4-GB1-TBWindows-10.jpg',
      price: 'Rs 61 000'
    },
    {
        id: 5,
        name: 'Asus',
        year: '2017',
        model: 'I5',
        make: 'Asus',
        media: 'https://uk.store.asus.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/7/27251157-1451_3000_x_3000.jpg',
        price: 'Rs 147 000'
    },

    {
        id: 6,
        name: 'HP I7',
        year: '2020',
        model: 'I7',
        make: 'Hp',
        media: 'https://www.incredible.co.za/media/catalog/product/cache/3/image/1400x/0dc2d03fe217f8c83829496872af24a0/h/p/hp-pavillion-01-compressor-1.jpg',
        price: 'Rs 120 000'
    },

    {
        id: 7,
        name: 'Asus I5',
        year: '2020',
        model: 'I5',
        make: 'Asus',
        media: 'https://static.toiimg.com/photo/58699124/Asus-R558UQ-DM1286T-Laptop-Core-i5-7th-Gen8-GB1-TBWindows-102-GB.jpg',
        price: 'Rs 150 000'
    },
    {
        id: 8,
        name: 'Dell I5',
        year: '2020',
        model: '10th generation',
        make: 'Dell',
        media: 'https://lh3.googleusercontent.com/proxy/K6s-uO16A59NUlT-Zz67NwfFTxSgkymQlxrB5w4VErvsG1KgP7GSbHv8nlNgc1qlQLdiRPsJrdBJUSVZGgYFUNd02S-KDkaOLhnaMArHJG4uJqBGrD2pnpEhxf3z79h2JOtbBcufuXmkRmUElF8BJrWddi_HE_TVhrQY0dLVmN1yZW0EMmXYbVyRnNsPdmGfLbooKj05GFvosA',
        price: 'Rs 150 000'
    },
    {
        id: 9,
        name: 'Lenovo I5',
        year: '2020',
        model: '10th generation',
        make: 'Lenovo',
        media: 'https://www.laptopstore.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/d/ideapd-130-4.jpg',
        price: 'Rs 150 000'
    },
    {
        id: 10,
        name: 'macbook pro I5',
        year: '2020',
        model: 'I5',
        make: 'Apple',
        media: 'https://assets.catawiki.nl/assets/2017/11/5/9/4/e/94eaceca-b6da-4102-85a6-d64cdcfe1c0d.jpg',
        price: 'Rs 300 000'
    }

];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);

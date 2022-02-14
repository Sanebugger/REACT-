
import React from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render('kya dikhana hai WHAT','kha dikhana hai WHERE','callback func');
//<h1> hello world </h1> ye JSX hai ,that is javascript extention 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

ReactDOM.render(
//<></> isko react fragment bolte hai
<>
<hr></hr>
<hr></hr>
<h1> NETFLIX TOP FIVE BEST </h1>
<p> these are 5 websites </p>
<ol>
    <li>dark</li>
    <li>extra curricular</li>
    <li>my holo love</li>
    <li>my first-2 love</li>
    <li>mr ROBOT</li>
</ol>

<hr></hr>
<hr></hr>
<h1>HELLO,My Name is SAURAV  </h1>
<h1> {`Todays date is  ${date} `}</h1>
<h1> {`current time is  ${time}`}</h1>

<hr></hr>
<hr></hr>

</>,document.getElementById("root")
//if we hv to use any kind of js ,just put ur js in {}
//upar jo hm kr paa rhe thee, basically whi template literal hai lyk using `` and ${}
);

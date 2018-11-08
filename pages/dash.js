import Head from 'next/head'
import Link from 'next/link'
import { Component }from "react"
export default  class dash extends Component {
    render(){
        return(
    <div>
        <Head>
            <title>Crowdfunding</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
        </Head>
        <div>
            <h1 className = "tc ">Kick-starter project</h1>
        </div>
        <div className = "tc ">
            <Link href = "/">
            <button >Log out</button>
            </Link>
            <Link href="/createProj"><img className="mr5 fr" src = "./static/plus.png"/></Link><br/>
            <div className="f6 lh-copy fr "> Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
 <div className = "dt dt--fixed pl3 pr3 pt3 pb3"> 
<article className=" pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/ursus-1.jpg" width="243" height="180"className=" db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" h-100 w-100 mt1">
      <div className="h-25">
        <h1 className="f5 f4-ns mv0"> SilverTech 2.0 - The World’s Most Advanced Underwear</h1>
      </div>
      <div className="h-25 tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
    
    <p className="h-50 f6 lh-copy measure mt2 mid-gray">
    Hate laundry day? This is for you - the future of underwear is breathable, comfortable,
    sustainable and affordable. Best of all? It’s odor-killing so you can do more and wash less -
    meaning fewer laundry days! Grab your SilverTech 2.0 underwear, socks and tees at up to
    50% off before the early bird discount runs out.
    </p>
    
    </div>
    
  <div className="pb3">
     <hr/>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <h3> Link to website : <a href="https://kck.st/2rGURlg">Click here</a></h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
<article className="pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/ursus_2.gif" width="243" height="180" className="h-50 db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className="h-100 w-100 mt1">
      <div className="h-25">
        <h1 className="f5 f4-ns mv0">Tropic: The Ultimate Travel Shoe ​- Also Cross promo on IGG</h1>
      </div>
      <div className=" h-25 tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
    
    <p className="h-50 f6 lh-copy measure mt2 mid-gray">
    Our friends from Tropic and their sneaker with 4-in-1 versatility: that provides the benefits of
aqua shoes, the comfort of sport shoes, the technical outsole materials of hiking shoes, and
the styling of your favorite daily pieces… Are killing it on Kickstarter, with an overfunding of
6.500% and +10.000 backers. Join now the #carrylesstravelmore movement, check it out
HERE
    </p>
    
    </div>
    
    <div className="pb3">
    <hr/>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <h3> Link to website : <a href="https://www.kickstarter.com/projects/1466745684/tropic-the-ultimate-travel-shoe?ref=bl11zu">Click here</a></h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
<article className=" pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/ursus_3.jpeg"width="243" height="180" className=" db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Xenxo S-Ring - The World's Smartest Smart Wearable</h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
   
    <p className="f6 lh-copy measure mt2 mid-gray">
    Reimagine what a wearable can do. Bluetooth call, File storage, Music Control, NFC
payment and much more, all in one smart, compact ring! CLICK HERE
    </p>
  
    </div>
    
    <div className="pb3">
    <hr/>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <h3> Link to website : <a href="http://fnd.to/2bc/xenxo">Click here</a></h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div> 
  </div>
  
</article>
</div>
<div className = "dt dt--fixed pl3 pr3 pt3 pb3"> 
<article className="pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/ursus_4.jpg" width="243" height="180"className=" db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">REDEFINED - The Perfected Wallet Series. </h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
   
    <p className="f6 lh-copy measure mt2 mid-gray">
    From the edge of expression. We have blended style, functionality and quality into an
outstanding smart wallet collection.
    </p>
    
    </div>
    
    <div className ="pb3">
    <hr/>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <h3> Link to website : <a href="https://www.kickstarter.com/projects/serkanelbasan/redefined-wallets?ref=5a8byi">Click here</a></h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>

<article className="pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/ursus_5.gif"width="243" height="180" className=" db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Max Pump 2, Best outdoor tool. Enjoy your leisure time!</h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
    
    <p className="f6 lh-copy measure mt2 mid-gray">
    Amazingly small yet powerful, Max Pump 2 is a super portable air pump that can quickly
inflate/deflate air mattresses, pool floats, rubber rafts, air beds, and any kind of inflatable.
Check it out HERE.
    </p>
    
    </div>
    
    <div className="pb3">
    <hr/>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <h3> Link to website : <a href="https://www.kickstarter.com/projects/203753556/max-pump-2-pump-up-your-air-products-in-a-snap?ref=4p3nmq">Click here</a></h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
<article className="pb3 mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/img_1.png"width="243" height="180" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Campaign 6</h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
     
    <p className="f6 lh-copy measure mt2 mid-gray">
      by name of campaign owner
    </p>
    <hr/>
    </div>
    <div>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
</div>
<div className = "dt dt--fixed pl3 pr3 pt3 pb3 "> 
<article className="mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/img_1.png" width="243" height="180"className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Campaign 7</h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
   
    <p className="f6 lh-copy measure mt2 mid-gray">
      by name of campaign owner
    </p>
    <hr/>
    </div>
    <div>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
<article className="mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/img_1.png" width="243" height="180"className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Campaign 8</h1>
      </div>
      <div className=" tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
   
    <p className="f6 lh-copy measure mt2 mid-gray">
      by name of campaign owner
    </p>
    <hr/>
    </div>
    <div>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
<article className="mh3 pl3 pr3 dtc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
 <img src="./static/img_1.png"width="243" height="180" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
  <div className="pa2 ph3-ns pb3-ns">
    <div className=" w-100 mt1">
      <div className="">
        <h1 className="f5 f4-ns mv0">Campaign 9</h1>
      </div>
      <div className="dtc tr">
        <h2 className="f5 mv0">$1,000</h2>
      </div>
   
    <p className="f6 lh-copy measure mt2 mid-gray">
      by name of campaign owner
    </p>
    <hr/>
    </div>
    <div>
    <h3 className ="">Number of backers </h3>
    <h3 className ="">Amount pledged </h3>
    <h3 className ="">% Funded</h3>
    <h3 className ="">Day to go / IGG  InDemand </h3>
    <button type = "submit" className = "h3 b--solid fl w-100 bg-green">Ask for Cross-Promo</button><br/><br/><br/><br/>
  </div>
  </div>
</article>
</div>
 </div>
        );
    }
}
import Head from 'next/head'
import Link from 'next/link'
import { Component }from "react"

export default class Login extends Component{
    
  
    render(){
       return (
        <div>
        <div>
             <Head>
                <title>Crowdfunding</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
            </Head>
        </div>
        <div className ="pt6">
      <main className="pa4 black-80">
               
      <form className="measure center ">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="tc f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label><br/>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label><br/>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
        </fieldset>
        <div className="tc">
          <Link href="/dash">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </Link>
        </div>
        <div className="lh-copy mt3">
          <Link href="/signup">
          <a href="#0" className="tr f6 link dim black db">Sign up</a>
          </Link>
          <a href="#0" className="tr f6 link dim black db">Forgot your password?</a>
        </div>
      </form>
    </main>
        </div>
        </div>
       );
    }
}
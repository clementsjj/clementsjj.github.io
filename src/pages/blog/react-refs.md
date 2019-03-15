---
title: 'Using React Refs to Style Input Type Submit'
date: '2019-03-14'
cat: 'Programming'
subject: 'React'
---


## Preface
This post will go over a simple solution to using React refs and changing the style of a ref element.

Yesterday I ran into an issue where I wanted to style an input element a specific way, and use onMouseOver/onMouseLeave to turn it blue when hovered.

 was submitting a form with all inputs hidden and its values automatically generated. I had an input of type submit that would send the post request form and redirect to that page's results. 

Simple enough, and honestly worked fine as is. 

My issue was that I needed to style it to look like an existing anchor tag link which does a simple get request with parameters in the url. Styling is easy enough, but my anchor tag turns blue when I hover, so I'd like to do the same with this input element. My initial solution: 
`onMouseOver = {()=>this.input.style.color = '#0000FF'}`

This doesn't work. This is referring to the entire class component. I browsed throught the component seeing if I could possibly pinpoint that particularl input element. This might be possible, but I didn't like where this was going. A little google-fu bringing me to...of course...stack overflow quickly made me realize that I should probably look at React Refs. 

I've used React refs before, but following documentation. I've even googled it, and been like "Yeah, ok, I'll pick this up later".  Welp, now the time has come. Lets make it work. This is a simple example that I think helps get one's feet wet into refs. 

I am using React v16.4.2. This is important, as the rules have evolved slightly. With React 16.3, the React.createRef() api was introduced. Earlier releases should use [callback refs](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs)

## The How-To

Start with constructing the ref initially in the constructor:  
`this.formSubmitRef = React.createRef();` 

As a whole it'll look something like this: 
```javascript
class Taxes extends Component {
  constructor(props) {
    super(props);
    this.formSubmitRef = React.createRef();
    this.state = {
      expanded: false
    };
  }
```

This creates the ref for react to, well, reference. This is kind of like declaring your variable. 

Next, I'll place the ref on the input element:
`ref={this.formSubmitRef}`

As a whole, it'll look something like this:  
```javascript
<input
  ref={this.formSubmitRef}
  style={Styles.pretendAnchorTag}
  onMouseOver={() => {
	  this.formSubmitRef.current.style.color = '#0000FF'
      }}
  onMouseLeave={() => {
  	  this.formSubmitRef.current.style.color = '#212529'
      }}
  type="submit"
  value="View Property Statements List"
  name="DFH_ENTER"
/>
```

As you can see, in order to reference this actual input, we refer to `this.formSubmitRef.current`
The `.current` refers the current state of that element. 

And thats basically it, the new way to use React Refs. 

## Just the Code
```
this.formSubmitRef = React.createRef();
``` 

```
ref={this.formSubmitRef}
```

```
onMouseOver={() => {
	  this.formSubmitRef.current.style.color = '#0000FF'
      }}
```

## Reference
I don't want to regurgitate the React docs, so here's a link: 
[Refs and the Dom](https://reactjs.org/docs/refs-and-the-dom.html)

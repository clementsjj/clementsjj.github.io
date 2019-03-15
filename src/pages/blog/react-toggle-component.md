---
title: 'Simple React Toggle Component'
date: '2019-03-14'
cat: 'Programming'
subject: 'React'
---

## Preface
Today I had a minor hiccup with creating a simple toggle click -> view on a React element. Its something I know how to do, and I was frustrated when I couldn't bust out the code flawlessly. So to remedy this, I'll write about it to remember, and leave it on the internets for someone else to find helpful in the future. 

## The Problem & Setup
I have two little snippets of data I want to see, but allow the user to click to hide to free up more space. 
Rundown of steps:

- Add the future element's 'isOpen' property to state
	- `isOpen: {fy18: true, fy19: true}`
	- I wanted to have them in an object to keep track of easily
- Add the holder for the element
	- `{this.state.isOpen.fy18 && <TaxData />}`
	- This will display my component if fy18 is true, which by default, it is. 
- Add the onclick to set state to view or hide
	- This is the part I want to dive into deeper.
- Add the toggleIsOpen method for the class
	- This is also the part I want to dive into deeper.
	
## The `onClick` Handler
In the `<p>` tag, I add an onClick property that looks like this:
`<p onClick= { () => toggleIsOpen('fy18') }>`
`<p onClick= { () => toggleIsOpen('fy19') }>`
	
Sometimes, I still mess up how I am running my handlers. 
In this particular case, I initially typed `onClick= {toggleIsOpen('fy19') }`
This created a loop of running the toggleIsOpen function since it is automatically running. 
I also want to pass the name in so I only have to use one toggle function. I am passing the string in as a parameter. 

## The `toggleIsOpen` Method
This is where the magic will happen. Now that I know I'm not going to be running a loop of executing this method, and I'm receiving the component that was clicked by passing a string argument, this shouldn't be too bad. 

Remember, we shouldn't mutate state directly, and we want to easily toggle with a '!'.
Things are slightly more tricky when working with an object in state, but not bad. 
Here is the code for toggleIsOpen:
```javascript
toggleIsOpen = (name) => {
  this.setState(prevState => (
    {
      isOpen: {
        ...prevState.isOpen,
        [name]: !prevState.isOpen[name]
      }
    }
  ), () => console.log('>>>>>>>>>>>>>>>>>>Taxes >>>> this.state.isOpen', this.state.isOpen))
}
```
Things to highlight:

- We are passing in the string, and when we use a parameter that changes to refer to state, we should refer to it in brackets [ name ].
- In order to prevent mutating state directly, we can use the spread operator to bring in the previous state, and then change specifically the part that we want to change with [name]. This has turned in to a common practice for me, using the spread operator with prevState. Its the simplest syntax to copy the object, and make specific changes. 
- Console.log used after setState should be used as a calback/second argument in setState to guarentee that it will run after state is set. Also ensure its an actual function and not just `console.log()`...I've made that mistake too many times. 

## Conclusion
We created a simple toggle method that can be used by any number of components, resused, and picked up by new components. 
The code will hopefully serve as a reference for future use cases. 
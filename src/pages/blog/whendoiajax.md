---
title: 'When Should I Ajax?'
date: '2018-12-04'
cat: 'Programming'
subject: 'React'
---

#Overview
While learning React, I've had a few ups and downs with asynchornous calls and page builds. I feel like I am finally breaking through with making things "work", but those stupid little gaps in knowledge can be show stoppers.

In this post, I will try to create a straight forward reference to remind myself what I am doing.

First off, a few React things:

- Data in React comes from 2 places: state and props. That means anything we recieve from a GET request needs to be used as state or props. Easy enough.
- CompnentWillMount() sounds like a great place for asynchronous calls. It's not. In fact, it was depricated in React 16.3, and will be removed in React 17. To use it between 16.3 and 17 without a deprication warning, you would use UNSAFE_componentWillMount(), which sounds unsafe.
- When state changes, React will re-render.

So we want to make the call as early as possible to get the data, correct?
It's going to take longer to get the request than to render the page, so even if we were able to make an AJAX call in ComponentWillMount (which you could technically do at the time of this writing), React will re-render anyway, effectively doing the same thing as ComponentDidMount (which you should use instead).

Finally, we should read this blog post from the React team:
[Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html 'Update on Async Rendering')

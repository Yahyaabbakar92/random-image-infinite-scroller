# random-image-infinite-scroller

Personal project

Live: ()

Date started: 9 January 2023

Date completed: 10 January 2023

## Objectives

Load more images into screen when reaching the bottom of window

## Screenshot

![Alt text](Screenshot%202023-01-10%20at%2011.18.00.png)

## Things I learned

- window.pageYOffset & window.scrollY:(https://stackoverflow.com/questions/44757869/window-pageyoffset-vs-window-scrolly-on-ie11) Is the amount of pixels the page has scrolled from the top left

- scroll event: (https://www.w3schools.com/jsref/event_onscroll.asp) Is an event that fires when the page has been scrolled on
- window.innerHeight: (https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) Is the view available view of the document or the window that is viewable to the user
- scrollHeight: (https://www.w3schools.com/jsref/prop_element_scrollheight.asp) It is the entire height of the element(visible content), that includes the padding excluding the border and scrollbar
- offsetHeight (https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight) It is the entire height that includes visible content, padding, border and scrollbar

## Thought process

- Get images from API
- Display initial number of images on screen, e.g. 4
- When user scrolls to bottom of page, load and display more images

## Need to refactor

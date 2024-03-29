# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile view with Menu Open](image.png)
![Desktop view](image-1.png)


### Links

- Solution URL: [solution URL](https://github.com/micaji-251/PFEM_NewsHomePage)
- Live Site URL: [live site URL](https://micaji-251.github.io/PFEM_NewsHomePage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS Events


### What I learned

Use of Menu that open and close, changing the appearence of the page when open.

function openMenu(e){
    if(e.target.classList.contains('openBtn')){
        const openBtn = e.target;
        openBtn.classList.add('noneMobile');
        navBar.classList.remove('noneMobile');
        blackScreen.classList.add('blackScreen');
    }

    if(e.target.classList.contains('closeBtn')){
        navBar.classList.add('noneMobile');
        const openBtn = header.querySelector('.openBtn');
        openBtn.classList.remove('noneMobile');
        blackScreen.classList.remove('blackScreen');
    }
}


## Author

- Frontend Mentor - [@micaji-2551](https://www.frontendmentor.io/profile/yourusername)


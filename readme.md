# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

hey all, this my second frontend mentor challenge. It's an amazing challenge that cover content positioning and various color scheme.


### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Desktop-view](/public/final-output/desktop-view.png)
![Mobile-view](/public/final-output/mobile-view.png)


### Links

- Solution URL: [source code](https://github.com/rashed-mia/results-summary-card.git)
- Live Site URL: [live project](https://results-summary-card-liard.vercel.app/)

## My process

I have implemented this challenge using HTML, CSS and JavaScript. I have used CSS Grid to position the content and CSS Flex to create the responsive layout. I have also used CSS variables to make the code more readable and maintainable. I have used JavaScript to dynamically populate the content from the local JSON data. I have also used CSS transitions to create smooth animations on hover and focus states.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I have learned how to use CSS Grid to position the content and create a responsive layout. I have also learned how to use CSS Flex to create a responsive layout. I have also learned how to use JavaScript to dynamically populate the content from the local JSON data. I have also learned how to use CSS transitions to create smooth animations on hover and focus states.

 see some snippet below:

```html
 <div class="result grid-flow" data-specing="large">
        <h2 class="section-title">Your Result</h2>
        <p class="result-score">
          <span>76</span>
          of 100
        </p>
        <div class=" grid-flow">
          <p class="result-grade">Great</p>
          <p class="result-status">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
```
```css

.result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  background-image: linear-gradient(
    to bottom,
    var(--Light-slate-blue),
    var(--Light-royal-blue)
  );
  color: var(--clr-text);
  text-align: center;
  border-radius: var(--border-radius);
  padding: var(--padding);
}
```
```js
data.forEach(item => {
      const summaryItem = document.createElement('div');
      summaryItem.classList.add('summary-item');
      summaryItem.innerHTML = `
        <div class="flex-group">
          <img src="${item.icon}" alt="${item.category} icon" class="summary-icon">
          <p class="summary-item-tile">${item.category}</p>
        </div>
        <p class="summary-score"><span>${item.score}</span> / 100</p>
      `;
      summaryItemsContainer.appendChild(summaryItem);
    });
```



### Useful resources

- [www.w3school.com](https://www.w3school.com) - This helped me for simple html and css  tutorial. I really liked this pattern and will benifited any beginner to going forward.
- [kevin powell](https://www.youtube.com/@KevinPowell) - This is an amazing youtube chanel which helped me finally understand css styling. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Rashed Mia](https://web-develop-kickstart-2.vercel.app/)
- Frontend Mentor - [@rashed-mia](https://www.frontendmentor.io/profile/rashed-mia)
- Twitter - [Rashed Mia](https://x.com/RashedM17428627)


## Acknowledgments
youtube is the best video tutorial platform to learn web devolopment. Otherwise bengli community helps me alot to solve my problem. I am very thankful to them. [learn-with-sumit](https://learnwithsumit.com/), [programming hero](https://web.programming-hero.com/home) and [tapas-adhikary](https://www.youtube.com/@tapascript-bangla)



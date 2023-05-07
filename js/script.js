'use strict';

const titleClickHandler = function(event){

    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);


    /* [DONE]remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}
    /* [DONE] add class 'active' to the clicked link */

const clickedElement = this
console.log('clickedElement:', clickedElement);
clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.post');
for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}
    /* get [DONE] 'href' attribute from the clicked link */

const articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(articleSelector);


    /* [DONE] add class 'active' to the correct article */

targetArticle.classList.add('active');
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);

    titleList.innerHTML = '';

  /* find all the articles and save them to variable: articles */

    let articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    console.log(articles);

    for(let article of articles) {

    /* get the article id */

    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* get the title from the title element */

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into html variable */
    html = html + linkHTML;

    }
    titleList.innerHTML = html;
    console.log(html);

    const links = document.querySelectorAll('.titles a');
    console.log('to to to', links);
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
}

generateTitleLinks();

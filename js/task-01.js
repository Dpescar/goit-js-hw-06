'use strict';
const listCategories = document.querySelectorAll('#categories li.item');
const amountCategories = listCategories.length;

console.log(`Number of categories: ${amountCategories}`);

listCategories.forEach(category => {
  const headtitleCategory = category.querySelector('h2');
  const nameCategory = headtitleCategory.textContent;

  const listElements = category.querySelectorAll('ul li');
  const amountElements = listElements.length;

  console.log(`Category: ${nameCategory}`);
  console.log(`Elements: ${amountElements}`);
});

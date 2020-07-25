# Gilded Rose Kata

A Javascript solution for the Gilded Rose Kata orignally by Terry Hughes.  

## Legacy Specifications

1. Once the sell by date has passed, Quality degrades twice as fast.  
2. The Quality of an item is never negative.
3. “Aged Brie” actually increases in Quality the older it gets.
4. The Quality of an item is never more than 50.
5. “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality.
6. “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches.
7. Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert.

---

### Note to self

>In tackling this kata again in future, pay closer attention to the **refactor loop**. A more diligent approach would have definitely resulted in cleaner, DRY'er code. _Try getting rid of ifs all together maybe?_ (25/07/20)

## Brief

> "Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items.


class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items = []) {
    this.items = items;
  };

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      switch (this.items[i].name) {

        case "Sulfuras, Hand of Ragnaros":
          this.qualitySet(50, i)
          break;
        case "Aged Brie":
          this.qualityChange(1, i);
          this.items[i].sellIn += 1
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) {
            this.qualityChange(2, i)
          } else if (this.items[i].sellIn <= 5 && this.items[i].sellIn > 0) {
            this.qualityChange(3, i)
          } else {
            this.qualitySet(0, i)
          }
          break;
        case "Conjured Mana Cake":
          this.qualityChange(-2, i)
          break;

        default:
          if (this.items[i].sellIn > 0) {
            this.qualityChange(-1, i)
          } else {
            this.qualityChange(-2, i)
          };
      };

      if (this.items[i].quality > 50) {
        this.qualitySet(50, i)
      } else if (this.items[i].quality < 0) {
        this.qualitySet(0, i)
      };

    }

    return this.items;

  }

  qualityChange(amount, index) {
    this.items[index].quality += amount;
  };

  qualitySet(value, index) {
    this.items[index].quality = value;
  };

}

module.exports = {
  Item,
  Shop
}

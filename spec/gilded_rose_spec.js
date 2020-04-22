
var { Shop, Item } = require('../src/gilded_rose.js');
describe("Gilded Rose", function () {

  it("Quality is less or equal to 50", function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 20, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality <= 50).toBe(true)
  });

  it("Quality of all items is never negative", function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });

  it("'sell in' value is not negative ", function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0)
  });

  it("Sulfuras items maintain quality", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });

  it("aged brie increases in quality up to 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(50)
  });

  it("Quality rate doubles with no valid exception when expired", function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 50), new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48);
    expect(items[1].quality).toEqual(1)
  });

  it("unexempted items quality rate is 1 by standard", function () {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49)
  });

  it("Conjured items double quality rate", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48)
  });
});

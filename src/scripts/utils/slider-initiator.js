/* eslint-disable no-return-assign */
import Counter from './counter-helper';

const SliderInitiator = {
  init({
    items,
    interval,
    nextButtonX, prevButtonX,
  }) {
    if(!this._itemsValidation(items)) return;
    
    const counterX = new Counter(0);

    this._initButton({
      items,
      nextButton: nextButtonX,
      prevButton: prevButtonX,
      counter: counterX,
    });

    this._initAutoSlide({
      items,
      interval,
      counter: counterX,
    });
  },


  _itemsValidation(items) {
    if(items.some(item => item === null) || items.length === 0) return false;
    return true;
  },


  _initAutoSlide({ items, interval, counter }) {
    if (interval) {
      setInterval(() => this._autoSlide(items, counter), interval);
      window.onresize = (event) => {
        this._autoSlide(items, counter);
        event.stopImmediatePropagation();
      }
    }
  },


  _autoSlide(items, counter) {
    let index = counter.plus();

    if (index >= items.length) index = counter.reset();

    while (this._checkOnView(items[index])) {
      if (index >= items.length) index = counter.reset();
      else if (index < 0) index = counter.plus(items.length);
      else index = counter.plus();
    }

    this._scrollIntoView(items[index]);
  },


  _initButton({
    items, nextButton, prevButton, counter,
  }) {
    if (!nextButton || !prevButton) return;

    nextButton.addEventListener('click', () => {
      this._callback({
        items,
        counter,
        counterAction: 'plus',
      });
    });

    prevButton.addEventListener('click', () => {
      this._callback({
        items,
        counter,
        counterAction: 'minus',
      });
    });
  },


  _callback({ items, counter, counterAction }) {
    let index = counter.action(counterAction);

    if (index >= items.length) index = counter.reset();
    if (index < 0) index = counter.plus(items.length);

    while (this._checkOnView(items[index])) {
      if (index >= items.length) index = counter.reset();
      else if (index < 0) index = counter.plus(items.length);
      else index = counter.action(counterAction);
    }

    this._scrollIntoView(items[index]);
  },


  _scrollIntoView(item) {
    const box = item.parentElement;
    const boxWidth = box.clientWidth;
    const itemWidth = item.offsetWidth;
    const itemX = item.offsetLeft;

    box.scrollLeft = itemX + (boxWidth - itemWidth) / -2;
  },


  _checkOnView(itemElmnt) {
    const body  = document.body.getBoundingClientRect();
    const box   = itemElmnt.parentElement.getBoundingClientRect();
    const item  = itemElmnt.getBoundingClientRect();

    const boxRight  = body.right - box.right;
    const itemRight = body.right - item.right;

    return (
      item.left > box.left
      && itemRight > boxRight
      && true
    );
  },
};

export default SliderInitiator;
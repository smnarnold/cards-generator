import html2canvas from 'html2canvas';
import download from 'downloadjs';

class Card {
  constructor(card, settings) {
    this.card = card;
    this.defaultSettings = {
      placeholder: document.body,
      render: 'export',
      type: 'modifier',
    };

    this.settings = Object.assign(this.defaultSettings, settings);
  }

  create() {
    let card = document.createElement('div');
    card.className = `card card--${this.settings.type}`;
    card.id = `card-${this.card.index}`;

    const cell1 = this.getScore(this.card.pts1);
    const cell2 = this.getScore(this.card.pts2);
    const cell3 = this.getScore(this.card.pts3);
    const description = this.formatStr(this.card.name);
    const action = this.getAction(this.card);
    let wrapper = '';

    if(cell1.classname !== 'neutral' || cell2.classname !== 'neutral' || cell3.classname !== 'neutral') {
      wrapper = `<div class="scoreboard__wrapper">
        <div class="scoreboard__cell">${cell1.html}</div>
        <div class="scoreboard__cell">${cell2.html}</div>
        <div class="scoreboard__cell">${cell3.html}</div>
      </div>`;
    }

    card.innerHTML = `
        <div class="card__top">
          <section class="section scoreboard">${wrapper}</section>
          <section class="section description">${description}</section>
        </div>
        ${action}
    `;

    this.print(card);
  }

  getScore(value) {
    let obj = {
      classname: 'hole',
      type: isNaN(value) ? 'string' : 'number',
      value: typeof value === 'undefined' ? '' : value
    };

    if (obj.type === 'number') {
      switch (Math.sign(obj.value)) {
        case -1:
          obj.value = Math.abs(obj.value); // Remove the '-' score will be red instead
          obj.classname = 'negative';
          break;
        case 1:
          obj.classname = 'positive';
          break;
        default:
          obj.classname = 'neutral';
      }
    }

    obj.html = `<div class="scoreboard__point ${obj.classname}">${obj.value}</div>`;
    return obj;
  }

  getAction(card) {
    let html = '';
    let title =
      typeof card.actionTitle === 'undefined'
        ? ''
        : `<strong class="action__title">${this.formatStr(card.actionTitle)}</strong>`;
    let description = typeof card.actionDesc === 'undefined' ? '' : `<p>${this.formatStr(card.actionDesc)}</p>`;
    let classname = typeof card.actionType === 'undefined' ? '' : card.actionType;

    if (card.actionDesc) {
      html = `<section class="section action ${classname}">`;
      if (card.actionIcon) {
        html += `<div class="action__icon">`;
        if (card.actionIcon === 'plus2') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M238 4707.3c-6.8-2.6-13.6-7.2-17.5-12-4-5.1-8.1-13.3-8.9-18-.4-2-1-3.8-1.4-3.8-.3 0-3.2 1-6.2 2.1-7.5 3-19.6 3.2-27.9.5-11.3-3.7-21.8-13.4-25.9-24.1-1.7-4.3-1.8-12.4-2.3-104.1l-.5-99.5-10.9 14.3c-15.3 20-21 24.7-35 28.4-14.5 3.8-28.8-.1-39.3-10.7-11-10.9-15-27.7-10.3-42.8 3-9.5 43.9-85.2 61.2-113 32.2-51.9 56.6-74.7 92.3-86.4 19.7-6.4 39.9-9.1 68.2-9.2 46.7-.1 78.7 11.3 104.6 37.2 16.7 16.8 27 34.6 34.5 60.5 6.6 22.8 6.3 17 6.6 147 .4 128.5.4 128.9-5.2 140.6-3.7 7.9-8.7 13.3-15.6 17-11 5.9-24.5 6.8-36 2.4-5-1.8-5.2-1.8-5.2-.1 0 6.6-2.4 23.3-4.2 28.3-5.8 17.2-19.5 26.9-37.7 26.9-6.6 0-17.9-2.6-21.2-4.7-1.3-.9-2.6-1.4-2.7-1.2-.2.2-1.6 2.8-3.2 5.7-3.8 6.9-11.2 13.9-18.7 17.4-8 3.6-23.5 4.3-31.6 1.3zm22.6-20.4c4.7-2.1 9-6.4 10.9-10.8 1-2.4 1.4-21.6 1.8-91.7l.5-88.7 2.9-2.4c3.9-3.4 9.8-3.4 13.7 0l2.9 2.4.5 79c.4 70 .7 79.4 2.1 82.5 3.5 7.4 8.9 10.3 19.1 10.3 9.3 0 13.2-2.2 17.1-9.8l3.1-6.1.5-82.2c.4-65.8.8-82.7 1.8-84.6 3.6-6.3 14-5.8 18.2.8.5.9 1.1 25.4 1.4 57.7l.5 56.2 2.9 5.9c4 8 8.3 10.2 18.5 9.7 12.4-.6 17.1-6.2 19.1-22.5.7-5.7.9-46.9.6-120.9-.4-108.9-.4-112.5-2.6-123.5-3.9-20.5-10.8-38.1-20.8-53-5.5-8.1-18-20.5-26.1-26-23.7-15.9-57.1-22.2-98.2-18.4-37.6 3.4-62 13.6-82.3 34.2-16.5 16.8-30.4 36.9-53.3 77.2-16.2 28.4-36.4 65.5-41.2 75.8-8.2 17.5-.2 33.3 16.7 33.3 6.3 0 11.2-1.7 15.9-5.7 1.8-1.5 12.4-14.7 23.5-29.4s21.4-27.3 22.9-28.1c3.4-1.8 9.6-.8 12.4 1.9 2.1 2 2.1 2.7 2.7 117.2.5 114.3.5 115.1 2.7 119.2 5 9.6 18.2 13.6 27.9 8.5 2.6-1.3 6-4.1 7.7-6.2l3.2-4 .5-74 .5-74 3.4-3c4.7-4.2 9.9-4.1 14.1.2l3 3.1.5 89.1.5 89.1 2.4 3.8c5.3 8.8 16.5 12.3 25.9 7.9z" transform="matrix(.1 0 0 -.1 0 472)"/>
  <polygon points="32.7 33.8 28.9 33.8 28.9 29.9 26.9 29.9 26.9 33.8 23 33.8 23 35.8 26.8 35.8 26.8 39.6 28.8 39.6 28.8 35.8 32.7 35.8"/>
</svg>`;
        } else if (card.actionIcon === 'handplus') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M238 4707.3c-6.8-2.6-13.6-7.2-17.5-12-4-5.1-8.1-13.3-8.9-18-.4-2-1-3.8-1.4-3.8-.3 0-3.2 1-6.2 2.1-7.5 3-19.6 3.2-27.9.5-11.3-3.7-21.8-13.4-25.9-24.1-1.7-4.3-1.8-12.4-2.3-104.1l-.5-99.5-10.9 14.3c-15.3 20-21 24.7-35 28.4-14.5 3.8-28.8-.1-39.3-10.7-11-10.9-15-27.7-10.3-42.8 3-9.5 43.9-85.2 61.2-113 32.2-51.9 56.6-74.7 92.3-86.4 19.7-6.4 39.9-9.1 68.2-9.2 46.7-.1 78.7 11.3 104.6 37.2 16.7 16.8 27 34.6 34.5 60.5 6.6 22.8 6.3 17 6.6 147 .4 128.5.4 128.9-5.2 140.6-3.7 7.9-8.7 13.3-15.6 17-11 5.9-24.5 6.8-36 2.4-5-1.8-5.2-1.8-5.2-.1 0 6.6-2.4 23.3-4.2 28.3-5.8 17.2-19.5 26.9-37.7 26.9-6.6 0-17.9-2.6-21.2-4.7-1.3-.9-2.6-1.4-2.7-1.2-.2.2-1.6 2.8-3.2 5.7-3.8 6.9-11.2 13.9-18.7 17.4-8 3.6-23.5 4.3-31.6 1.3zm22.6-20.4c4.7-2.1 9-6.4 10.9-10.8 1-2.4 1.4-21.6 1.8-91.7l.5-88.7 2.9-2.4c3.9-3.4 9.8-3.4 13.7 0l2.9 2.4.5 79c.4 70 .7 79.4 2.1 82.5 3.5 7.4 8.9 10.3 19.1 10.3 9.3 0 13.2-2.2 17.1-9.8l3.1-6.1.5-82.2c.4-65.8.8-82.7 1.8-84.6 3.6-6.3 14-5.8 18.2.8.5.9 1.1 25.4 1.4 57.7l.5 56.2 2.9 5.9c4 8 8.3 10.2 18.5 9.7 12.4-.6 17.1-6.2 19.1-22.5.7-5.7.9-46.9.6-120.9-.4-108.9-.4-112.5-2.6-123.5-3.9-20.5-10.8-38.1-20.8-53-5.5-8.1-18-20.5-26.1-26-23.7-15.9-57.1-22.2-98.2-18.4-37.6 3.4-62 13.6-82.3 34.2-16.5 16.8-30.4 36.9-53.3 77.2-16.2 28.4-36.4 65.5-41.2 75.8-8.2 17.5-.2 33.3 16.7 33.3 6.3 0 11.2-1.7 15.9-5.7 1.8-1.5 12.4-14.7 23.5-29.4s21.4-27.3 22.9-28.1c3.4-1.8 9.6-.8 12.4 1.9 2.1 2 2.1 2.7 2.7 117.2.5 114.3.5 115.1 2.7 119.2 5 9.6 18.2 13.6 27.9 8.5 2.6-1.3 6-4.1 7.7-6.2l3.2-4 .5-74 .5-74 3.4-3c4.7-4.2 9.9-4.1 14.1.2l3 3.1.5 89.1.5 89.1 2.4 3.8c5.3 8.8 16.5 12.3 25.9 7.9z" transform="matrix(.1 0 0 -.1 0 472)"/>
  <polygon points="32.8 33.6 29.2 33.6 29.2 29.9 27.7 29.9 27.7 33.6 24 33.6 24 35.1 27.7 35.1 27.7 38.7 29.2 38.7 29.2 35.1 32.8 35.1"/>
</svg>`;
        } else if (card.actionIcon === 'handminus') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M238 4707.3c-6.8-2.6-13.6-7.2-17.5-12-4-5.1-8.1-13.3-8.9-18-.4-2-1-3.8-1.4-3.8-.3 0-3.2 1-6.2 2.1-7.5 3-19.6 3.2-27.9.5-11.3-3.7-21.8-13.4-25.9-24.1-1.7-4.3-1.8-12.4-2.3-104.1l-.5-99.5-10.9 14.3c-15.3 20-21 24.7-35 28.4-14.5 3.8-28.8-.1-39.3-10.7-11-10.9-15-27.7-10.3-42.8 3-9.5 43.9-85.2 61.2-113 32.2-51.9 56.6-74.7 92.3-86.4 19.7-6.4 39.9-9.1 68.2-9.2 46.7-.1 78.7 11.3 104.6 37.2 16.7 16.8 27 34.6 34.5 60.5 6.6 22.8 6.3 17 6.6 147 .4 128.5.4 128.9-5.2 140.6-3.7 7.9-8.7 13.3-15.6 17-11 5.9-24.5 6.8-36 2.4-5-1.8-5.2-1.8-5.2-.1 0 6.6-2.4 23.3-4.2 28.3-5.8 17.2-19.5 26.9-37.7 26.9-6.6 0-17.9-2.6-21.2-4.7-1.3-.9-2.6-1.4-2.7-1.2-.2.2-1.6 2.8-3.2 5.7-3.8 6.9-11.2 13.9-18.7 17.4-8 3.6-23.5 4.3-31.6 1.3zm22.6-20.4c4.7-2.1 9-6.4 10.9-10.8 1-2.4 1.4-21.6 1.8-91.7l.5-88.7 2.9-2.4c3.9-3.4 9.8-3.4 13.7 0l2.9 2.4.5 79c.4 70 .7 79.4 2.1 82.5 3.5 7.4 8.9 10.3 19.1 10.3 9.3 0 13.2-2.2 17.1-9.8l3.1-6.1.5-82.2c.4-65.8.8-82.7 1.8-84.6 3.6-6.3 14-5.8 18.2.8.5.9 1.1 25.4 1.4 57.7l.5 56.2 2.9 5.9c4 8 8.3 10.2 18.5 9.7 12.4-.6 17.1-6.2 19.1-22.5.7-5.7.9-46.9.6-120.9-.4-108.9-.4-112.5-2.6-123.5-3.9-20.5-10.8-38.1-20.8-53-5.5-8.1-18-20.5-26.1-26-23.7-15.9-57.1-22.2-98.2-18.4-37.6 3.4-62 13.6-82.3 34.2-16.5 16.8-30.4 36.9-53.3 77.2-16.2 28.4-36.4 65.5-41.2 75.8-8.2 17.5-.2 33.3 16.7 33.3 6.3 0 11.2-1.7 15.9-5.7 1.8-1.5 12.4-14.7 23.5-29.4s21.4-27.3 22.9-28.1c3.4-1.8 9.6-.8 12.4 1.9 2.1 2 2.1 2.7 2.7 117.2.5 114.3.5 115.1 2.7 119.2 5 9.6 18.2 13.6 27.9 8.5 2.6-1.3 6-4.1 7.7-6.2l3.2-4 .5-74 .5-74 3.4-3c4.7-4.2 9.9-4.1 14.1.2l3 3.1.5 89.1.5 89.1 2.4 3.8c5.3 8.8 16.5 12.3 25.9 7.9z" transform="matrix(.1 0 0 -.1 0 472)"/>
  <rect width="2" height="9.7" x="26.8" y="29.9" transform="matrix(.00645 -1 1 .00645 -7.116 62.4)"/>
</svg>`;
        } else if (card.actionIcon === 'plus1') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M37.3 45.2H13.7c-2 0-3.6-1.6-3.6-3.6V8.4c0-2 1.6-3.6 3.6-3.6h23.7c2 0 3.6 1.6 3.6 3.6v33.2c-.1 2-1.7 3.6-3.7 3.6zM13.7 6.8c-.9 0-1.6.7-1.6 1.6v33.2c0 .9.7 1.6 1.6 1.6h23.7c.9 0 1.6-.7 1.6-1.6V8.4c0-.9-.7-1.6-1.6-1.6H13.7z"/>
  <path d="M26.6 26.1v4.2h-2.2v-4.2h-4.2v-2.2h4.2v-4.1h2.2v4.1h4.2v2.2h-4.2z"/>
</svg>`;
        } else if (card.actionIcon === 'minus1') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M37.3 45.2H13.7c-2 0-3.6-1.6-3.6-3.6V8.4c0-2 1.6-3.6 3.6-3.6h23.7c2 0 3.6 1.6 3.6 3.6v33.2c-.1 2-1.7 3.6-3.7 3.6zM13.7 6.8c-.9 0-1.6.7-1.6 1.6v33.2c0 .9.7 1.6 1.6 1.6h23.7c.9 0 1.6-.7 1.6-1.6V8.4c0-.9-.7-1.6-1.6-1.6H13.7z"/>
  <path d="M20.3 26.1v-2.2h10.5v2.2H20.3z"/>
</svg>`;
        }
        html += `</div>`;
      }

      html += `<div class="action__text">
          ${title} ${description}
        </div>
      </section>`;
    }

    return html;
  }

  formatStr(str) {
    if (typeof str !== 'undefined' && str.length) {
      str = this.fixExclamationMark(str);
      str = this.avoidOrphan(str);
      str = this.smartyText(str);
      str = this.setMarkdown(str);
    }
    return str;
  }

  fixExclamationMark(str) {
    return this.replaceAll(str, ' !', '&thinsp;!');
  }

  avoidOrphan(str) {
    let n = str.split(' ');
    if (n.length > 2) {
      let size = this.strLengthWithoutEntities(n[n.length - 1]) + this.strLengthWithoutEntities(n[n.length - 2]);
      if (size < 16) {
        // if words combinasion isn't too long
        str = str.replace(/ ([^ ]*)$/, '&nbsp;$1');
      }
    }

    return str;
  }

  setMarkdown(str) {
    let strong = str.split('*');
    if (strong.length > 1) {
      for (let x = 1; x < strong.length; x++) {
        if (this.isOdd(x)) {
          strong[x] = `<strong>${strong[x]}</strong>`;
        }
      }
      str = strong.join('');
    }

    let italic = str.split('_');
    if (italic.length > 1) {
      for (let x = 1; x < italic.length; x++) {
        if (this.isOdd(x)) {
          italic[x] = `<em>${italic[x]}</em>`;
        }
      }
      str = italic.join('');
    }

    let strikethrough = str.split('~');
    if (strikethrough.length > 1) {
      for (let x = 1; x < strikethrough.length; x++) {
        if (this.isOdd(x)) {
          strikethrough[x] = `<del>${strikethrough[x]}</del>`;
        }
      }
      str = strikethrough.join('');
    }

    str = str.replace(/\\/g, '<br>');

    return str;
  }

  smartyText(str) {
    str = str.replace('-', '‑'); // Non breakable
    let n = str.split('"');
    if (n.length > 1) {
      for (let x = 1; x < n.length; x++) {
        if (this.isOdd(x)) {
          n[x] = `«&nbsp;${n[x]}&nbsp;»`;
        }
      }
      str = `<span style="text-indent: -1em">${n.join('')}</span>`;
    }

    return str;
  }

  isOdd(nbr) {
    return nbr % 2;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  strLengthWithoutEntities(str) {
    let el = document.createElement('div');
    el.innerHTML = str;
    return el.innerHTML.length;
  }

  print(card) {
    this.settings.placeholder.appendChild(card);

    if (this.settings.render === 'export') {
      html2canvas(card).then((canvas) => {
        let src = canvas.toDataURL('image/jpeg', 1.0);
        download(src, `${card.id}.jpg`, 'image/jpeg');
      });
    }
  }
}

export { Card as default };

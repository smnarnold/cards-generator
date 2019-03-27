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
    console.log(this.settings);
    let card = document.createElement('div');
    card.className = `card card--${this.settings.type}`;
    card.id = `card-${this.card.index}`;

    let cell1 = this.getScore(this.card.pts1);
    let cell2 = this.getScore(this.card.pts2);
    let cell3 = this.getScore(this.card.pts3);
    let description = this.formatStr(this.card.name);
    let action = this.getAction(this.card);

    card.innerHTML = `
        <div class="card__top">
          <section class="section scoreboard">
            <div class="scoreboard__wrapper">
              <div class="scoreboard__cell">${cell1}</div>
              <div class="scoreboard__cell">${cell2}</div>
              <div class="scoreboard__cell">${cell3}</div>
            </div>
          </section>
          <section class="section description">${description}</section>
        </div>
        ${action}
    `;

    this.print(card);
  }

  getScore(value) {
    let html = '';
    let classname = 'hole';
    let type = !isNaN(value) ? 'number' : 'string';
    if (type === 'string' && typeof value === 'undefined') type = 'default';

    switch (type) {
      case 'number': // is a numeric value
        value = parseInt(value);
        switch (Math.sign(value)) {
          case -1:
            value = Math.abs(value); // Remove the '-' score will bve red instead
            classname = 'negative';
            break;
          case 1:
            classname = 'positive';
            break;
          default:
            classname = 'neutral';
        }
        break;
      case 'string': // Display icone instead of a value
        classname = value;
        value = '';
        break;
      default:
        // empty display a hole
        value = '';
    }

    html = `<div class="scoreboard__point ${classname}">${value}</div>`;

    return html;
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
  <path d="M44.5 2H19.4c-1.5 0-2.7 1.2-2.7 2.7v1.8L4.1 10c-1 .3-1.8.9-2.3 1.8-.5.9-.6 1.9-.3 2.9l9 31.8c.3 1 .9 1.8 1.8 2.3.6.3 1.2.5 1.9.5.4 0 .7 0 1.1-.1L37.1 43c.3-.1.5-.2.8-.3h6.7c1.5 0 2.7-1.2 2.7-2.7V4.6C47.2 3.1 46 2 44.5 2zM14.7 47.3c-.5.1-1 .1-1.4-.2-.4-.2-.8-.6-.9-1.1l-9-31.8c-.1-.5-.1-1 .2-1.4s.6-.8 1.1-.9l12.1-3.4V40c0 1.5 1.2 2.7 2.7 2.7h11.4l-16.2 4.6zM45.2 40c0 .4-.3.7-.7.7H20.6c-1 0-1.9-.8-1.9-1.9V4.6c0-.4.3-.7.7-.7h25.1c.4 0 .7.3.7.7V40z"/>
  <path d="M33.6 23.8V28h-2.2v-4.2h-4.2v-2.2h4.2v-4.1h2.2v4.1h4.2v2.2h-4.2z"/>
</svg>`;
        } else if (card.actionIcon === 'handplus') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M40.3 8.8h-.5c-.8.1-1.5.4-2.1.8v-1c0-2.4-1.8-4.5-4.2-4.8h-.6c-1 0-1.9.3-2.7.8C30 2.3 28.3.5 26 .2h-.6c-1.3 0-2.5.5-3.3 1.4-.8.8-1.3 1.9-1.4 3-.6-.4-1.3-.7-2.1-.8H18c-1.3 0-2.5.5-3.4 1.4-.9.9-1.5 2.1-1.5 3.3v16.1l-1-1c-.9-.9-2-1.4-3.3-1.4-1.3 0-2.4.5-3.3 1.4-1.8 1.8-1.8 4.7-.1 6.5l10.1 13.3.2 2.8c.1 1.7 1.6 3 3.3 3h18.4c1.6 0 3-1.2 3.3-2.9l.4-3.4c1.4-2.3 2.4-5.3 3-9 .6-3.2.8-7 .8-11.4v-9.1c.1-2.5-2-4.6-4.6-4.6zm-1.8 37.3c-.1.5-.5.9-1 .9H19.1c-.5 0-1-.4-1-1l-.3-3.5L7.3 28.7c-1-1-1-2.5 0-3.5.5-.5 1.1-.7 1.7-.7.6 0 1.3.2 1.7.7l3 2.8c.2.2.4.3.7.3.6 0 1.1-.5 1.1-1.2V8.6c0-1.4 1.2-2.5 2.6-2.5h.3c1.3.1 2.2 1.3 2.2 2.6v12.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V5c0-1.4 1.2-2.5 2.5-2.5h.3c1.3.2 2.2 1.3 2.2 2.6v16.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V8.6c0-1.4 1.1-2.5 2.5-2.5h.3c1.3.1 2.2 1.3 2.2 2.6v12.8c0 .7.6 1.2 1.2 1.2s1.2-.5 1.2-1.1v-7.9c0-1.3.9-2.4 2.2-2.6h.2c1.4 0 2.4 1.1 2.4 2.5v9.1c0 7.8-.9 15-3.7 19.4.1.1.1.2.1.4l-.5 3.6z"/>
            <path d="M29.3 34.3v4.2h-2.2v-4.2h-4.2v-2.2h4.2V28h2.2v4.1h4.2v2.2h-4.2z"/>
          </svg>`;
        } else if (card.actionIcon === 'handminus') {
          html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M40.3 8.8h-.5c-.8.1-1.5.4-2.1.8v-1c0-2.4-1.8-4.5-4.2-4.8h-.6c-1 0-1.9.3-2.7.8C30 2.3 28.3.5 26 .2h-.6c-1.3 0-2.5.5-3.3 1.4-.8.8-1.3 1.9-1.4 3-.6-.4-1.3-.7-2.1-.8H18c-1.3 0-2.5.5-3.4 1.4-.9.9-1.5 2.1-1.5 3.3v16.1l-1-1c-.9-.9-2-1.4-3.3-1.4-1.3 0-2.4.5-3.3 1.4-1.8 1.8-1.8 4.7-.1 6.5l10.1 13.3.2 2.8c.1 1.7 1.6 3 3.3 3h18.4c1.6 0 3-1.2 3.3-2.9l.4-3.4c1.4-2.3 2.4-5.3 3-9 .6-3.2.8-7 .8-11.4v-9.1c.1-2.5-2-4.6-4.6-4.6zm-1.8 37.3c-.1.5-.5.9-1 .9H19.1c-.5 0-1-.4-1-1l-.3-3.5L7.3 28.7c-1-1-1-2.5 0-3.5.5-.5 1.1-.7 1.7-.7.6 0 1.3.2 1.7.7l3 2.8c.2.2.4.3.7.3.6 0 1.1-.5 1.1-1.2V8.6c0-1.4 1.2-2.5 2.6-2.5h.3c1.3.1 2.2 1.3 2.2 2.6v12.8c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V5c0-1.4 1.2-2.5 2.5-2.5h.3c1.3.2 2.2 1.3 2.2 2.6v16.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V8.6c0-1.4 1.1-2.5 2.5-2.5h.3c1.3.1 2.2 1.3 2.2 2.6v12.8c0 .7.6 1.2 1.2 1.2s1.2-.5 1.2-1.1v-7.9c0-1.3.9-2.4 2.2-2.6h.2c1.4 0 2.4 1.1 2.4 2.5v9.1c0 7.8-.9 15-3.7 19.4.1.1.1.2.1.4l-.5 3.6z"/>
            <path d="M22.9 34.3v-2.2h10.5v2.2H22.9z"/>
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
      str = n.join('');
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

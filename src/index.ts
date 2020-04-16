import './index.scss';
import './vendor/vendor';

import { parse, ParsedItem } from './parser/parse';

const defaultVal =
  'The.Hobbit.The.Battle.of.the.Five.Armies.2014.EXTENDED.1080p.BluRay.x264.DTS-HD.MA.7.1-RARBG[16.92GB]';

function render(result: ParsedItem[]) {
  return result
    .map((item, index) => {
      if (!item.match) {
        return `
      <div class="wrap color-${index % 3}">
        <div class="top">
          ${item.text === '.' ? '' : item.text}
        </div>
        <div class="bottom">
          ${item.text === '.' ? '' : item.text}
        </div>
      </div>
      `;
      }

      const { text, detail, name } = item;

      return `
      <div class="wrap match color-${index % 3}">
        <div class="top">
          ${text}
        </div>
        <div class="bottom" ${
          detail ? 'data-toggle="tooltip"' : ''
        } title="${detail}" data-detail="${detail}">
          ${name}
        </div>
      </div>
      `;
    })
    .join('');
}

function run() {
  const val = `${$('#input').val()}` || defaultVal;
  const infoList = val.split(/[\r\n]/).map((line) => {
    return line.trim();
  });

  $('#output').html(
    infoList
      .map((info) => {
        const result = parse(info);
        console.info(result);
        const item = render(result);
        return `<div class="row">
        <div class="col-xs-12">${info}</div>
        <div class="line col-xs-12">${item}</div>
        </div>`;
      })
      .join('<br>')
  );

  $('[data-toggle="tooltip"]').tooltip();
}

$(document).ready(() => {
  $('#input').attr('placeholder', defaultVal);
  $('#input').val(decodeURIComponent(window.location.search.replace(/^\?/, '')));

  run();

  $('#input').change(run);
  $('#input').blur(run);
  $('#input').focus(run);
});

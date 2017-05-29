export const pttParser = html => {
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);
  const PTT_HOST = 'https://www.ptt.cc';
  const previousPage = PTT_HOST + $('.btn-group-paging .btn').eq(1).attr('href');

  const posts = $('.r-ent')
    .map(function(i) {
      const anchor = $(this).find('.title a');
      const title = anchor.text().trim();
      const link = PTT_HOST + anchor.attr('href');

      return {
        author: $(this).find('.author').text().trim(),
        date: $(this).find('.date').text().trim(),
        key: link,
        link,
        platform: (title.match(/^\[(\S*)\s*\]/) || [])[1],
        title,
      };
    })
    .get();

  return {
    posts,
    previousPage,
  };
};

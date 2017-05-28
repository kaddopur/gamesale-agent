const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'gamesale.index.html'), 'utf8', function(err, data) {
  // console.log(data);
  const cheerio = require('cheerio');
  const $ = cheerio.load(data);

  // const posts = $('.r-ent').map(i => {
  //   return $(this).find('.title').eq(0).html();
  // });

  const posts = $('.r-ent')
    .map(function(i) {
      const anchor = $(this).find('.title a');
      const title = anchor.text().trim();
      const link = anchor.attr('href');

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

  console.log(posts);
});

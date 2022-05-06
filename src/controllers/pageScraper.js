const scraperObject = {
  url: 'https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html',
  async scraper(browser) {
    let page = await browser.newPage();
    await page.goto(this.url);
    await page.waitForSelector('table');
    const tableHead = await page.$$eval('thead > tr > th', (names) => {
      return names.map((name) => name.innerText);
    });
    const tableBody = await page.$$eval('tbody > tr', (items) => {
      return Array.from(items, (item) => {
        const columns = item.querySelectorAll('td');
        return Array.from(columns, (column) => column.innerText);
      });
    });
    const data = tableBody.map((tableElement) => {
      const result = {};
      for (const [index, element] of tableElement.entries()) {
        result[tableHead[index]] = element;
      }
      return result;
    });
    return data;
  },
};

module.exports = scraperObject;

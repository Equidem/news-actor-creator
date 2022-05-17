import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://finance.yahoo.com\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":4,\"hasDate\":false,\"linkIncludes\":[\".html\"]},\"proxyConfiguration\":{\"useApifyProxy\":true,\"apifyProxyGroups\":[\"BUYPROXIES94952\"]},\"useBrowser\":false,\"extendOutputFunction\":\"($) => {\\n    const result = {\\n        text: $('.caas-body').text().trim(),\\n        date: new Date($('time[datetime]').first().attr('datetime')).toISOString(),\\n        author: $('.caas-author-byline').first().text().trim(),\\n    };\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"pageWaitSelector\":\"[data-test=\\"secnav-list-itm\\"],[data-test-locator=\\"headline\\"]\",\"linkSelector\":\"a\",\"minWords\":10,\"pseudoUrls\":[{\"url\":\"https://finance.yahoo.com/topic/[.+]\"}]}".replace(/\\"/g,"\"")),
    });
});
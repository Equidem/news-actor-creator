import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.blesk.cz/\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"linkIncludes\":[\"clanek\",\".html\"]},\"proxyConfiguration\":{\"useApifyProxy\":true},\"useBrowser\":false,\"extendOutputFunction\":\"($) => {\\n    const result = {};\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"maxArticlesPerCrawl\":1000,\"minWords\":0}".replace(/\\"/g,"\"")),
    });
});

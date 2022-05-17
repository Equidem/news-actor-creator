import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        ...JSON.parse("{\"startUrls\":[{\"url\":\"http://people.com\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":true,\"isUrlArticleDefinition\":{\"minDashes\":4,\"hasDate\":true,\"linkIncludes\":[\"article\",\"storyid\",\"?p=\",\"id=\",\"/fpss/track\",\".html\",\"/content/\"]},\"proxyConfiguration\":{\"useApifyProxy\":true},\"useBrowser\":false,\"extendOutputFunction\":\"($) => {\\n    const result = {};\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"maxArticlesPerCrawl\":1000}".replace(/\\"/g,"\"")),
    });
});
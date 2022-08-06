import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.t-online.de/\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":false,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":4,\"hasDate\":true,\"linkIncludes\":[\"article\",\"storyid\",\"?p=\",\"id=\",\"/fpss/track\",\".html\",\"/content/\"]},\"proxyConfiguration\":{\"useApifyProxy\":true},\"useBrowser\":false,\"extendOutputFunction\":\"($) => {\\n    const result = {};\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\"}".replace(/\\"/g,"\"")),
    });
});

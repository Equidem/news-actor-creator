import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.msn.com/en-us\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":5,\"linkIncludes\":[\"?li=\",\"?cvid=\"]},\"proxyConfiguration\":{\"useApifyProxy\":true,\"apifyProxyGroups\":[\"BUYPROXIES94952\"]},\"useBrowser\":true,\"extendOutputFunction\":\"($) => {\\n    const result = {\\n        text: $('[data-t*=\\"ArticleBody\\"] p,[class*=\\"slideMetadata_content\\"] p').text().trim(),\\n    };\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"minWords\":20,\"pageWaitSelector\":\"[data-t*=\\"ArticleBody\\"],[class*=\\"slideMetadata_content\\"],[href*=\\"?li=\\"],[href*=\\"?cvid=\\"]\",\"pseudoUrls\":[{\"url\":\"https://www.msn.com/en-us/[.*]\"}],\"linkSelector\":\".stripenav a\",\"maxArticlesPerCrawl\":1}".replace(/\\"/g,"\"")),
    });
});
import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.msn.com/en-us\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":5,\"linkIncludes\":[\"?li=\",\"?cvid=\"]},\"proxyConfiguration\":{\"useApifyProxy\":true,\"apifyProxyGroups\":[\"BUYPROXIES94952\"]},\"useBrowser\":true,\"extendOutputFunction\":\"($) => {\\n    const result = {\\n        text: $('[data-t*=&ESCAPED_QUOTES&ArticleBody&ESCAPED_QUOTES&] p,[class*=&ESCAPED_QUOTES&slideMetadata_content&ESCAPED_QUOTES&] p').text().trim(),\\n    };\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"minWords\":20,\"pageWaitSelector\":\"[data-t*=&ESCAPED_QUOTES&ArticleBody&ESCAPED_QUOTES&],[class*=&ESCAPED_QUOTES&slideMetadata_content&ESCAPED_QUOTES&],[href*=&ESCAPED_QUOTES&?li=&ESCAPED_QUOTES&],[href*=&ESCAPED_QUOTES&?cvid=&ESCAPED_QUOTES&]\",\"pseudoUrls\":[{\"url\":\"https://www.msn.com/en-us/[.*]\"}],\"linkSelector\":\".stripenav a\",\"maxArticlesPerCrawl\":1}".replace(/\\"/g,"\"").replace(/&ESCAPED_QUOTES&/g,"\"")),
        ...input,
    });
});
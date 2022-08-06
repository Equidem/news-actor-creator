import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.msn.com/en-us\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":5,\"linkIncludes\":[\"?li=\",\"?cvid=\"]},\"proxyConfiguration\":{\"useApifyProxy\":true,\"apifyProxyGroups\":[\"BUYPROXIES94952\"]},\"useBrowser\":true,\"extendOutputFunction\":\"($) => {\\n    const result = {\\n        text: $('[data-t*=\\nArticleBody\\n] p,[class*=\\nslideMetadata_content\\n] p').text().trim(),\\n    };\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"minWords\":20,\"pageWaitSelector\":\"[data-t*=\\nArticleBody\\n],[class*=\\nslideMetadata_content\\n],[href*=\\n?li=\\n],[href*=\\n?cvid=\\n]\",\"pseudoUrls\":[{\"url\":\"https://www.msn.com/en-us/[.*]\"}],\"linkSelector\":\".stripenav a\",\"maxArticlesPerCrawl\":1}".replace(/\\"/g,"\"")),
        ...input,
    });
});
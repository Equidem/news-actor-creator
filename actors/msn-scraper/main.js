import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...JSON.parse("{\"startUrls\":[{\"url\":\"https://www.msn.com/en-us\"}],\"onlyNewArticles\":false,\"onlyNewArticlesPerDomain\":false,\"onlyInsideArticles\":true,\"enqueueFromArticles\":true,\"scanSitemaps\":false,\"useGoogleBotHeaders\":false,\"mustHaveDate\":false,\"isUrlArticleDefinition\":{\"minDashes\":5,\"linkIncludes\":[\"?li=\",\"?cvid=\"]},\"proxyConfiguration\":{\"useApifyProxy\":true,\"apifyProxyGroups\":[\"BUYPROXIES94952\"]},\"useBrowser\":true,\"extendOutputFunction\":\"($) => {\\n    const result = {\\n        text: $('[data-t*=__ESCAPED_QUOTES__ArticleBody__ESCAPED_QUOTES__] p,[class*=__ESCAPED_QUOTES__slideMetadata_content__ESCAPED_QUOTES__] p').text().trim(),\\n    };\\n    // Uncomment to add a title to the output\\n    // result.pageTitle = $('title').text().trim();\\n\\n    return result;\\n}\",\"minWords\":20,\"pageWaitSelector\":\"[data-t*=__ESCAPED_QUOTES__ArticleBody__ESCAPED_QUOTES__],[class*=__ESCAPED_QUOTES__slideMetadata_content__ESCAPED_QUOTES__],[href*=__ESCAPED_QUOTES__?li=__ESCAPED_QUOTES__],[href*=__ESCAPED_QUOTES__?cvid=__ESCAPED_QUOTES__]\",\"pseudoUrls\":[{\"url\":\"https://www.msn.com/en-us/[.*]\"}],\"linkSelector\":\".stripenav a\",\"maxArticlesPerCrawl\":1}".replace(/\\"/g,"\"").replace(/__ESCAPED_QUOTES__/g,"\"")),
        ...input,
    });
});
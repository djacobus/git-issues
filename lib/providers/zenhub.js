var util = require("util");

function getIssuePipeline(repoId, issueNum) {

    var urlFormat = "https://api.zenhub.io/p1/repositories/%s/issues/%s";

    return util.format(urlFormat, repoId, issueNum);
}

function getIssueEvents(repoId, issueNum) {

    var urlFormat = "https://api.zenhub.io/p1/repositories/%s/issues/%s/events";

    return util.format(urlFormat, repoId, issueNum);
}

function getBoardData(repoId) {

    var urlFormat = "https://api.zenhub.io/p1/repositories/%s/board";

    return util.format(urlFormat, repoId);
}

exports.getIssuePipeline = getIssuePipeline;
exports.getIssueEvents = getIssueEvents;
exports.getBoardData = getBoardData;
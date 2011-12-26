templates_doT = doT.template(
    '<div class="votesww"><div class="votesw">' +
        '{{if(it.votes_count > 0) {}}' +
        '<div class="votescount">{{=it.votes_count}}</div>' +
        '{{}}}' +
        '<div class="votebox">' +
        '<div class="pupvote upvote {{if (it.voted) {}} upvoted {{}}}"></div>' +
        '</div>' +
        '</div></div>' +

        '{{if(it.isHost) {}}' +
        '<ul class="tools">' +
        '<li class="check" original-title="Answer this now."></li>' +
        '<li class="remove"></li>' +
        '</ul>' +
        '{{}}}' +

        '<div class="pcontent">{{=it.content}}</div>' +

        '<div class="userw">' +
        '{{if(it.ulink) {}} <a href="{{=it.ulink}}" target="_blank"> {{}}}' +
        '<div class="puname"> {{=it.uname}} </div>' +
        '{{if(it.uimage) {}} <img class="puimage" src="{{=it.uimage}}"/> {{}}}' +
        '{{if(it.ulink) {}} </a> {{}}}' +
        '</div>'
);

function AddLabelValuePair(){var f=document.getElementById("LabelValuePairCount");var a=document.getElementById("CustomInfo");if(f&&a){f.value++;var e=document.createElement("li");var d=document.createElement("input");d.type="text";d.name="Label"+f.value;d.maxLength="20";d.className="LVLabelInput";var b=document.createElement("li");var c=document.createElement("input");c.type="text";c.name="Value"+f.value;c.maxLength="200";c.className="LVValueInput";e.appendChild(d);b.appendChild(c);a.appendChild(e);a.appendChild(b)}}function DiscussionSwitch(a,h,g,f,i,b){var d=document.getElementById(i);if(d){d.className="Progress"}var e="Type="+h+"&DiscussionID="+g+"&Switch="+f+"&PostBackKey="+b;var c=new DataManager();c.RequestCompleteEvent=RefreshPageWhenAjaxComplete;c.RequestFailedEvent=HandleFailure;c.LoadData(a+"?"+e)}function HideComment(c,a,j,b,e,d,k,f){var i=(a==1?d:e);if(confirm(i)){var h=document.getElementById(k);if(h){h.innerHTML="&nbsp;";h.className="HideProgress"}var g=new DataManager();g.RequestCompleteEvent=RefreshPageWhenAjaxComplete;g.RequestFailedEvent=HandleFailure;g.LoadData(c+"?Type=Comment&Switch="+a+"&DiscussionID="+j+"&CommentID="+b+"&PostBackKey="+f)}}function SetBookmark(c,j,g,b,h,e){var i=document.getElementById("SetBookmark");if(i){i.className="Progress";var a=i.name==""?j:i.name;var d=a==1?0:1;i.name=d;var f=new DataManager();f.Param=(d==0?b:h);f.RequestCompleteEvent=BookmarkComplete;f.RequestFailedEvent=BookmarkFailed;f.LoadData(c+"?Type=Bookmark&Switch="+d+"&DiscussionID="+g+"&PostBackKey="+e)}}function ApplyBookmark(b,c,d){var a=document.getElementById(b);if(a){a.className=c;a.innerHTML=d}}function BookmarkComplete(a){setTimeout("ApplyBookmark('SetBookmark', 'Complete', '"+this.Param+"');",400)}function BookmarkFailed(b){var a=document.getElementById("SetBookmark");if(a){a.className="Complete";alert("Failed: ("+b.status+") "+b.statusText)}}function ShowAdvancedSearch(){var d=document.getElementById("SearchSimpleFields");var a=document.getElementById("SearchDiscussionFields");var c=document.getElementById("SearchCommentFields");var b=document.getElementById("SearchUserFields");if(d&&a&&c&&b){d.style.display="none";a.style.display="block";c.style.display="block";b.style.display="block"}}function ShowSimpleSearch(){var d=document.getElementById("SearchSimpleFields");var a=document.getElementById("SearchDiscussionFields");var c=document.getElementById("SearchCommentFields");var b=document.getElementById("SearchUserFields");if(d&&a&&c&&b){d.style.display="block";a.style.display="none";c.style.display="none";b.style.display="none"}}function ToggleCategoryBlock(g,c,f,h,e){var d=document.getElementById(h);if(d){d.innerHTML="&nbsp;";d.className="HideProgress"}var b="BlockCategoryID="+c+"&Block="+f+"&PostBackKey="+e;var a=new DataManager();a.RequestCompleteEvent=RefreshPageWhenAjaxComplete;a.RequestFailedEvent=HandleFailure;a.LoadData(g+"?"+b)}function ToggleCommentBox(e,h,c,d){SwitchElementClass("CommentBox","CommentBoxController","SmallCommentBox","LargeCommentBox",c,h);var f=0;var g=document.getElementById("CommentBox");if(g){if(g.className=="LargeCommentBox"){f=1}var b="Type=ShowLargeCommentBox&Switch="+f+"&PostBackKey="+d;var a=new DataManager();a.RequestCompleteEvent=ToggleCommentBoxComplete;a.RequestFailedEvent=HandleFailure;a.LoadData(e+"?"+b)}}function ToggleCommentBoxComplete(a){}function WhisperBack(d,a,b){var c=document.getElementById("frmPostComment");if(!c){document.location=b+"post.php?PostBackAction=Reply&DiscussionID="+d+"&WhisperUsername="+escape(a)}else{c.WhisperUsername.value=a;c.Body.focus()}};
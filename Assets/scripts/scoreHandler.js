 // Edit this value and make sure it's the same as the one stored on the server
var addScoreUrl="http://www.tehgamingcrew.com/bloodgame/highscores/addscore.php?"; //be sure to add a ? to your url
var highscoreUrl="http://www.tehgamingcrew.com/bloodgame/highscores/display.php";    
private var SecretKey;
function Start() {
	SecretKey = secretkey.key;
}
 
function postScore() {
    //This connects to a server side php script that will add the name and score to a MySQL DB.
    // Supply it with a string representing the players name and the players score.
    var name = "Jasper9041";
    var score = 10;
    var hash=MD5.Md5Sum(name + score + SecretKey);
 
    var highscore_url = addScoreUrl + "name=" + WWW.EscapeURL(name) + "&score=" + score + "&hash=" + hash;
 
    // Post the URL to the site and create a download object to get the result.
    hs_post = WWW(highscore_url);
    yield hs_post; // Wait until the download is done
    Debug.Log(highscore_url);
    if(hs_post.error) {
        Debug.Log("There was an error posting the high score: " + hs_post.error);
    }
}
 
// Get the scores from the MySQL DB to display in a GUIText.
function getScores() {
    gameObject.guiText.text = "Loading Scores";
    hs_get = WWW(highscoreUrl);
    yield hs_get;
 
    if(hs_get.error) {
    	Debug.Log("There was an error getting the high score: " + hs_get.error);
    } else {
        gameObject.guiText.text = hs_get.text; // this is a GUIText that will display the scores in game.

    }
}
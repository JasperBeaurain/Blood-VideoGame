#pragma strict


var spawnDelay = 10;
var enemyPrefab:Transform;
function Start () {
	while (true) {
        yield WaitForSeconds(spawnDelay);
        Instantiate( enemyPrefab, transform.position, enemyPrefab.rotation);
    }
}

function Update () {

}
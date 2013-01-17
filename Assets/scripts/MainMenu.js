#pragma strict
enum MenuItems{Play,Highscores,Options,Quit}
var menuItem:MenuItems;

function OnMouseEnter() {
	renderer.material.color = Color.red;
}
function OnMouseExit() {
	renderer.material.color = Color.white;
}
function OnMouseUp() {
	renderer.material.color = Color.red;
	switch(menuItem){
		case MenuItems.Play:
			Application.LoadLevel(1);
			break;
		case MenuItems.Highscores:
			
			break;
		case MenuItems.Options:
			
			break;
		case MenuItems.Quit:
			Application.Quit();
			break;
	}
	yield WaitForSeconds(0.1);
	renderer.material.color = Color.white;
}
function Update(){
	var hit:RaycastHit = new RaycastHit();
	for (var touch:Touch in Input.touches){
		if (touch.phase == TouchPhase.Began){
			var ray = Camera.main.ScreenPointToRay (touch.position);
			if(Physics.Raycast(ray, hit)){
				hit.transform.gameObject.SendMessage("OnMouseUp");
			}
		}
	}

}
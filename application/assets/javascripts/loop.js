function loop(){
  // Rotate the propeller, the sea and the sky
  //airplane.propeller.rotation.x += 0.3;
  //sky.mesh.rotation.z += .05;

  // update the plane on each frame
  //updatePlane();

  //airplane.pilot.updateHairs();
  //
  //sea.moveWaves();

  sea.mesh.rotation.z-= 0.005;

  // render the scene
  renderer.render(scene, camera);

  // call the loop function again
  requestAnimationFrame(loop);
}

function updatePlane(){

  // let's move the airplane between -100 and 100 on the horizontal axis,
  // and between 25 and 175 on the vertical axis,
  // depending on the mouse position which ranges between -1 and 1 on both axes;
  // to achieve that we use a normalize function (see below)

  var targetX = normalize(mousePos.x, -1, 1, -20, 20);
  var targetY = normalize(mousePos.y, -1, 1, 80, 120);

  // update the airplane's position
  //airplane.mesh.position.y = targetY;
  airplane.mesh.position.y += (targetY-airplane.mesh.position.y)*0.1;

  airplane.mesh.position.x = targetX;

  airplane.mesh.rotation.z = (targetY-airplane.mesh.position.y)*0.0128;
  airplane.mesh.rotation.x = (airplane.mesh.position.y-targetY)*0.064;

  airplane.propeller.rotation.x += 0.3;
}

function normalize(v,vmin,vmax,tmin, tmax){

  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;

}
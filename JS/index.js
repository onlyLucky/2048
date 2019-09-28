//移动响应
let deviceWidth=window.screen.availWidth//当前设备的宽度
let boxWidth=0.92*deviceWidth;
let cellWidth=0.18*deviceWidth;
let cellSpace=0.04*deviceWidth;
if(deviceWidth>600){
	cellWidth=100;
	cellSpace=20
}

Game2048({
	prefix:'game',
	len:4,
	size:cellWidth,
	margin:cellSpace
})
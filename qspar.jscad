
// Quickie spars for filament spool adapter

// TODO: parameterize!!
var r = 85/2;
var i = 8/2;
var h = 4;
var s = 3;
var r2 = (50-s)/2;
var fn = 100;

var sw = 5*s;
var sl = 90;
var sh = 0.5*h;
var pw = 50+2*h+0.15*sl;

function main() {
    let spar = cube({size: [sw,sl,sh]});
    let peg1 = cube({size: [1.25*sw,0.05*sl,sh]}).translate([-0.125*sw,0,0]);
    let peg2 = cube({size: [1.25*sw,0.05*sl,sh]}).translate([-0.125*sw,pw,0]);
    let cut1 = cube({size: [0.6*sw,0.4*sl,sh]}).translate([0.2*sw,0,0]);
    let cut2 = cube({size: [0.6*sw,0.4*sl,sh]}).translate([0.2*sw,0.6*sl,0]);
    
    spar = union(spar, peg1, peg2);
    
    return difference(spar, cut1, cut2);
}

function spars() {
    let spar = cube({size: [5*s,s,h]}).translate([-5*s/2,-s/2,0]);
    
    spar1 = spar.translate([0,r2,0]);
    spar2 = spar.translate([0,-1*r2,0]);
    spar12 = union(spar1, spar2);
    spar34 = spar12.rotateZ(90);
    
    return union(spar12, spar34);
}
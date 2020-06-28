
// Quickie filament spool adapter

// TODO: parameterize!!
var r = 85/2;
var i = 8/2;
var h = 4;
var s = 3;
var r2 = (50-s)/2;
var fn = 100;

function main() {
    let base = cylinder({r: r, h: h, fn: fn});
    let roller = cylinder({r: i*2, h: h*4, fn: fn});
    let hole = cylinder({r: i, h: h*4, fn: fn});
    
    let adapter = union(base, roller);
    
    return difference(adapter, hole, spars());
}

function spars() {
    let spar = cube({size: [5*s,s,h]}).translate([-5*s/2,-s/2,0]);
    
    spar1 = spar.translate([0,r2,0]);
    spar2 = spar.translate([0,-1*r2,0]);
    spar12 = union(spar1, spar2);
    spar34 = spar12.rotateZ(90);
    
    return union(spar12, spar34);
}
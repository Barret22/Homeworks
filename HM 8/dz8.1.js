

function Ladder() {
    this.step = 0;
}
Ladder.prototype.up = function() {
    this.step++;
    return this;
};
Ladder.prototype.down = function() {
    this.step--;
    return this;
};
Ladder.prototype.showStep = function() {
    console.log(this.step);
    return this;
};
const ladder = new Ladder();
ladder.up().up().down().showStep();

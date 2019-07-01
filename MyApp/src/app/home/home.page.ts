import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tmm = false;
  tmr = false;
  tma = false;
  tmb = false;
  tmc = false;
  tmd = false;
  tme = false;
  tmf = false;
  tmg = false;
  tmh = false;
  tmi = false;
  tmj = false;
  tmk = false;
  tml = false;
  tmo = false;
  tmy = false;
  change() {
    this.tmr=!this.tmr
  }
  change1(){
    this.tmm=!this.tmm
  }
  change2(){
    this.tma=!this.tma
  }
  change3(){
    this.tmb=!this.tmb
  }
  change4(){
    this.tmc=!this.tmc
  }
  change5(){
    this.tmd=!this.tmd
  }
  change6(){
    this.tme=!this.tme
  }
  change7(){
    this.tmf=!this.tmf
  }
  change8(){
    this.tmg=!this.tmg
  }
  change9(){
    this.tmh=!this.tmh
  }
  change10(){
    this.tmi=!this.tmi
  }
  change11(){
    this.tmj=!this.tmj
  }
  change12(){
    this.tmk=!this.tmk
  }
  change13(){
    this.tml=!this.tml
  }
  change14(){
    this.tmo=!this.tmo
  }
  change15(){
    this.tmy=!this.tmy
  }
  deleteAll(){
    this.tmr= false;
    this.tmm=false
    this.tma=false
    this.tmb=false
    this.tmc=false
    this.tmd=false
    this.tme=false
    this.tmf=false
    this.tmg=false
    this.tmh=false
    this.tmi=false
    this.tmj=false
    this.tmk=false
    this.tml=false
    this.tmo=false
    this.tmy=false
  }

  ngOnInit(){
  setInterval(() => {
    var synth = new Tone.Synth().toMaster()
    if(this.tmr)synth.triggerAttackRelease('A3', '4n');
  }, 500);

  setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmm)synth.triggerAttackRelease('B2', '5n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tma)synth.triggerAttackRelease('C4', '6n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmb)synth.triggerAttackRelease('D3', '2n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmc)synth.triggerAttackRelease('E2', '4n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmd)synth.triggerAttackRelease('F4', '8n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tme)synth.triggerAttackRelease('C1', '5n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmf)synth.triggerAttackRelease('B5', '5n');
}, 500);

setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmg)synth.triggerAttackRelease('A3', '8n');
}, 500);
setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmh)synth.triggerAttackRelease('B2', '2n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmi)synth.triggerAttackRelease('A5', '1n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmj)synth.triggerAttackRelease('C3', '3n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmk)synth.triggerAttackRelease('D2', '5n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tml)synth.triggerAttackRelease('B3', '2n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmo)synth.triggerAttackRelease('A1', '3n');
}, 500);setInterval(() => {
  var synth = new Tone.Synth().toMaster()
  if(this.tmy)synth.triggerAttackRelease('A3', '8n');
}, 500);
// setInterval(() => {
//   var synth = new Tone.Synth().toMaster()
//   if(this.tmg)synth.triggerAttackRelease('B5', '5n');
// }, 500);

}

}






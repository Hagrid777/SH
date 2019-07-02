import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sounds = {
    sound1:new Tone.Player("beats/beat1.mp3").toMaster(),
    sound2:new Tone.Player("beats/beat2.mp3").toMaster(),
    sound3:new Tone.Player("beats/beat3.mp3").toMaster(),
    sound4:new Tone.Player("beats/beat4.mp3").toMaster(),
    sound5:new Tone.Player("beats/guitare1.mp3").toMaster(),
    sound6:new Tone.Player("beats/guitare2.mp3").toMaster(),
    sound7:new Tone.Player("beats/guitare3.mp3").toMaster(),
    sound8:new Tone.Player("beats/guitare4.mp3").toMaster(),
  }

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
    this.tmr=!this.tmr;
    if(this.tmr)Tone.context.resume().then(() => {this.sounds.sound1.start()});
    this.tmm = false;
    this.tma = false;
    this.tmb = false;
  }
  change1() {
    this.tmm = !this.tmm;
    if(this.tmm)Tone.context.resume().then(() => {this.sounds.sound2.start()});
    this.tmr = false;
    this.tma = false;
    this.tmb = false;
  }
  change2() {
    this.tma = !this.tma;
    if(this.tma)Tone.context.resume().then(() => {this.sounds.sound3.start()});
    this.tmr = false;
    this.tmm = false;
    this.tmb = false;
  }
  change3() {
    this.tmb = !this.tmb;
    if(this.tmb)Tone.context.resume().then(() => {this.sounds.sound4.start()});
    this.tmr = false;
    this.tma = false;
    this.tmm = false;
  }
  change4() {
    this.tmc = !this.tmc
    if(this.tmc)Tone.context.resume().then(() => {this.sounds.sound5.start()})
    this.tme = false;
    this.tmd = false;
    this.tmf = false;
  }
  change5() {
    this.tmd = !this.tmd
    if(this.tmd)Tone.context.resume().then(() => {this.sounds.sound6.start()})
    this.tme = false;
    this.tmc = false;
    this.tmf = false;
  }
  change6() {
    this.tme = !this.tme
    if(this.tme)Tone.context.resume().then(() => {this.sounds.sound7.start()})
    this.tmc = false;
    this.tmd = false;
    this.tmf = false;
  }
  change7() {
    this.tmf = !this.tmf
    if(this.tmf)Tone.context.resume().then(() => {this.sounds.sound8.start()})
    this.tme = false;
    this.tmd = false;
    this.tmc = false;
  }
  change8() {
    this.tmg = !this.tmg
  }
  change9() {
    this.tmh = !this.tmh
  }
  change10() {
    this.tmi = !this.tmi
  }
  change11() {
    this.tmj = !this.tmj
  }
  change12() {
    this.tmk = !this.tmk
  }
  change13() {
    this.tml = !this.tml
  }
  change14() {
    this.tmo = !this.tmo
  }
  change15() {
    this.tmy = !this.tmy
  }
  deleteAll() {
    this.tmr = false;
    this.tmm = false
    this.tma = false
    this.tmb = false
    this.tmc = false
    this.tmd = false
    this.tme = false
    this.tmf = false
    this.tmg = false
    this.tmh = false
    this.tmi = false
    this.tmj = false
    this.tmk = false
    this.tml = false
    this.tmo = false
    this.tmy = false
  }

  ngOnInit() {
    setInterval(() => {
      if(this.tmr)Tone.context.resume().then(() => {this.sounds.sound1.start()});
    }, 16000);

    setInterval(() => {
      if(!this.tmr)Tone.context.resume().then(()=>{this.sounds.sound1.stop()})
    }, 500);
    setInterval(() => {
      if(this.tmm)Tone.context.resume().then(() => {this.sounds.sound2.start()});
    }, 16000);

    setInterval(() => {
      if(!this.tmm)Tone.context.resume().then(()=>{this.sounds.sound2.stop()})
    }, 500);
    setInterval(() => {
      if(this.tma)Tone.context.resume().then(() => {this.sounds.sound3.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tma)Tone.context.resume().then(() => {this.sounds.sound3.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmb)Tone.context.resume().then(() => {this.sounds.sound4.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmb)Tone.context.resume().then(() => {this.sounds.sound4.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmc)Tone.context.resume().then(() => {this.sounds.sound5.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmc)Tone.context.resume().then(() => {this.sounds.sound5.stop()});
    }, 500);    
    setInterval(() => {
      if(this.tmd)Tone.context.resume().then(() => {this.sounds.sound6.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmd)Tone.context.resume().then(() => {this.sounds.sound6.stop()});
    }, 500);
    setInterval(() => {
      if(this.tme)Tone.context.resume().then(() => {this.sounds.sound7.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tme)Tone.context.resume().then(() => {this.sounds.sound7.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmf)Tone.context.resume().then(() => {this.sounds.sound8.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmf)Tone.context.resume().then(() => {this.sounds.sound8.stop()});
    }, 500);
    // setInterval(() => {
    //   var synth = new Tone.Player().toMaster()
    //   if(this.tmg)synth.triggerAttackRelease('B5', '5n');
    // }, 500);

  }

}






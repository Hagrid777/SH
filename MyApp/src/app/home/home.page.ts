import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
ritmic = false;
ritmcount:number = 0;
  sounds = {
    sound1:new Tone.Player("beats/beat1.mp3").toMaster(),
    sound2:new Tone.Player("beats/beat2.mp3").toMaster(),
    sound3:new Tone.Player("beats/beat3.mp3").toMaster(),
    sound4:new Tone.Player("beats/beat4.mp3").toMaster(),
    sound5:new Tone.Player("beats/guitare1.mp3").toMaster(),
    sound6:new Tone.Player("beats/guitare2.mp3").toMaster(),
    sound7:new Tone.Player("beats/guitare3.mp3").toMaster(),
    sound8:new Tone.Player("beats/guitare4.mp3").toMaster(),
    sound9:new Tone.Player("beats/leadguitare1.mp3").toMaster(),
    sound10:new Tone.Player("beats/leadguitare2.mp3").toMaster(),
    sound11:new Tone.Player("beats/leadguitare3.mp3").toMaster(),
    sound12:new Tone.Player("beats/leadguitare4.mp3").toMaster(),
    sound13:new Tone.Player("beats/rGuitare1.mp3").toMaster(),
    sound14:new Tone.Player("beats/rGuitare2.mp3").toMaster(),
    sound15:new Tone.Player("beats/rGuitare3.mp3").toMaster(),
    sound16:new Tone.Player("beats/rGuitare4.mp3").toMaster(),
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
    this.ritmic = true;
    if(this.tmr){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound1.start()});
          this.tmm = false;
          this.tma = false;
          this.tmb = false;
          clearInterval(interv);
      }
      })
    }
    
  }
  change1() {
    this.tmm = !this.tmm;
    this.ritmic = true;
    if(this.tmm){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound2.start()});
          this.tmr = false;
          this.tma = false;
          this.tmb = false;
          clearInterval(interv);
      }
      })
    }

   

  }
  change2() {
    this.tma = !this.tma;
    this.ritmic = true;
    if(this.tma){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound3.start()});
          this.tmr = false;
          this.tmm = false;
          this.tmb = false;
          clearInterval(interv);
      }
      })
    }

  
  }
  change3() {
    this.ritmic = true;
    this.tmb = !this.tmb;


    if(this.tmb){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound4.start()});
          this.tmr = false;
          this.tma = false;
          this.tmm = false;
          clearInterval(interv);
      }
      })
    }
  }
  change4() {
    this.ritmic = true;
    this.tmc = !this.tmc

    if(this.tmc){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound5.start()});
          this.tme = false;
          this.tmd = false;
          this.tmf = false;
          clearInterval(interv);
      }
      })
    }

  }

  change5() {
    this.ritmic = true;
    this.tmd = !this.tmd

    if(this.tmd){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound6.start()});
          this.tme = false;
          this.tmc = false;
          this.tmf = false;
          clearInterval(interv);
      }
      })
    }

  }
  change6() {
    this.ritmic = true;
    this.tme = !this.tme
    if(this.tme){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound7.start()});
          this.tmc = false;
          this.tmd = false;
          this.tmf = false;
          clearInterval(interv);
      }
      })
    }

  }
  change7() {
    this.ritmic = true;
    this.tmf = !this.tmf
    if(this.tmf){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound8.start()});
          this.tmc = false;
          this.tmd = false;
          this.tme = false;
          clearInterval(interv);
      }
      })
    }
  }
  
  change8() {
    this.ritmic = true;
    this.tmg = !this.tmg
    if(this.tmg){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound9.start()});
          this.tmh = false;
          this.tmi = false;
          this.tmj = false;
          clearInterval(interv);
      }
      })
    }
  }
  
  change9() {
    this.ritmic = true;
    this.tmh = !this.tmh
    if(this.tmh){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound10.start()});
          this.tmg = false;
          this.tmi = false;
          this.tmj = false;
          clearInterval(interv);
      }
      })
    }

  }
  change10() {
    this.ritmic = true;
    this.tmi = !this.tmi
    if(this.tmi){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound11.start()});
          this.tmh = false;
          this.tmg = false;
          this.tmj = false;
          clearInterval(interv);
      }
      })
    }

  }
  change11() {
    this.ritmic = true;
    this.tmj = !this.tmj
    if(this.tmj){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound12.start()});
          this.tmh = false;
          this.tmi = false;
          this.tmg = false;
          clearInterval(interv);
      }
      })
    }

  }
  change12() {
    this.ritmic = true;
    this.tmk = !this.tmk
    if(this.tmk){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound13.start()});
          this.tmo = false;
          this.tmy = false;
          this.tml = false;
          clearInterval(interv);
      }
      })
    }

  }
  change13() {
    this.ritmic = true;
    this.tml = !this.tml
    if(this.tml){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound14.start()});
          this.tmo = false;
          this.tmy = false;
          this.tmk = false;
          clearInterval(interv);
      }
      })
    }

  }
  change14() {
    this.ritmic = true;
    this.tmo = !this.tmo
    if(this.tmo){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound15.start()});
          this.tmk = false;
          this.tmy = false;
          this.tml = false;
          clearInterval(interv);
      }
      })
    }

  }
  change15() {
    this.ritmic = true;
    this.tmy = !this.tmy
    if(this.tmy){
      var interv = setInterval(()=>{
        if(this.ritmcount == 2){
          Tone.context.resume().then(() => {this.sounds.sound16.start()});
          this.tmo = false;
          this.tmk = false;
          this.tml = false;
          clearInterval(interv);
      }
      })
    }

  }
  deleteAll() {
    this.ritmic = false;
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
    setInterval(() => {
      if(this.tmg)Tone.context.resume().then(() => {this.sounds.sound9.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmg)Tone.context.resume().then(() => {this.sounds.sound9.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmh)Tone.context.resume().then(() => {this.sounds.sound10.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmh)Tone.context.resume().then(() => {this.sounds.sound10.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmi)Tone.context.resume().then(() => {this.sounds.sound11.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmi)Tone.context.resume().then(() => {this.sounds.sound11.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmj)Tone.context.resume().then(() => {this.sounds.sound12.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmj)Tone.context.resume().then(() => {this.sounds.sound12.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmk)Tone.context.resume().then(() => {this.sounds.sound13.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmk)Tone.context.resume().then(() => {this.sounds.sound13.stop()});
    }, 500);
    setInterval(() => {
      if(this.tml)Tone.context.resume().then(() => {this.sounds.sound14.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tml)Tone.context.resume().then(() => {this.sounds.sound14.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmo)Tone.context.resume().then(() => {this.sounds.sound15.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmo)Tone.context.resume().then(() => {this.sounds.sound15.stop()});
    }, 500);
    setInterval(() => {
      if(this.tmy)Tone.context.resume().then(() => {this.sounds.sound16.start()});
    }, 16000);
    setInterval(() => {
      if(!this.tmy)Tone.context.resume().then(() => {this.sounds.sound16.stop()});
    }, 500);
    // setInterval(() => {
    //   var synth = new Tone.Player().toMaster()
    //   if(this.tmg)synth.triggerAttackRelease('B5', '5n');
    // }, 500);
    setInterval(()=>{
      if(this.ritmic){
        if(this.ritmcount == 4){
          this.ritmcount = 0;
        }
        else{
        this.ritmcount++;
        console.log(this.ritmcount)
      }
      }
      else{
        this.ritmcount = 0;
      }
    },1000);
  }
  
  

}






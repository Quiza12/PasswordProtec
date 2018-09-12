import { Injectable } from '@angular/core';

@Injectable()
export class StrengthsService {

  private hiddenFalseCount:any;
  private hiddenTrueCount:any;

  strengthReasons = [
    { reason: "Your password is not at least 8 characters long.", tag: "length", hidden: false},
    { reason: "Your password does not contain numbers.", tag: "numerics", hidden: false},
    { reason: "Your password does not contain special characters.", tag: "specialChars", hidden: false},
    { reason: "Your password does not contain any uppercase letters.", tag: "uppercase", hidden: false},
    { reason: "Your password does not contain any lowercase letters.", tag: "lowercase", hidden: false},
    { reason: "Your password quite literally contains the word 'password'. You're a dickhead.", tag: "password", hidden: true},
    { reason: "Your password does not contain the name of any NSYNC members.", tag: "nsync", hidden: false},
    { reason: "Your password does not contain any swear words.", tag: "swearWords", hidden: false},
    { reason: "Your password has a series of sequential numbers. For the love of God, fix that shit.", tag: "sequentialNumbers", hidden: true},
    { reason: "Your password does not contain the winning margin of the famous 2005 AFL Grand Final.", tag: "grandFinal", hidden: false},
    { reason: "Your password was not given enough love and attention while it was young to develop enough self-esteem to be strong later in life.", tag: "love", hidden: false}, //to do
    // { reason: "Your password does not contain any of the script of 'Lorum Ipsum'.", tag: "lorum", hidden: false},
    { reason: "Your password contains zero references to Jesus, you heathen.", tag: "jesus", hidden: false},
    { reason: "Your password contains racist terms. You need to check your morals more than your password.", tag: "racist", hidden: true},
    { reason: "Your password contains a penis. No wonder it's so insecure: it's short as.", tag: "penis", hidden: true},
    { reason: "Your password does not contain a vagina. Should put one in. They're bloody (sorry) strong.", tag: "vagina", hidden: false},
    { reason: "Don't tell me your favourite number is 7? Be original. Get a new one.", tag: "seven", hidden: true},
    { reason: "Chuck a cheeky Avenger in there for some more security.", tag: "avengers", hidden: false},
    { reason: "Oh boy. Your password contains the name of a dead Avenger. They're not going to be of much use. #thanosdidnothingwrong", tag: "avengersDead", hidden: true},
    { reason: "The brand of gel that Pauly D uses could help harden not just his follicles, but your password too.", tag: "gel", hidden: false},
    { reason: "Genghis Khan conquered huge chunks of central Asia and China back in the day. He'd be a good addition to your password.", tag: "genghis", hidden: false},
    { reason: "The name of the loveable volleyball companion to Tom Hanks would help keep your password from being lonely.", tag: "wilson", hidden: false},
    { reason: "Your password should also be mentally strong. Tell it you love it, no matter what.", tag: "love", hidden: false},
    { reason: "Blue magic pill? Get your password to ingest that (think less Matrix and more Pfizer).", tag: "viagra", hidden: false},
    { reason: "The Devil Wears _____ is a fantastic movie and should be referenced anywhere.", tag: "prada", hidden: false},
    { reason: "How much does your password lift, bro? 10kg? 30kg? 200kg? Never skip password day. Bro.", tag: "lift", hidden: false},
    { reason: "Get a copyright symbol in there. Make it intellectually strong.", tag: "copyright", hidden: false},
    { reason: "Alright. Go on. Chuck an emoji in there.", tag: "emoji", hidden: false},
    { reason: "Garlic is strong. Hackers are pale, scrawny creatures, like vampires. Ward them off with it.", tag: "garlic", hidden: false},
    { reason: "\"N-now th-that that don't kill me\" once said the infamous Kanye West. What's the next line?", tag: "kanye", hidden: false},
    { reason: "A bit of Aussie music trivia. It's the only Midnight Oil song with the word \'strong\' in the title.", tag: "oils", hidden: false},
    { reason: "What did Mr Strong eat that made him so thicc?", tag: "eggs", hidden: false},
    { reason: "It seems you have slipped in a synonym for 'weak'. Purge the bad boy.", tag: "synonym", hidden: true},
    { reason: "If you can dodge a wrench you can dodge a ____. Or a hacker.", tag: "wrench", hidden: false},
    { reason: "Tell you what's hard? Pistachio shells. Tell us your favourite nut.", tag: "nuts", hidden: false},
    { reason: "The name of the strong little men that you hire to climb Everest with you. Empahsis on you. I've no wish to do that.", tag: "sherpa", hidden: false},
    { reason: "Trivia time: How easy is it to keep a Prime Minister for a full term in office in Australia? a) Easy, b) Hard, c) Frigging impossible", tag: "pm", hidden: false},
    { reason: "It's known as the black dog. A prick to get rid of, and like your password, your approach to mental health should be equally as strong.", tag: "depression", hidden: false},
    { reason: "\"There's no aphrodisiac like...\" Like what? Possibly a hard-to-crack password. You might want to check out the Whitlams for this answer.", tag: "whitlams", hidden: false},
    { reason: "This bone is tougher than concrete. Name it to shore your password up.", tag: "bone", hidden: false},
    { reason: "C'mon, mate. You've put a weak base/acid in your password. Get rid of it.", tag: "acid", hidden: true},
    { reason: "You've got a piss-weak beer called Corona in your password. Exorcise it please.", tag: "corona", hidden: true}
    // { reason: "Include the name of a Category 5 hurricane to blow your hacker a number of kilometres off shore.", tag: "cat5", hidden: false}
    // { reason: "", tag: "", hidden: false},
  ];

  tempReasons = [];

  clearTempArray() {
    this.tempReasons = [];
  }

  getTempListLength() {
    return this.tempReasons.length;
  }

  addToTempArray(reason:string) {
    this.tempReasons.push(reason);
  }

  determineHiddenCount() {
    for (var i = 0; i < this.strengthReasons.length; i++) {
      this.strengthReasons[i].hidden ? this.hiddenTrueCount++ : this.hiddenFalseCount++;
    }
  }

  getHiddenTrueCount() {
    return this.hiddenTrueCount;
  }

  getHiddenFalseCount() {
    return this.hiddenFalseCount;
  }

  setCountsToZero() {
    this.hiddenTrueCount = 0;
    this.hiddenFalseCount = 0;
  }

}

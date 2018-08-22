import { Injectable } from '@angular/core';

@Injectable()
export class StrengthsService {

  strengthReasons = [
    { reason: "Your password is not at least 8 characters long.", tag: "length"},
    { reason: "Your password does not contain numbers.", tag: "numerics"},
    { reason: "Your password does not contain special characters.", tag: "specialChars"},
    { reason: "Your password does not contain any uppercase letters.", tag: "uppercase"},
    { reason: "Your password does not contain any lowercase letters.", tag: "lowercase"},
    { reason: "Your password quite literally contains the word 'password'. You're a dickhead.", tag: "password"},
    { reason: "Your password does not contain the name of any NSYNC members.", tag: "nsync"},
    { reason: "Your password does not contain any swear words.", tag: "swearWords"},
    { reason: "Your password has a series of sequential numbers. For the love of God, fix that shit.", tag: "sequentialNumbers"},
    { reason: "Your password does not contain the winning margin of the famous 2005 AFL Grand Final.", tag: "grandFinal"},
    { reason: "Your password was not given enough love and attention while it was young to develop enough self-esteem to be strong later in life.", tag: "love"}, //to do
    { reason: "Your password does not contain any of the script of 'Lorum Ipsum'.", tag: "lorum"},
    { reason: "Your password contains zero references to Jesus, you heathen.", tag: "jesus"},
    { reason: "Your password contains racist terms. You need to check your morals more than your password.", tag: "racist"},
    { reason: "Your password contains a penis. No wonder it's so insecure: it's short as.", tag: "penis"},
    { reason: "Your password does not contain a vagina. Should put one in. They're bloody (sorry) strong.", tag: "vagina"},
    { reason: "Don't tell me your favourite number is 7? Be original. Get a new one.", tag: "seven"},
    { reason: "Chuck a cheeky Avenger in there for some more security.", tag: "avengers"},
    { reason: "Oh boy. Your password contains the name of a dead Avenger. They're not going to be of much use. #thanosdidnothingwrong", tag: "avengersDead"},
    { reason: "The brand of gel that Pauly D uses could help harden not just his follicles, but your password too.", tag: "gel" },
    { reason: "Genghis Khan conquered huge chunks of central Asia and China back in the day. He'd be a good addition to your password.", tag: "genghis" },
    { reason: "The name of the loveable volleyball companion to Tom Hanks would help keep your password from being lonely.", tag: "wilson" },
    { reason: "Your password should also be mentally strong. Tell it you love it, no matter what.", tag: "love" },
    { reason: "Blue magic pill? Get your password to ingest that (think less Matrix and more Pfizer).", tag: "viagra" },
    { reason: "The Devil Wears _____ is a fantastic movie and should be referenced anywhere.", tag: "prada" },
    { reason: "How much does your password lift, bro? 10kg? 30kg? 200kg? Never skip password day. Bro.", tag: "lift" },
    { reason: "Get a copyright symbol in there. Make it intellectually strong.", tag: "copyright" },
    { reason: "Alright. Go on. Chuck an emoji in there.", tag: "emoji" , website: "http://www.google.com"},
    { reason: "Garlic is strong. Hackers are pale, scrawny creatures, like vampires. Ward them off with it.", tag: "garlic" },
    { reason: "\"N-now th-that that don't kill me\" once said the infamous Kanye West. What's the next line?", tag: "kanye" },
    { reason: "A bit of Aussie music trivia. It's the only Midnight Oil song with the word \'strong\' in the title.", tag: "oils" },
    { reason: "What did Mr Strong eat that made him so thicc?", tag: "eggs" },
    { reason: "It seems you have slipped in a synonym for 'weak'. Purge the bad boy.", tag: "synonym" },
    { reason: "If you can dodge a wrench you can dodge a ____. Or a hacker.", tag: "wrench" }
    // { reason: "Tell you what's hard? Pistachio shells. Nah, tell us your favourite nut.", tag: "nuts" }
    // { reason: "Prince Rupert has a drop of glass named after him. It's pretty strong. Chuck him in.", tag: "rupert" },
    // { reason: "Throw in a line from Die Hard. The first one. No, I'm not kidding.", tag: "diehard" },
    // { reason: "I'm sorry, your password contains references to known fictional villains. Best to keep them out.", tag: "villains" },
    // { reason: "Your password is does not contain a cryptocurrency reference like BTC, and is therefore not hip enough. #HODL", tag: "crypto"}
    // { reason: "Throw in a line from Die Hard. The first one. No, I'm not kidding.", tag: "diehard" },


    // { reason: "", tag: "" },
  ];

  tempReasons = [];

  clearTempArray() {
    this.tempReasons = [];
  }

  addToTempArray(reason:string) {
    this.tempReasons.push(reason);
  }

}

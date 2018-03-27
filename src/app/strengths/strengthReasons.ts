import { StrengthReason } from './strengthReason';

export const STRENGTHREASONS: StrengthReason[] = [
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
  { reason: "Your password does not contain any of the script of 'Lorum Ipsum'.", tag: "lorum"}, //to do
  { reason: "Your password contains zero references to Jesus, you heathen.", tag: "jesus"},
  { reason: "Your password contains racist terms. You need to check your morals more than your password.", tag: "racist"},
  { reason: "Your password is does not contain a cryptocurrency reference like BTC, and is therefore not hip enough. #HODL", tag: "crypto"},
  { reason: "Your password contains the word 'penis'. No wonder it's so insecure: it's short as.", tag: "penis"}
];

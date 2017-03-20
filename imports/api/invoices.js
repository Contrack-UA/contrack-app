import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Invoices = new Mongo.Collection('invoices');

Meteor.methods({
  'invoices.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'invoices.remove'(invID) {
    check(invID, String);

    Tasks.remove(invID);
  }
});

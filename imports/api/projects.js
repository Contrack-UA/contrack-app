import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Projects = new Mongo.Collection('projects');

Meteor.methods({
  'projects.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Projects.insert({
      //TODO
    });
  },
  'projects.remove'(projID) {
    check(projID, String);

    Projects.remove(projID);
  }
});

import './lightPostSensorForm.html';
import {changeStatusForLightposts} from '../../api/collections/lightPosts.js';

Template.sensorActivationForm.events({
  'submit #sensorForm'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    const target = event.target;
    const lampID = target.lightpost.value;
    const sensor = target.sensor.value;
    const isOn = true;
    changeStatusForLightposts(lampID, sensor, isOn);
  },
});

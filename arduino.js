Blockly.Arduino['motor_run'] = function(block) {
  var in1 = block.getFieldValue('IN1');
  var in2 = block.getFieldValue('IN2');
  var dir = block.getFieldValue('DIR');
  var speed = block.getFieldValue('SPEED');

  Blockly.Arduino.setups_['motor_' + in1] =
    'pinMode(' + in1 + ', OUTPUT);\n' +
    'pinMode(' + in2 + ', OUTPUT);';

  var code = '';

  if (dir == 'F') {
    code += 'analogWrite(' + in1 + ', ' + speed + ');\n';
    code += 'digitalWrite(' + in2 + ', LOW);\n';
  } else {
    code += 'analogWrite(' + in2 + ', ' + speed + ');\n';
    code += 'digitalWrite(' + in1 + ', LOW);\n';
  }

  return code;
};

Blockly.Arduino['motor_stop'] = function(block) {
  var in1 = block.getFieldValue('IN1');
  var in2 = block.getFieldValue('IN2');

  return `
digitalWrite(${in1}, LOW);
digitalWrite(${in2}, LOW);
`;
};

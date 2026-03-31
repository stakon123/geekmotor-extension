//% color="#FF6600"
namespace geekmotor {

    //% block="motor A IN1 [IN1] IN2 [IN2] direction [DIR] speed [SPEED]"
    //% IN1.shadow="number" IN1.defl=5
    //% IN2.shadow="number" IN2.defl=6
    //% SPEED.shadow="number" SPEED.defl=150
    export function motorA(parameter: any, block: any) {

        let in1 = parameter.IN1.code;
        let in2 = parameter.IN2.code;
        let speed = parameter.SPEED.code;
        let dir = parameter.DIR.code;

        Generator.addSetup(`motorA_${in1}`, `
pinMode(${in1}, OUTPUT);
pinMode(${in2}, OUTPUT);
`);

        if (dir == "F") {
            Generator.addCode(`
analogWrite(${in1}, ${speed});
digitalWrite(${in2}, LOW);
`);
        } else {
            Generator.addCode(`
analogWrite(${in2}, ${speed});
digitalWrite(${in1}, LOW);
`);
        }
    }

    //% block="motor B IN3 [IN3] IN4 [IN4] direction [DIR] speed [SPEED]"
    //% IN3.shadow="number" IN3.defl=9
    //% IN4.shadow="number" IN4.defl=10
    //% SPEED.shadow="number" SPEED.defl=150
    export function motorB(parameter: any, block: any) {

        let in3 = parameter.IN3.code;
        let in4 = parameter.IN4.code;
        let speed = parameter.SPEED.code;
        let dir = parameter.DIR.code;

        Generator.addSetup(`motorB_${in3}`, `
pinMode(${in3}, OUTPUT);
pinMode(${in4}, OUTPUT);
`);

        if (dir == "F") {
            Generator.addCode(`
analogWrite(${in3}, ${speed});
digitalWrite(${in4}, LOW);
`);
        } else {
            Generator.addCode(`
analogWrite(${in4}, ${speed});
digitalWrite(${in3}, LOW);
`);
        }
    }

    //% block="stop motors A [IN1] [IN2] B [IN3] [IN4]"
    export function stop(parameter: any, block: any) {

        let in1 = parameter.IN1.code;
        let in2 = parameter.IN2.code;
        let in3 = parameter.IN3.code;
        let in4 = parameter.IN4.code;

        Generator.addCode(`
digitalWrite(${in1}, LOW);
digitalWrite(${in2}, LOW);
digitalWrite(${in3}, LOW);
digitalWrite(${in4}, LOW);
`);
    }
}

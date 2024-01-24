enum MotorbitCarMotor{
    //% block="A"
    MotorA,
    //% block="B"
    MotorB
}

//% color="#2695b5" weight=100 icon="\uf1b9" block="MotorBit"
//% groups=['MotorBit']
namespace motorbit {
    /**
     * Gira o motor em uma dada velocidade por determinado tempo.
     * Se a velocidade for positiva, o motor gira em um sentido, se for negativa, o motor gira no sentido inverso.
     */
    //% block="girar motor %motor com velocidade %speed\\%"
    //% group='MotorBit' weight=100 blockGap=8
    //% expandableArgumentMode="toggle"    inlineInputMode=inline
    //% speed.shadow="speedPicker"
    export function carMotorRun(motor: MotorbitCarMotor, speed: number) {
        if (motor == MotorbitCarMotor.MotorA) {
            if (speed > 0) {
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.analogWritePin(AnalogPin.P8, 10 * speed)
            } else {
                pins.digitalWritePin(DigitalPin.P0, 1)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.analogWritePin(AnalogPin.P8, -10 * speed)
            }
        } else {
            if (speed > 0) {
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.P13, 1)
                pins.analogWritePin(AnalogPin.P15, 10 * speed)
            } else {
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.P13, 0)
                pins.analogWritePin(AnalogPin.P15, -10 * speed)
            }
        }
    }

    /**
     * Altera a velocidade do motor para um valor entre 0 e 100%, sem alterar o sentido de rotação.
     */
    //% block="velocidade do motor %motor em %speed\\%"
    //% group='MotorBit' weight=50 blockGap=8
    //% speed.min=0 speed.max=100
    export function carMotorSpeed(motor: MotorbitCarMotor, speed: number) {
        if (motor == MotorbitCarMotor.MotorA) {
            pins.analogWritePin(AnalogPin.P8, 10 * speed)
        } else {
            pins.analogWritePin(AnalogPin.P15, 10 * speed)
        }
    }

    /**
     * Interrompe a rotação do motor.
     */
    //% block="parar motor %motor"
    //% group='MotorBit' weight=0 blockGap=8
    export function carMotorStop(motor: MotorbitCarMotor) {
        if (motor == MotorbitCarMotor.MotorA) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.analogWritePin(AnalogPin.P8, 1023)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P15, 1023)
        }
    }
}

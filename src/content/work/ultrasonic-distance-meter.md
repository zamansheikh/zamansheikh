---
title: "Ultrasonic Distance Meter"
summary: "An Arduino circuit that measures distance with an HC-SR04 ultrasonic sensor and shows it on a seven-segment display."
category: experiment
year: 2022
role: "Co-developer, university project"
stack: ["Arduino", "C++", "HC-SR04", "Tinkercad"]
status: archived
order: 81
color: "#00878F"
cover: ../../assets/work/ultrasonic-distance-meter/display.png
gallery:
  - src: ../../assets/work/ultrasonic-distance-meter/setup-1.png
    caption: "The circuit: Arduino Uno, HC-SR04 sensor and seven-segment display"
  - src: ../../assets/work/ultrasonic-distance-meter/setup-2.png
    caption: "Running the sketch in the circuit simulator"
links:
  repo: "https://github.com/zamansheikh/7SegmentDisplayWithArduino"
highlights:
  - "Time-of-flight distance from an HC-SR04 ultrasonic sensor"
  - "Rounded result lit on a seven-segment LED display"
  - "Built with Mohaiminul Islam Nafiz at Daffodil International University"
---

A university hardware project I built with Mohaiminul Islam Nafiz. An Arduino Uno fires an HC-SR04 ultrasonic sensor, times the echo, converts the time of flight into metres and rounds it to a whole number. The sketch then lights the matching segments on a seven-segment display, from 0 to 9.

We designed the circuit and ran the sketch in Tinkercad's simulator, and the repository keeps the sketch, a bill of materials, a PDF of the circuit and a demo GIF.

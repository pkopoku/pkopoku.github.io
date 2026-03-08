---
title: "Morse-Pi"
description: "A Raspberry Pi project that translates text into Morse code and blinks it out through an LED via GPIO control."
tags: ["Python", "Raspberry Pi", "GPIO", "Hardware"]
year: 2016
repo: "https://github.com/pkopoku/morse-pi"
image: "/images/projects/morse-pi-2.jpg"
imageAttribution: "Photo by Johan Larsson, CC BY 2.0"
featured: true
order: 1
---

## The Idea

I had a Raspberry Pi and an evening with nothing scheduled. The question was simple enough: could I get a small computer to talk to the physical world using nothing but Python and a blinking light?

Morse-Pi was the answer. It takes a text input, translates it into Morse code, and drives a GPIO pin high and low to blink the corresponding dot-dash pattern through an LED. No libraries beyond RPi.GPIO. No abstraction beyond what the problem needed.

## How It Works

The circuit is deliberately minimal — GPIO pin 2 connects to an LED, with ground at pin 39. The software maps each character to its Morse sequence, then controls the pin with precise timing to produce dots (short blinks) and dashes (long blinks), with pauses for letter and word spacing.

The `Jarvis/` module handles the character-to-Morse translation, keeping encoding logic separate from the GPIO control loop in `main.py`.

## Why It Matters

Not every project needs to scale to millions of users. Morse-Pi was a reminder that there's something satisfying about writing software that does something *physical* — where the correctness of your code is visible to the naked eye, blinking at you in the dark.

It also happened to be one of the first things I built entirely for its own sake. That's worth something.

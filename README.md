behavior | input | output
---|---|---
Animal has starting hunger and sleep level of 10 | user starts game | Display shows state of hunger and sleep at 10
When no action is taken hunger level  drops | user does nothing | after 10 seconds hunger level lowers 1
When no action is taken energy level  drops | user does nothing | after 20 seconds energy level lowers 1
When no action is taken mood level  drops | user does nothing | after 30 seconds mood level lowers 1
Hunger is increased when fed | User feeds animal | Hunger is increased to 10 (always)
Energy is increased when slept | User puts animal to sleep | Energy is increased to 10 (always)
Mood is increased when played with if Hunger and energy is 10 | User plays with animal | Mood is increased by 1
Once mood is equal to 10 game is won | User presses play button while at 9 mood levels | Game Won!
Once hunger is equal to 0 game is lost | User does nothing for too long | Hunger reaches zero and game is lost

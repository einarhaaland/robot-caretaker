# Problemer med å sette opp robot
http://doc.aldebaran.com/2-4/family/pepper_user_guide/webpage.html

* Bruke python rammeverk til å factory resette:
http://doc.aldebaran.com/2-4/naoqi/core/alsystem-api.html



* Tror denne krever samme passord:
ssh into pepper (https://www.robotlab.com/support/how-to-perform-factory-reset-on-pepper-robot) http://doc.aldebaran.com/2-4/dev/tools/opennao.html

* Installere ny harddisk med NAOQIOS installert

* Webots



# Service'e flere typer roboter
Player/Stage:

The Player/Stage Project provides Open Source tools that
simplify controller development, particularly for multiplerobot, distributed-robot, and sensor network systems

Interessert i "The player"

Gerkey, B., Vaughan, R., and Howard, A. (2003) The Player/Stage Project: Tools for Multi-Robot and Distributed Sensor Systems. Proceedings of the International Conference on Advanced Robotics 317-323
 Collet, T. H. J., MacDonald, B. A., and Gerkey, B. (2005) Player 2.0: Toward a practical robot programming framework. Proceedings of the Australasian Conference on Robotics and Automation (ACRA)




# Simulert robot

Bruke SDK i android studio, sjekke port/ip med bonjour/choregraphe

Webots NAO, Kan jeg bruke Webots kun for virtuell robot? bruke IP og port men gjøre ting via NaoQI?

Installer Choregraphe

Kan jeg bruke choregraphe kun for virtuell robot? bruke IP og port men gjøre ting via NaoQI?

Using the NAOqi binary: /[path-to-installed-Choregraphe]/bin/naoqi-bin.


# Log
 QiSDK kjører. Emulator kjører. QiSDK er Kotlin/java og et annet rammeverk enn jeg hadde tenkt å bruke. Dette kan fucke med planen om flere roboter og flask
Android studio -> tools -> robotSDK -> emulator. repeat hvis noe galt skjedde


TODO:
* Sjekke ut QiSDK: Kan det kjøres remote til roboten eller må det kjøres på robot? Hva får det til?(hvilke bevegelser)
	* Virker som det kun er en applikasjon kjørende på tablet til robot.
	* Hva er en service?? kan tableten Subscribe på en topic (pub/sub)
	* Test ut en qimessaging client: http://doc.aldebaran.com/2-5/dev/libqi/guide/py-client.html#guide-py-client
		* python package qi requires python 3.5, andre dependencies krever python >=3.7, kan da ikke pip installe qi.
		* virker som alle qi packages bruker utdatert python
	* Kan ikke bruke NAOqi 2.5? https://stackoverflow.com/questions/63355141/can-i-use-naoqi-2-5-c-python-sdk-features-on-a-naoqi-2-9-qisdk-robot-pepp?rq=1
* Hvis vi kjører på med QiSDK:
	* Sjekk ut pubsub (mqtt python?, rabbitMQ python?)
	* lag actions og behaviours tilsvarende hva QiSDK får til
	* Lag QiSDK app som subscriber og få gjennom en bevegelse fra frontend -> backend -> pub -> sub -> QiSDK -> robot

* Webots
	* melding kommer kun frem når sim stopper
	* melding kommer frem hvis jeg omgår receiver funksjon ->Les på pika/rabbitmq doc?







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

	* lack of resources til rabbitmq? https://www.rabbitmq.com/connection-blocked.html
	* Funker nå uten endringer??

* Emotional interface - hvilke bevegelser innegår i "Excited"
	* Lage et interface som brukere kan implementere
		* Language interoperability - hvordan lage et interface som kan implementeres i flere språk?
			* Trengs flere språk? Lage et DSL for dette?
			* CORBA - Common object Request Broker Architecture (utdatert måte?)
			* COM - Common Object model (utdatert måte?)
			* CORBA, COM ANSAware, DCOM, DCE (Distributed computing environments)
			* RPC - Remote procedure Call
			* Metadata? lage interface i XML eller lignende?
			* Foreign function interfaces
			* Wrapper library - adapter design pattern
			* SWIG -nei, for C/C++ -> x
	* Hvor skal dette ligge i infrastrukturen?

* Webots Emotion
	* Nao kan bruke .motion filer. Tror det finnes noen i Choregraphe installation + mulighet for å lage nye.
	* Motorer RHand og LHand eksisterer ikke i webots, er sannsynligvis erstatter med flere "phalanx" motorer
		* phalanx er finger-leddene. 2 i tommer, 3 i finger1, 3 i finger2
	* Motor verdier fra Choregraphe stemmer ikke overens med verdiene Webots forventer fra en .motion fil
		* verdier i .motion filer er i radianer, ikke grader.
	* Konvertert script funker, men robot utfører en enkel bevegelse og stopper
	* Bevegelse skjer etter motion keyframes er ferdig??

* https://github.com/gunnarkleiven/WiRoM2.0


# .motion converter troubleshooting
* Endre på test.motion for å se når den slutter å funke / finne limitation.
	* funker med 12 poses -> burde da ikke være mengden poses fordi det burde skje en action på pose 7 i Excited.motion
	* Funker med mange desimaltall på verdiene
	* Funker ikke med whitespaces i motionfil -> tror ikke det er whitespaces i excited.motion heller
		* Virker som ting kjører async, fikk feil på linje 2 før linje 1
	* Funker med for store verdier, leddene går til max før en warning blir displayed. Motionen fortsetter etterpå
	* LHand og RHand blir ignorert som forventet og motion kjører fortsatt med RHand,LHand som siste kolonner
	* la til et ledd til bak LHand og LHand. Den bevegelsen skjedde først etter motion var ferdig. Bingo?
		* Prøv å ta ut RHand og LHand av excited
		* Prøv å erstatt RHand og LHand med andre for å sjekke om det kan være mengden ledd og ikke spesifkt Hand som gjør det.
			* Skjer fortsatt etter å ha erstattet RHand og LHand med LElbowRoll og RElbowRoll
		* Hjalp ikke å bruke flere threads (4 -> 8). samme resultat
		* Fjernet ett ledd, nå 4 til sammen, funket ikke, nr.3 (LElbowRoll) utføres ikke og nr. 4 (LShoulderPitch) utføres etter motion er ferdig.
		* Byttet om på nr. 3 og nr. 4, nå er det nr. 3 (LShoulderPitch) som skjer til slutt og nr. 4 (LElbowRoll) utføres ikke -> rekkefølgen irrelevant?
		* Fjernet enda et ledd (LShoulderPitch): ElbowPitch blir fortsatt ikke utfør, ikke på slutten heller.
			* Endret fjernet ledd til ElbowPitch: ShoulderPitch utføres etter.
		* Byttet rekkefølge på ledd: ShoulderPitch først gjør at kun ShoulderPitch utføres. siste bevegelse skjer etterpå.
	* prøv å ikke gå utenfor accepted values, warning gir ikke mening
		* warning sier headyaw er > 0.5 , Det stemmer ikke. HeadPitch er > 0.5 , men 6 ganger, kun 4 warnings
		* Endret verdier til å være under 0.5 (det tallet som står i warning i webots)
			* Får ikke warnings nå, men samme resultat (LElbowRoll skjer ikke, LShoulderPitch skjer etter motion)
	* Negative verdier brukes i filer som funker
	* Erstatt * -> 0?
	* Fjernet masse desimaltall: Ingen endring.
	* HeadYaw og LShoulderPitch kan gjøres samtidig, HeadPitch blir da gjort etterpå
	* LØSNING: Webots liker ikke masse asterix's (*), alt funker når jeg erstatter med 0 istedet
		* 0 er dog ikke "baseline" for alle joints, motions blir wonky uten riktige baselines
		* Funker asterix hvis jeg har riktig baseline først?

# Messaging
* Sende JSON?
	* {
		emotion: sad,
		actions: [
			{
				action: head down,
				speed: slow,
				deltaValue: high
			},
			{
				action: turn wrists inward,
				speed: slow,
				deltaValue: high
			}
			{
				action: bend forward,
				speed: slow,
				deltaValue: low
			}
		]
	}
* Sende webots function calls og si at hver bruker må implementere Webots API -> deres robot
	* Parse strings som functioncalls
		* Python, JS, MatLab: eval("function(arg1, arg2)")
		* C/C++: https://stackoverflow.com/questions/11078267/is-there-c-c-equivalent-of-evalfunctionarg1-arg2
		* Java: https://stackoverflow.com/questions/2605032/is-there-an-eval-function-in-java (JEval kanskje?)
		* C#: https://stackoverflow.com/questions/6052640/is-there-an-eval-function-in-c
	* Args kan bli referere til en config fil implementert av bruker 
		* function(config[ slowSpeed ], config[ angle ] )
	* Security risk: https://www.w3schools.com/jsref/jsref_eval.asp
		* Mulig jeg ikke har satt opp messaging på en sikker måte heller

# Threading
* Er threading nødvendig i det hele tatt?
	* Ja hvis controller har main loop
	* Nei hvis ikke?

# Andre roboter:
* Sjekke ut flere roboter. Noen som er enklere å jobbe med?
	* QTrobot V2, (ROS, ansikt++)
		* http://wiki.ros.org/Robots/qtrobot


# Controller fil 
* ved motor bevegelse:
int main() {
  WbDeviceTag motors[6];
  const char *MOTOR_NAMES[] = {"hip0", "hip1", "hip2", "hip3", "spine", NULL};
  const double freq = 1.7;   // motion frequency
  double ampl = 1.0;         // motion amplitude
  double spine_angle = 0.0;  // spine angle
  double t = 0.0;            // elapsed simulation time
  int mode = RUN;
  int prev_key = 0;

  wb_robot_init();

  // get motor device tags
  for (i = 0; MOTOR_NAMES[i]; i++) {
    motors[i] = wb_robot_get_device(MOTOR_NAMES[i]);
    assert(motors[i]);
  }
while (wb_robot_step(TIME_STEP) != -1) {}

# Problemer med motor control
* Går det i det hele tatt an å utføre flere bevegelser samtidig?
	* lage self.sequence[lift_arm, nod, ...] og lytte på den i run()?
* Hvordan vite hvilke motorer er på hvilken index i motors[]?
	* La konvertering som et bruker problem som fikses i config (bruker må legge inn hvilke motorer som er hvilke)

# TODO:
* langium for generering av kontroller (ANTLR, Xtext..)
	* generere ved hjelp av config (hvilket format? .json, .yaml ...) fil som fylles ut av bruker?
	* sjekk ut hvordan roboter er lagt til i webots, kanskje bruke samme config format?
		* fant noen id'er i C:\Program Files\Webots\projects\robots\robotis\darwin-op\libraries\robotis-op2\robotis\Framework\src\motion
	* Skal dette legges til i browser? Ser ut som langium er ment til å kjøre i browser
		* Frontend -> Add robot skjema som genererer controller?
	* Må nok også generere .motion filer hvis jeg beholder motion måten å bevege robot på.
* motor bevegelse
* use case diagram (se dat250/1 rapport)
* deep dive i litteratur (husk å dokumentere søk)

# Known Bugs
* Får `WARNING: nao_emotion_controller: Forced termination (because process didn't terminate itself after 1 second).` på stop av simulation.
Using nao_motor_controller:
* Robot vil ikke utføre bevegelse. mulig hver set_motor overskriver den forrige.
* Bevegelse skjer ikke hvis jeg trykker for tidlig. Koden blir kjørt men bevegelse skjer ikke. (Kan være Webots API)
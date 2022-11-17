grammar RobotMotionLanguage

entry Model:
    def=Def;

Def: 
    'define' name=ID stmts+=( Move | MultiMove | Repeat )* 'end';

Repeat:
    'repeat' amount=NUMBER stmtsToRepeat+=(  Move | MultiMove )* 'end';

MultiMove:
    'multimove' compositeMoves+=(Move)* 'end';

Move:
    'move' (side=SIDE)? joint=JOINT (rotation=ROT)? 'to' position=NUMBER;


terminal NUMBER returns number: /[+-]?[0-9]+(\.[0-9]*)?/;
terminal SIDE: ('right' | 'left');
terminal JOINT: ('finger' | 'shoulder');
terminal ROT: ('pitch' | 'roll' | 'yaw');
terminal ID: /[_a-zA-Z][\w_]*/;

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
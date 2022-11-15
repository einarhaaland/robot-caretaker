grammar RobotMotionLanguage

entry Model:
    (defs+=Def)*;

Def: 
    'define' name=ID (stmt+=Stmt)* 'end';

Stmt: 
    (Move | MultiMove | Repeat)*; //potential left-recursion

Repeat:
    'repeat' amount=NUMBER (stmt+=Stmt)* 'end';

MultiMove:
    'multimove' (compositemoves+=Move)* 'end';

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